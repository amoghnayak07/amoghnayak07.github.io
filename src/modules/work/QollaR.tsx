import { Box, Button, Divider, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { useStyles } from "./styles";

const QollaR = (props: any) => {
  const classes = useStyles();

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
        <Box>
          <Typography variant="heading_02_medium" color="primary.dark">
            Founder, Software Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            Nov 2023 - present
          </Typography>
        </Box>

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
          QollaR is a QR-based pet care platform I founded to support the
          welfare of street animals through community-driven tracking and
          adoption. I developed the full-stack solution using the MERN Stack,
          with Dockerized CI/CD deployments on AWS EC2 and ECR. Within the first
          month, 150 dogs were “QollaR’ed,” enabling real-time health tracking
          and increasing adoption visibility. The platform empowered local
          communities to collaborate more effectively and brought tangible
          impact to grassroots animal care.
        </Typography>

        <Link
          to="https://app.qollar.in"
          target="_blank"
          type="button"
          style={{ display: "contents" }}
        >
          <Button className={classes.viewWork} variant="contained">
            View
            <LaunchOutlinedIcon sx={{ color: "primary.light" }} />
          </Button>
        </Link>

        {/* <Box mt="1.5rem">
          <Carousel images={QollaRImages} />
        </Box> */}
      </Box>
    </Fade>
  );
};

export default QollaR;
