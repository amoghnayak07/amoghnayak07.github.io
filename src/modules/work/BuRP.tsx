import { Box, Chip, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "../../common/carousel/Carousel";
import { BuRPImages, BuRPSkills } from "../../constants/PortfolioConstants";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

const BuRP = () => {
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

          <Link to="https://app.burpp.in" target="_blank">
            <LaunchOutlinedIcon
              sx={{ color: "primary.contrastText", mt: "0.5rem" }}
            />
          </Link>

          <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
            {BuRPSkills.map((skill: any) => (
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
          I co-founded and developed BuRP, a powerful ERP platform designed to
          help businesses streamline operations. With a React.js front-end and a
          Node.js back-end, I built a system that improves operational
          efficiency.
        </Typography>

        <Box mt="1.5rem">
          <Carousel images={BuRPImages} />
        </Box>
      </Box>
    </Fade>
  );
};

export default BuRP;
