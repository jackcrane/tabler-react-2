import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export const Tabler = ({ children }) => {
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const [wrapper, setWrapper] = useState(null);

  useEffect(() => {
    if (containerRef.current && !shadowRef.current && window) {
      const shadowRoot = containerRef.current.attachShadow({ mode: "open" });
      shadowRef.current = shadowRoot;

      // Set the global so tabler.min.js uses the shadowRoot
      window.SHADOW_DOC = shadowRoot;

      // Load Tabler styles
      const styleLink = document.createElement("link");
      styleLink.rel = "stylesheet";
      styleLink.href = "/tabler.replaced.css";

      // Create a wrapper div for children
      const wrapperDiv = document.createElement("div");
      wrapperDiv.style.display = "inline-block";
      wrapperDiv.style.width = "auto";
      wrapperDiv.style.height = "auto";

      // Inject Tabler scripts
      const script = document.createElement("script");
      script.src = "/tabler.min.js";
      script.async = true;

      const inlineScript = document.createElement("script");
      inlineScript.textContent = "window.USE_FALLBACK_ANCHOR = true;";

      shadowRoot.appendChild(styleLink);
      shadowRoot.appendChild(wrapperDiv);
      shadowRoot.appendChild(script);
      shadowRoot.appendChild(inlineScript);

      setWrapper(wrapperDiv);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {wrapper && ReactDOM.createPortal(children, wrapper)}
    </div>
  );
};
