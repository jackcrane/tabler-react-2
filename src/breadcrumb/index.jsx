import React from "react";
import classNames from "classnames";

export const Breadcrumb = ({ children, ...props }) => (
  <ol className="breadcrumb" aria-label="breadcrumbs" {...props}>
    {children}
  </ol>
);

Breadcrumb.Item = ({ children, href, active, ...props }) => (
  <li className={classNames("breadcrumb-item", active && "active")} {...props}>
    <a href={href}>{children}</a>
  </li>
);
