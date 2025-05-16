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
      backgroundColor: `${theme.palette.primary.contrastText} !important`,
      marginTop: "1rem !important",
    },
  })
);
