import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export const Tabler = ({ children }) => {
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const [wrapper, setWrapper] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      if (containerRef.current && !shadowRef.current) {
        // Create a shadow root for this instance
        const shadowRoot = containerRef.current.attachShadow({ mode: "open" });
        shadowRef.current = shadowRoot;

        // Inject Tabler stylesheet
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "/tabler.replaced.css";

        // Create a wrapper div for children
        const wrapperDiv = document.createElement("div");
        wrapperDiv.style.display = "inline-block";
        wrapperDiv.style.width = "auto";
        wrapperDiv.style.height = "auto";

        shadowRoot.appendChild(styleLink);
        shadowRoot.appendChild(wrapperDiv);
        setWrapper(wrapperDiv);

        // Load and run Tabler script in an isolated context
        try {
          const response = await fetch("/tabler.min.js");
          const scriptText = await response.text();

          // Wrap the code in a function that temporarily sets window.SHADOW_DOC
          const runTablerScript = new Function(
            "shadowRoot",
            `
            window.USE_FALLBACK_ANCHOR = true;
            const originalShadowDoc = window.SHADOW_DOC;
            window.SHADOW_DOC = shadowRoot;
            ${scriptText}
            window.SHADOW_DOC = originalShadowDoc;
          `
          );
          runTablerScript(shadowRoot);
        } catch (err) {
          console.error("Failed to load Tabler script:", err);
        }
      }
    };

    initialize();
  }, []);

  return (
    <div ref={containerRef}>
      {wrapper && ReactDOM.createPortal(children, wrapper)}
    </div>
  );
};
