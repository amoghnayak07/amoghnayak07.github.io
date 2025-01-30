export const colors: any = {
  primary: {
    _0: "#000000",
    _50: "#3884f7",
    _100: "#0099FF",
    _150: "#323232",
    _200: "#CED3E5",
    _250: "#ADADAD",
    _300: "#fffbf2",
    _350: "#f5f5f5",
    _400: "#734ac7",
    _500: "#83d381",
    _600: "#ffffff",
  },
  neutral: {
    _50: "#eaebed",
    _100: "#d4d7da",
    _150: "#dfcfff",
    _200: "#bfc3c8",
    _300: "#a9afb5",
    _400: "#949ca3",
    _500: "#7f8891",
    _600: "#69747E",
    _700: "#54606c",
    _800: "#3e4c59",
    _900: "#293847",
    _1000: "#adadad",
  },
  secondary: { _0: "#A4A7B5", _100: "#F6BD2A", _200: "#734AC7" },
  tertiary: {},
  success: {
    _50: "#ECFDF5",
    _300: "#6EE7B7",
    _500: "#10B981",
    _700: "#047857",
    _900: "#064E3B",
  },
  warning: {
    _50: "#FFFBEB",
    _300: "#FCD34D",
    _500: "#F59E0B",
    _700: "#B45309",
    _900: "#78350F",
  },
  error: {
    _50: "#FFE9EA",
    _300: "#FEB7BB",
    _500: "#EF4444",
    _700: "#B91C1C",
    _800: "#d65353",
    _900: "#FDE9DD",
    _1100: "#d32f2f",
    _1200: "#FFE2E2",
  },
  shades: {
    _0: "#FFFFFF",
    _50: "#00000080",
    _100: "#000000",
  },
  background: {
    _0: "#0A1436",
    _50: "#ECF3FF",
    _100: "#F7BD2A",
    _150: "#A8CBFF",
    _200: "#FFEFC6",
    _300: "#83D381",
    _400: "#E0FFDF",
    _500: "#70A9FF",
    _600: "#DDEAFF",
    _700: "#E1D4FF",
    _800: "#976AFF",
    _900: "#E1D5FF",
    _1000: "#D7E6FD",
    _1100: "#F9F9F9",
  },
  border: {
    _0: "#A3A0DC",
    _100: "#00A3FF",
    _200: "#4D5B98",
    _300: "#EEEEEE",
  },
  button: {
    _0: "#6319E1",
    _100: "#028EFF",
    _200: "#1BB959",
    _300: "#1DC164",
    _400: "#6E1AE5",
    _500: "#0A102A",
    _600: "#3141c4",
    _700: "#FFFFFF",
  },
  extra: {
    _0: "#ffffff70",
    _50: "#D65353",
    _100: "#6C89D2",
  },
};

export type colorType =
  | "primary"
  | "neutral"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error"
  | "background"
  | "border"
  | "button"
  | "shades"
  | "extra";

export function getColor(type: colorType, code: number) {
  const variant = `_${code}`;
  if (colors[type]) {
    return colors[type][variant] ? colors[type][variant] : colors.primary._50;
  }
  throw new Error("color not defined");
}
