import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    highlightName: {
      color: theme.palette.primary.contrastText,
    },
    section: {
      scrollBehavior: "smooth",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      scrollSnapAlign: "start",
      transition: "opacity 0.4s ease-in-out",
    },
    workSection: {
      scrollBehavior: "smooth",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      scrollSnapAlign: "start",
      transition: "opacity 0.4s ease-in-out",
    },
    workTitle: {
      position: "relative",
      left: "-2.5rem",
      cursor: "pointer",
      display: "flex !important",
      gap: "1rem",
      alignItems: "center",
      transition: "ease-in 0.15s",
      "& .viewWork": {
        visibility: "hidden",
      },
      "&:hover": {
        left: 0,
        "& .viewWork": {
          visibility: "visible",
        },
      },
    },
    selectedWorkTitle: {
      position: "relative",
      cursor: "pointer",
      display: "flex !important",
      gap: "1rem",
      alignItems: "center",
      transition: "ease-in 0.15s",
      "& .viewWork": {
        visibility: "hidden",
      },
      left: 0,
    },
  })
);
