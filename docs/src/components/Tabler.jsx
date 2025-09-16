import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const TABLER_CSS_URL =
  "https://cdn.jsdelivr.net/npm/@tabler/core@1.3.0/dist/css/tabler.min.css";
const TABLER_JS_URL = "/tabler.min.js"; // your local path

// Naive CSS rewrite: map `html` → `:host` and `body` → `.shadow-body`.
// Also handle common combos like `body.theme-dark` → `:host(.theme-dark) .shadow-body`.
const rewriteTablerCss = (css) => {
  // body.<class> → :host(.<class>) .shadow-body
  css = css.replace(
    /(^|,)\s*body\.([A-Za-z0-9_-]+)/g,
    (_m, p1, cls) => `${p1} :host(.${cls}) .shadow-body`
  );
  // html body → :host .shadow-body
  css = css.replace(
    /(^|,)\s*html\s+body/g,
    (_m, p1) => `${p1} :host .shadow-body`
  );
  // body → .shadow-body
  css = css.replace(
    /(^|,)\s*body(\b|[^\w-])/g,
    (_m, p1, tail) => `${p1} .shadow-body${tail}`
  );
  // html → :host
  css = css.replace(
    /(^|,)\s*html(\b|[^\w-])/g,
    (_m, p1, tail) => `${p1} :host${tail}`
  );
  css = css.replace(`,[data-bs-theme="light"]`, "");
  return css;
};

export const Tabler = ({ children, theme = "theme-light" }) => {
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const [bodyEl, setBodyEl] = useState(null);

  useEffect(() => {
    let aborted = false;

    const init = async () => {
      if (!containerRef.current || shadowRef.current) return;

      const shadowRoot = containerRef.current.attachShadow({ mode: "open" });
      shadowRef.current = shadowRoot;

      // Create "shadow body" wrapper
      const wrapperDiv = document.createElement("div");
      wrapperDiv.className = "shadow-body"; // our stand-in for <body>
      wrapperDiv.style.display = "contents"; // don't interfere with layout
      wrapperDiv.setAttribute("data-bs-theme", "light");
      shadowRoot.appendChild(wrapperDiv);
      setBodyEl(wrapperDiv);

      // Apply theme class on :host (so rules like :host(.theme-dark) work)
      if (theme) {
        // Attach the theme class to the host element:
        containerRef.current.classList.add(theme);
      }

      // Load & rewrite Tabler CSS → inject into shadow root
      try {
        const res = await fetch(TABLER_CSS_URL, { cache: "force-cache" });
        const originalCss = await res.text();
        const patchedCss = rewriteTablerCss(originalCss);

        if ("adoptedStyleSheets" in Document.prototype) {
          const sheet = new CSSStyleSheet();
          await sheet.replace(patchedCss);
          // Preserve existing sheets if any
          shadowRoot.adoptedStyleSheets = [
            ...shadowRoot.adoptedStyleSheets,
            sheet,
          ];
        } else {
          const styleEl = document.createElement("style");
          styleEl.textContent = patchedCss;
          shadowRoot.prepend(styleEl);
        }
      } catch (e) {
        console.error("Failed to load Tabler CSS:", e);
      }

      // Load and run Tabler JS with a minimal document.body shim
      try {
        const jsRes = await fetch(TABLER_JS_URL, { cache: "force-cache" });
        const scriptText = await jsRes.text();

        const runTablerScript = new Function(
          "shadowRoot",
          "bodyEl",
          `
            // Optional flag you used
            window.USE_FALLBACK_ANCHOR = true;

            // Provide a very thin 'document' shim within this scope
            const _doc = new Proxy(window.document, {
              get(target, prop, receiver) {
                if (prop === "body") return bodyEl;
                return Reflect.get(target, prop, receiver);
              }
            });

            // Some libraries read 'document.documentElement' too; point it at host
            Object.defineProperty(_doc, "documentElement", {
              get: () => shadowRoot.host,
            });

            (function(document){
              ${scriptText}
            })(_doc);
          `
        );

        runTablerScript(shadowRoot, wrapperDiv);
      } catch (err) {
        console.error("Failed to load Tabler script:", err);
      }

      if (aborted) return;
    };

    init();
    return () => {
      aborted = true;
    };
  }, [theme]);

  return (
    <div ref={containerRef}>
      {bodyEl && ReactDOM.createPortal(children, bodyEl)}
    </div>
  );
};
