import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    button: {
      padding: "0 !important",
      background: "transparent",
      transition: "transform 0.1s ease-out",
      "&:hover": {
        transform: "scale(0.92)",
        background: "transparent !important",
      },
    },
    buttonText: {
      display: "flex !important",
      alignItems: "center",
      gap: "0.5rem",
      transition: "transform 0.1s ease-out",
      transformOrigin: "left center",
    },
  }),
);
