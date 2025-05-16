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
    },
    appbar: {
      boxShadow: "none !important",
      backgroundColor: "transparent !important",
      padding: "0 2rem",
      backdropFilter: "blur(2px)",
    },
  })
);
