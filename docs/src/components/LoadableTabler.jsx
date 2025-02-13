import loadable from "@loadable/component";

export const Card = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Card)
);
export const Alert = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Alert)
);
export const Avatar = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Avatar)
);
export const AvatarStackedList = loadable(() =>
  import("tabler-react-2").then((mod) => mod.AvatarStackedList)
);
export const Badge = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Badge)
);
export const Breadcrumb = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Breadcrumb)
);
export const Button = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Button)
);
export const Dropdown = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Dropdown)
);
export const Form = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Form)
);
export const Input = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Input)
);
export const Modal = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Modal)
);
export const Ribbon = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Ribbon)
);
export const Spinner = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Spinner)
);
export const Steps = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Steps)
);
export const Table = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Table)
);
export const Timeline = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Timeline)
);

// Util
const Hr = loadable(() => import("tabler-react-2").then((mod) => mod.Util.Hr));
export const Util = { Hr };

// Typography
// export const Typography = loadable(() =>
//   import("tabler-react-2").then((mod) => mod.Typography)
// );
const H1 = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.H1)
);
const H2 = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.H2)
);
const H3 = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.H3)
);
const H4 = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.H4)
);
const H5 = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.H5)
);
const H6 = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.H6)
);
const Text = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.Text)
);
const Strong = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.Strong)
);
const B = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.B)
);
const I = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.I)
);
const U = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography.U)
);
const Special = {
  Abbr: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Abbr)
  ),
  Cite: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Cite)
  ),
  Del: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Del)
  ),
  Em: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Em)
  ),
  Ins: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Ins)
  ),
  S: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.S)
  ),
  Samp: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Samp)
  ),
  Var: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Var)
  ),
  Time: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Time)
  ),
  Sub: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Sub)
  ),
  Sup: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Sup)
  ),
  Kbd: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Kbd)
  ),
  Mark: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Mark)
  ),
  Code: loadable(() =>
    import("tabler-react-2").then((mod) => mod.Typography.Special.Code)
  ),
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Strong,
  B,
  I,
  U,
  Special,
};
