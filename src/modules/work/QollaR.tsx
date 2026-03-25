import { Box, Divider, Fade, Typography } from "@mui/material";

const QollaR = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        gap="0.5rem"
        p={"0 1rem 0.5rem"}
      >
        {/* <Box>
          <Typography variant="heading_02_medium" color="primary.dark">
            Founder, Software Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            Nov 2023 - present
          </Typography>
        </Box> */}
        {isMob ? (
          <Typography variant="heading_04_medium" color="primary.dark">
            MongoDB · Node.js · React.js · AWS · Docker
          </Typography>
        ) : null}
        <Divider />

        {/* <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
          {QollaRSkills.map((skill: any) => (
            <Chip label={skill} variant="filled" sx={{ fontWeight: 500 }} />
          ))}
        </Box> */}

        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          Built and launched a full-stack pet-care platform on the MERN stack,
          onboarding 150+ street dog records within the first month. Shipped
          with Dockerized CI/CD on AWS EC2, ECR, and Nginx from day one.
        </Typography>

        {/* <Box mt="1.5rem">
          <Carousel images={QollaRImages} />
        </Box> */}
      </Box>
    </Fade>
  );
};

export default QollaR;
