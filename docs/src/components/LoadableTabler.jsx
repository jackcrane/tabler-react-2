import loadable from "@loadable/component";

export const Card = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Card)
);
export const Typography = loadable(() =>
  import("tabler-react-2").then((mod) => mod.Typography)
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
const Hr = loadable(() => import("tabler-react-2").then((mod) => mod.Util.Hr));
export const Util = { Hr };
