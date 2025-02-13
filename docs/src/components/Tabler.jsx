import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export const Tabler = ({ children }) => {
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const [wrapper, setWrapper] = useState(null);

  useEffect(() => {
    if (containerRef.current && !shadowRef.current) {
      shadowRef.current = containerRef.current.attachShadow({ mode: "open" });

      // Load local Tabler styles
      const styleLink = document.createElement("link");
      styleLink.rel = "stylesheet";
      styleLink.href = "/tabler.replaced.css"; // Ensure the path is correct

      // Create a wrapper div for children
      const wrapperDiv = document.createElement("div");
      wrapperDiv.style.display = "inline-block";
      wrapperDiv.style.width = "auto";
      wrapperDiv.style.height = "auto";

      // Inject Tabler scripts
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/js/tabler.min.js";

      const inlineScript = document.createElement("script");
      inlineScript.textContent = "window.USE_FALLBACK_ANCHOR = true;";

      shadowRef.current.appendChild(styleLink);
      shadowRef.current.appendChild(wrapperDiv);
      shadowRef.current.appendChild(script);
      shadowRef.current.appendChild(inlineScript);

      setWrapper(wrapperDiv);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {wrapper && ReactDOM.createPortal(children, wrapper)}
    </div>
  );
};
