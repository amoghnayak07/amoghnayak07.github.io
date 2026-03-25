import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navs: {
      cursor: "pointer",
      transition: "transform 0.4s ease, text-decoration 0.4s ease",
      "&:hover": {
        textDecoration: "underline",
        transform: "scale(0.9)",
        color: theme.palette.primary.main,
      },
    },
    noUnderline: {
      textDecoration: "none !important",
    },
    currPage: {
      color: `${theme.palette.primary.dark} !important`,
      transform: "scale(0.9)",
      textDecoration: "underline",
      cursor: "pointer",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid rgb(55 65 81)",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0 !important",
      },
    },
    appbar: {
      boxShadow: "none !important",
      backgroundColor: "transparent !important",
      padding: "0 2rem",
      backdropFilter: "blur(2px)",
    },
    drawer: {
      width: "60vw",
      backgroundColor: `${theme.palette.primary.contrastText} !important`,
      backdropFilter: "blur(8px)",
    },
    drawerHeader: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "0.75rem 1rem",
    },
    drawerLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "1rem 2rem",
    },
  }),
);
