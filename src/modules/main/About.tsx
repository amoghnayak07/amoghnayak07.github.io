import { Box, Button, Typography } from "@mui/material";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

const About = () => {
  return (
    <Box
      display="flex"
      gap="3rem"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} flexDirection={"column"} gap="2rem" width="50%">
        <Typography variant="heading_02_medium" color="primary">
          I’m a software engineer, product builder, and AI enthusiast with a
          passion for building scalable applications and solving real-world
          problems through technology.
        </Typography>
        <Typography variant="heading_02_medium" color="primary">
          From designing scalable software architectures to exploring AI-driven
          applications and creating immersive game experiences, I love working
          on projects that challenge me to think, learn, and create.
        </Typography>
        <Button
          variant="outlined"
          fullWidth={false}
          sx={{
            width: "8rem",
            textTransform: "capitalize",
            height: "2.5rem",
          }}
          startIcon={<GetAppOutlinedIcon fontSize="small" />}
          href="/assets/images/Contact/AmoghGNayakResume.pdf"
          download="Amogh_Gopalakrishna_Nayak_Resume.pdf"
        >
          Resume
        </Button>
      </Box>
      <Box
        width="50%"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img
          src={"/assets/images/Contact/Me.jpg"}
          alt="AGN"
          width="450px"
          style={{ borderRadius: "2.5rem" }}
        />
      </Box>
    </Box>
  );
};

export default About;
