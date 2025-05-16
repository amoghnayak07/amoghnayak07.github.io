import { Box, IconButton, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useStyles } from "./styles";

const Contact = (props: any) => {
  const { isMob } = props;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Typography
        variant={isMob ? "heading_02_medium" : "heading_01_medium"}
        color="primary"
        fontSize={"2rem"}
      >
        Let’s Connect!
      </Typography>
      <Typography
        variant={isMob ? "heading_03_medium" : "heading_02_medium"}
        color="primary"
        maxWidth="600px"
      >
        Whether you’re looking to collaborate, discuss an opportunity, or just
        chat, feel free to reach out!
      </Typography>

      <Box display="flex" gap="1.5rem">
        <IconButton
          href="mailto:nayak.amo@northeastern.edu"
          size="large"
          disableRipple
        >
          <EmailOutlinedIcon className={classes.contactIcon} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/amogh-nayak"
          target="_blank"
          size="large"
          disableRipple
        >
          <LinkedInIcon className={classes.contactIcon} />
        </IconButton>
        <IconButton
          href="https://github.com/amoghnayak07"
          target="_blank"
          size="large"
          disableRipple
        >
          <GitHubIcon className={classes.contactIcon} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
