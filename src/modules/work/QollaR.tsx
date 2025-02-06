import { Box, Chip, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { QollaRImages, QollaRSkills } from "../../constants/PortfolioConstants";
import Carousel from "../../common/carousel/Carousel";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

const QollaR = () => {
  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="1rem">
        <span>
          <Typography variant="heading_02_medium" color="primary">
            Co-Founder, Software Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            Nov 2023 - Aug 2024
          </Typography>

          <Link to="https://app.qollar.in" target="_blank">
            <LaunchOutlinedIcon
              sx={{ mt: "0.5rem", color: "primary.contrastText" }}
            />
          </Link>

          <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
            {QollaRSkills.map((skill: any) => (
              <Chip
                label={skill}
                color="primary"
                variant="filled"
                sx={{ color: "#181818", fontWeight: 500 }}
              />
            ))}
          </Box>
        </span>

        <Typography variant="heading_03_medium" color="primary" mt="1rem">
          As a co-founder and software developer, I built QollaR, a smart pet
          collar that leverages QR technology to ensure pet safety and
          identification. Designed for pet owners and shelters, QollaR provides
          a seamless way to access pet profiles, medical records, and emergency
          contacts—all with a simple scan.
        </Typography>

        <Box mt="1.5rem">
          <Carousel images={QollaRImages} />
        </Box>
      </Box>
    </Fade>
  );
};

export default QollaR;
