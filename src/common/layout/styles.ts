import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      backgroundColor: "#fefefe",
      minHeight: "100vh", // Ensures parent height
      padding: "0 4rem 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "&::-webkit-scrollbar": {
        width: "0.5rem",
        background: "#181818",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "1rem 4rem 2rem",
      },
      "&::before": {
        content: '""',
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0, 0, 0, 0.04) 2px 3px)",
      },
      "&::after": {
        content: '""',
        position: "fixed",
        inset: 0,
        zIndex: 9997,
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.04) 100%)",
      },
    },
  }),
);
