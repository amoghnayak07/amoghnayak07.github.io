import { Box, Button, Typography } from "@mui/material";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

const About = (props: any) => {
  const { isMob, isMd } = props;

  return (
    <Box
      display="flex"
      gap="3rem"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={isMob ? "0.5rem" : "2rem"}
        width="100%"
      >
        <Typography
          variant={
            isMob
              ? "heading_04_medium"
              : isMd
              ? "heading_03_medium"
              : "heading_02_medium"
          }
          color="primary"
        >
          I'm a creative product-thinker with a love for storytelling, driven by
          curiosity and a deep desire to solve real problems. My journey into
          tech began when I taught myself to build an app to address a personal
          need—and I haven’t looked back since.
        </Typography>
        <Typography
          variant={
            isMob
              ? "heading_04_medium"
              : isMd
              ? "heading_03_medium"
              : "heading_02_medium"
          }
          color="primary"
        >
          Having grown up across different places, I like to think that mosaic
          of experiences has shaped how I think, build, and connect. Whether
          it’s founding BuRP or creating QollaR, I believe in shipping fast,
          learning on the go, and making a tangible impact.
        </Typography>
        <Typography
          variant={
            isMob
              ? "heading_04_medium"
              : isMd
              ? "heading_03_medium"
              : "heading_02_medium"
          }
          color="primary"
        >
          I’m especially interested in distributed systems, cloud-native
          architecture, and building scalable products end-to-end. Outside of
          work, you’ll find me skateboarding, catching live music, or on the
          hunt for the perfect cup of coffee.
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
          href="/assets/images/Contact/AmoghGopalakrishnaNayakResume.pdf"
          download="AmoghGopalakrishnaNayakResume.pdf"
        >
          Resume
        </Button>
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default About;
