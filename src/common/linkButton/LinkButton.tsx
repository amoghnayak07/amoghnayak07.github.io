import { Button, Typography } from "@mui/material";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import { useStyles } from "./styles";

const LinkButton = (props: any) => {
  const { onClick, text } = props;
  const classes = useStyles();

  return (
    <Button
      variant="text"
      onClick={onClick}
      disableFocusRipple
      disableRipple
      disableTouchRipple
      className={classes.button}
      sx={{ textTransform: "lowercase !important" }}
    >
      <Typography className={classes.buttonText} variant="heading_03_medium">
        <ForwardOutlinedIcon fontSize="small" /> {text}
      </Typography>
    </Button>
  );
};

export default LinkButton;
