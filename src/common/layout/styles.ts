import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      backgroundColor: "#fefefe",
      minHeight: "100vh", // Ensures parent height
      padding: "0 4rem 4rem",
      "&::-webkit-scrollbar": {
        width: "0.5rem",
        background: "#181818",
      },
    },
  })
);
