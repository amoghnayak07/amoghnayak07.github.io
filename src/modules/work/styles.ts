import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    viewWork: {
      textDecoration: "none",
      color: `${theme.palette.primary.light} !important`,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      width: "5rem",
      background: `linear-gradient(80deg, ${theme.palette.primary.contrastText}, ${theme.palette.secondary.contrastText})`,
      marginTop: "1rem !important",
      boxShadow: "none",
    },
  }),
);
