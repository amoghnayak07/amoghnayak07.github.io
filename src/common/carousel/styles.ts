import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      borderRadius: "1.25rem",
      width: "28.5rem",
      [theme.breakpoints.down("lg")]: {
        width: "24.5rem",
      },
      [theme.breakpoints.down("md")]: {
        width: "17rem",
      },
    },
  })
);
