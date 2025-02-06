import { Box, Button, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="4rem"
    >
      <Typography variant="heading_01_medium" color="primary">
        Let’s Connect!
      </Typography>
      <Typography variant="heading_02_medium" color="primary" maxWidth="600px">
        Whether you’re looking to collaborate, discuss an opportunity, or just
        chat about tech, feel free to reach out!
      </Typography>

      <Box display="flex" gap="1.5rem">
        <Button
          variant="outlined"
          startIcon={<EmailOutlinedIcon />}
          href="mailto:nayak.amo@northeastern.edu"
          sx={{
            textTransform: "capitalize",
            height: "2.5rem",
            borderRadius: "8px",
          }}
        >
          Email
        </Button>
        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/amogh-nayak"
          target="_blank"
          sx={{
            textTransform: "capitalize",
            height: "2.5rem",
            borderRadius: "8px",
          }}
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/amoghnayak07"
          target="_blank"
          sx={{
            textTransform: "capitalize",
            height: "2.5rem",
            borderRadius: "8px",
          }}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
