import { Box } from "@mui/material";
import { useStyles } from "./styles";

const MainLayout = (props: any) => {
  const { children } = props;
  const classes = useStyles();

  return <Box className={classes.layout}>{children}</Box>;
};

export default MainLayout;
