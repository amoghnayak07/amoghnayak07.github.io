import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const FACE = "#9e9e9e";
const HILIGHT = "#ffffff";
const SHADOW = "#808080";
const DKSHADOW = "#000000";

const raised = {
  borderTop: `2px solid ${HILIGHT}`,
  borderLeft: `2px solid ${HILIGHT}`,
  borderRight: `2px solid ${DKSHADOW}`,
  borderBottom: `2px solid ${DKSHADOW}`,
  boxShadow: `inset -1px -1px 0 ${SHADOW}, inset 1px 1px 0 ${FACE}`,
};

export const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    taskbar: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "3rem",
      zIndex: 10001, // above windows + scanlines
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 4px",
      backgroundColor: FACE,
      borderTop: `2px solid ${HILIGHT}`,
    },
    startButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      height: "1.9rem",
      padding: "0 0.6rem",
      cursor: "pointer",
      backgroundColor: FACE,
      ...raised,
      "&:active": {
        borderTop: `2px solid ${DKSHADOW}`,
        borderLeft: `2px solid ${DKSHADOW}`,
        borderRight: `2px solid ${HILIGHT}`,
        borderBottom: `2px solid ${HILIGHT}`,
      },
    },
    startActive: {
      borderTop: `2px solid ${DKSHADOW}`,
      borderLeft: `2px solid ${DKSHADOW}`,
      borderRight: `2px solid ${HILIGHT}`,
      borderBottom: `2px solid ${HILIGHT}`,
    },
    startLogo: {
      fontSize: "1.1rem",
      lineHeight: 1,
      color: "#818CF8",
    },
    startText: {
      fontFamily: "VT323 !important",
      fontSize: "1.5rem !important",
      fontWeight: 700,
      lineHeight: 1,
      color: "#000000",
    },
    startMenu: {
      position: "absolute",
      bottom: "2.6rem",
      left: "4px",
      width: "12rem",
      display: "flex",
      backgroundColor: FACE,
      ...raised,
    },
    startMenuSpine: {
      width: "1.6rem",
      background: "linear-gradient(180deg, #1084d0, #61bffc)",
    },
    startMenuItems: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "3px",
    },
    startMenuItem: {
      fontFamily: "VT323 !important",
      fontSize: "1.15rem !important",
      lineHeight: 1.1,
      color: "#000000",
      padding: "0.35rem 0.6rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#1084d0",
        color: "#ffffff",
      },
    },
    startMenuItemActive: {
      backgroundColor: "rgba(0,0,128,0.12)",
    },
    clock: {
      height: "1.9rem",
      display: "flex",
      alignItems: "center",
      padding: "0 0.7rem",
      backgroundColor: FACE,
      borderTop: `1px solid ${SHADOW}`,
      borderLeft: `1px solid ${SHADOW}`,
      borderRight: `1px solid ${HILIGHT}`,
      borderBottom: `1px solid ${HILIGHT}`,
    },
    clockText: {
      fontFamily: "VT323 !important",
      fontSize: "1.1rem !important",
      lineHeight: 1,
      color: "#000000",
    },
  }),
);
