import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    highlightName: {
      color: theme.palette.primary.contrastText,
    },
    section: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-5rem",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-3rem",
      },
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
    introSection: {
      scrollBehavior: "smooth",

      scrollSnapAlign: "start",
      transition: "opacity 0.4s ease-in-out",
      paddingTop: "5rem",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 0,
      },
    },
    workTitle: {
      position: "relative",
      cursor: "pointer",
      display: "flex !important",
      gap: "1rem",
      alignItems: "center",
      "&:hover": {
        transform: "scale(0.92)",
      },
    },
    selectedWorkTitle: {
      position: "relative",
      cursor: "pointer",
      display: "flex !important",
      gap: "1rem",
      alignItems: "center",
      transform: "scale(0.92)",
    },
    coffee: {
      animation: `$bounce 5s infinite ease-in-out`,
      height: "9rem",
      position: "relative",
      right: "-10%",
    },
    "@keyframes bounce": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(15px)",
      },
    },
    laptop: {
      animation: `$bounceLaptop 4s infinite ease-in-out`,
      height: "14rem",
    },
    "@keyframes bounceLaptop": {
      "50%": {
        transform: "translateY(0)",
      },
      "0%, 100%": {
        transform: "translateY(15px)",
      },
    },
    expandedAccordion: {
      marginTop: "0 !important",
      background: "#ededed !important",
    },
    contactIcon: {
      fontSize: "2.5rem !important",
      "&:hover": {
        color: theme.palette.primary.contrastText,
        transform: "scale(0.8)",
      },
    },
  }),
);
