import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";

const TABLER_CSS_URL =
  "https://cdn.jsdelivr.net/npm/@tabler/core@1.3.0/dist/css/tabler.min.css";
const TABLER_JS_URL =
  "https://cdn.jsdelivr.net/npm/@tabler/core@1.3.0/dist/js/tabler.min.js";

/**
 * <Tabler>
 * Same public API as before:
 *   - children
 *   - theme?: "light" | "dark" (defaults to "light")
 * Also accepts className and style for the outer iframe element.
 */
export const Tabler = ({
  children,
  theme = "light",
  className,
  style,
  headExtras = "",
  cssUrl = TABLER_CSS_URL,
  jsUrl = TABLER_JS_URL,
}) => {
  const iframeRef = useRef(null);
  const [mountNode, setMountNode] = useState(null);
  const roRef = useRef(null);

  const srcDoc = useMemo(() => {
    const t = theme === "dark" ? "dark" : "light";
    return `<!DOCTYPE html>
<html lang="en" data-bs-theme="${t}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" href="${cssUrl}">
  ${headExtras}
  <style>
    html, body { margin: 0; padding: 0; }
    body { display: block; background-color: transparent!important; }
    #app { min-height: 0; }
  </style>
</head>
<body>
  <div id="app"></div>
</body>
</html>`;
  }, [cssUrl, headExtras, theme]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.srcdoc = srcDoc;

    const onLoad = () => {
      const doc = iframe.contentDocument;
      const win = iframe.contentWindow;
      if (!doc || !win) return;

      // Ensure theme attribute is correct
      doc.documentElement.setAttribute(
        "data-bs-theme",
        theme === "dark" ? "dark" : "light"
      );

      const app = doc.getElementById("app");
      setMountNode(app || null);

      // Inject Tabler JS in iframe context
      const s = doc.createElement("script");
      s.src = jsUrl;
      s.defer = true;
      doc.head.appendChild(s);

      // Auto-resize to content
      if (roRef.current) {
        try {
          roRef.current.disconnect();
        } catch {}
      }
      const ro = new win.ResizeObserver(() => {
        const h =
          doc.documentElement.scrollHeight ||
          doc.body.scrollHeight ||
          app?.scrollHeight ||
          0;
        // iframe.style.height = `${Math.ceil(h) + 1}px`;
      });
      roRef.current = ro;
      ro.observe(doc.documentElement);

      // Initial sizing tick
      setTimeout(() => {
        const h =
          doc.documentElement.scrollHeight ||
          doc.body.scrollHeight ||
          app?.scrollHeight ||
          0;
        iframe.style.height = `${Math.ceil(h) + 1}px`;
      }, 0);
    };

    iframe.addEventListener("load", onLoad);
    return () => {
      iframe.removeEventListener("load", onLoad);
      if (roRef.current) {
        try {
          roRef.current.disconnect();
        } catch {}
        roRef.current = null;
      }
      setMountNode(null);
    };
  }, [srcDoc, jsUrl, theme]);

  // Keep theme in sync if it changes
  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.documentElement.setAttribute(
        "data-bs-theme",
        theme === "dark" ? "dark" : "light"
      );
    }
  }, [theme]);

  return (
    <>
      <iframe
        ref={iframeRef}
        className={className}
        style={{ width: "100%", border: 0, display: "block", ...(style || {}) }}
        // Add sandbox if you want stricter isolation; e.g.:
        // sandbox="allow-scripts allow-same-origin"
      />
      {mountNode ? ReactDOM.createPortal(children, mountNode) : null}
    </>
  );
};
