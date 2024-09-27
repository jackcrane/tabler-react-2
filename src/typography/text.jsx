import React from "react";

export const Text = ({ children, ...props }) => <p {...props}>{children}</p>;

export const Strong = ({ children, ...props }) => (
  <strong {...props}>{children}</strong>
);
export const B = Strong;
export const I = ({ children, ...props }) => <i {...props}>{children}</i>;
export const U = ({ children, ...props }) => <u {...props}>{children}</u>;

const Abbr = ({ children, ...props }) => <abbr {...props}>{children}</abbr>;
const Cite = ({ children, ...props }) => <cite {...props}>{children}</cite>;
const Code = ({ children, ...props }) => <code {...props}>{children}</code>;
const Del = ({ children, ...props }) => <del {...props}>{children}</del>;
const Em = ({ children, ...props }) => <em {...props}>{children}</em>;
const Ins = ({ children, ...props }) => <ins {...props}>{children}</ins>;
const Kbd = ({ children, ...props }) => <kbd {...props}>{children}</kbd>;
const Mark = ({ children, ...props }) => <mark {...props}>{children}</mark>;
const S = ({ children, ...props }) => <s {...props}>{children}</s>;
const Samp = ({ children, ...props }) => <samp {...props}>{children}</samp>;
const Sub = ({ children, ...props }) => <sub {...props}>{children}</sub>;
const Sup = ({ children, ...props }) => <sup {...props}>{children}</sup>;
const Time = ({ children, ...props }) => <time {...props}>{children}</time>;
const Var = ({ children, ...props }) => <var {...props}>{children}</var>;

export const Link = ({ children, ...props }) => <a {...props}>{children}</a>;

export const Special = {
  Abbr,
  Cite,
  Code,
  Del,
  Em,
  Ins,
  Kbd,
  Mark,
  S,
  Samp,
  Sub,
  Sup,
  Time,
  Var,
};

/*

<abbr title="Internationalization">I18N</abbr>
<strong>Bold</strong>
<cite>Citation</cite>
<code>Hello World!</code>
<del>Deleted</del>
<em>Emphasis</em>
<i>Italic</i>
<ins>Inserted</ins>
<kbd>Ctrl + S</kbd>
<mark>Highlighted</mark>
<s>Strikethrough</s>
<samp>Sample</samp>
Text <sub>Subscripted</sub>
Text <sup>Superscripted</sup>
<time>20:00</time>
<u>Underline</u>
<var>x</var> = <var>y</var> + 2

*/
