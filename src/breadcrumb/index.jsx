import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const ElementToRender = window?.USE_FALLBACK_ANCHOR ? "a" : Link;

export const Breadcrumb = ({ children, ...props }) => (
  <ol className="breadcrumb" aria-label="breadcrumbs" {...props}>
    {children}
  </ol>
);

Breadcrumb.Item = ({ children, href, active, ...props }) => (
  <li className={classNames("breadcrumb-item", active && "active")} {...props}>
    <ElementToRender href={href}>{children}</ElementToRender>
  </li>
);
