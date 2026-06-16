import { createStyles, makeStyles } from "@mui/styles";

// Classic Win95 system palette
const FACE = "#c0c0c0"; // window face gray
const HILIGHT = "#ffffff"; // top-left highlight
const SHADOW = "#808080"; // bottom-right shadow
const DKSHADOW = "#000000"; // outer dark edge
const TITLE_B = "#61bffc"; // title bar gradient start (navy)
const TITLE_A = "#1084d0"; // title bar gradient end (blue)

export const useWin95Styles = makeStyles(() =>
  createStyles({
    // Fills the Rnd box. The beveled outer frame.
    window: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: FACE,
      // Double bevel: outer (dark/highlight) + inner (shadow/face)
      borderTop: `2px solid ${HILIGHT}`,
      borderLeft: `2px solid ${HILIGHT}`,
      borderRight: `2px solid ${DKSHADOW}`,
      borderBottom: `2px solid ${DKSHADOW}`,
      boxShadow: `inset -1px -1px 0 ${SHADOW}, inset 1px 1px 0 ${FACE}`,
      boxSizing: "border-box",
      overflow: "hidden",
    },

    titleBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "1.6rem",
      padding: "0 0.25rem 0 0.4rem",
      margin: "2px",
      background: `linear-gradient(90deg, ${TITLE_A}, ${TITLE_B})`,
      cursor: "move",
      userSelect: "none",
      flexShrink: 0,
    },

    titleText: {
      //   fontFamily: "VT323",
      fontSize: "1.05rem",
      lineHeight: 1,
      color: "#ffffff",
      letterSpacing: "0.5px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    // Beveled square close button with the raised look.
    closeButton: {
      width: "1.15rem",
      height: "1.15rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      //   fontFamily: "VT323",
      fontSize: "1rem",
      lineHeight: 1,
      color: "#000000",
      backgroundColor: FACE,
      cursor: "pointer",
      borderTop: `1px solid ${HILIGHT}`,
      borderLeft: `1px solid ${HILIGHT}`,
      borderRight: `1px solid ${DKSHADOW}`,
      borderBottom: `1px solid ${DKSHADOW}`,
      "&:active": {
        borderTop: `1px solid ${DKSHADOW}`,
        borderLeft: `1px solid ${DKSHADOW}`,
        borderRight: `1px solid ${HILIGHT}`,
        borderBottom: `1px solid ${HILIGHT}`,
      },
    },

    // Sunken content well; scrolls for long descriptions.
    body: {
      flex: 1,
      margin: "0 2px 2px",
      padding: "0.75rem",
      backgroundColor: FACE,
      overflow: "auto",
      // Inset "sunken" edge
      borderTop: `1px solid ${SHADOW}`,
      borderLeft: `1px solid ${SHADOW}`,
      borderRight: `1px solid ${HILIGHT}`,
      borderBottom: `1px solid ${HILIGHT}`,
    },
  }),
);
