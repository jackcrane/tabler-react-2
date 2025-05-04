import React from "react";
import PropTypes from "prop-types";

export const Navbar = ({ type, items }) => {
  // Determine the nav classes based on type: tabs, pills, underline, or default horizontal
  const navTypeClass = type ? `nav-${type}` : "";
  const navClass = ["nav", navTypeClass].filter(Boolean).join(" ");
  const currentPath = window.location.pathname;

  return (
    <ul className={navClass}>
      {items.map((item, idx) => {
        // Dropdown
        if (item.type === "dropdown") {
          const isOpenOnThisPage = item.items.some(
            (child) => child.href === currentPath
          );
          return (
            <li key={idx} className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle${
                  isOpenOnThisPage ? " active" : ""
                }`}
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded={isOpenOnThisPage}
                aria-current={isOpenOnThisPage ? "page" : undefined}
              >
                {item.text}
              </a>
              <ul className="dropdown-menu">
                {item.items.map((child, cidx) => {
                  const isChildActive = child.href === currentPath;
                  return (
                    <li key={cidx}>
                      <a
                        href={child.href}
                        className={`dropdown-item${
                          isChildActive ? " active" : ""
                        }${child.disabled ? " disabled" : ""}`}
                        aria-disabled={child.disabled ? "true" : undefined}
                        aria-current={isChildActive ? "page" : undefined}
                        onClick={(e) => child.disabled && e.preventDefault()}
                      >
                        {child.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }

        // Simple link
        const isLinkActive = item.href === currentPath;
        return (
          <li key={idx} className="nav-item">
            <a
              href={item.href}
              className={`nav-link${isLinkActive ? " active" : ""}${
                item.disabled ? " disabled" : ""
              }`}
              aria-current={isLinkActive ? "page" : undefined}
              aria-disabled={item.disabled ? "true" : undefined}
              onClick={(e) => item.disabled && e.preventDefault()}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Navbar.propTypes = {
  /** one of 'tabs', 'pills', 'underline'; omit or undefined for default horizontal */
  type: PropTypes.oneOf(["tabs", "pills", "underline"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["link", "dropdown"]).isRequired,
      href: PropTypes.string, // for link
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      /** only for dropdown */
      items: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
            .isRequired,
          disabled: PropTypes.bool,
        })
      ),
      disabled: PropTypes.bool,
    })
  ).isRequired,
};

Navbar.defaultProps = {
  type: undefined,
};
