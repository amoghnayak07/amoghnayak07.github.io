import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: "0 !important",
      background: "transparent",
      "&:hover": {
        background: "transparent !important",
      },
    },
    buttonText: {
      transition: "width 0.4s ease-in-out",
      display: "flex !important",
      alignItems: "center",
      gap: "0.5rem",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        backgroundColor: theme.palette.primary.main,
        bottom: "-2px",
        left: "0",
        transition: "width 0.4s ease-in-out",
      },
      "&:hover::after": {
        width: "100%",
      },
    },
  })
);
