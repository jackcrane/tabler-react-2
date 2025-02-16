import React, { useEffect } from "react";
import PropTypes from "prop-types";

const generateCSSVariables = (theme) => {
  return theme
    ? Object.entries(theme)
        .map(([key, value]) => `--tblr-${key}: ${value};`)
        .join("\n")
    : "";
};

export const TablerProvider = ({
  children,
  colorScheme = "light",
  theme: themeColors = {},
}) => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/js/tabler.min.js";
    script1.async = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler.min.css";

    const script2 = document.createElement("script");
    script2.textContent = "window.USE_FALLBACK_ANCHOR = true;";

    document.head.appendChild(link);
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    if (colorScheme === "dark") {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  }, [colorScheme]);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      :root {
        ${generateCSSVariables(themeColors || {})}
      }
    `;

    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [themeColors]);

  return <>{children}</>;
};

TablerProvider.propTypes = {
  children: PropTypes.node.isRequired,
  colorScheme: PropTypes.oneOf(["light", "dark"]),
  themeColors: PropTypes.shape({
    light: PropTypes.object,
    dark: PropTypes.object,
  }),
};
