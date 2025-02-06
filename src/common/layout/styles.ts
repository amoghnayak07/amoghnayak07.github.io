import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      backgroundColor: "#181818",
      minHeight: "100vh", // Ensures parent height
      padding: "0 4rem 4rem",
      "&::-webkit-scrollbar": {
        width: "0.5rem",
        background: "#181818",
      },
    },
  })
);
