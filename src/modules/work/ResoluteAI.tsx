import { Box, Chip, Fade, List, ListItem, Typography } from "@mui/material";
import {
  ResoluteHighlights,
  ResoluteSkills,
} from "../../constants/PortfolioConstants";

const ResoluteAI = () => {
  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="1rem">
        <span>
          <Typography variant="heading_02_medium" color="primary">
            Full Stack Developer Intern
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            July 2020 - Oct 2020
          </Typography>
          <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
            {ResoluteSkills.map((skill: any) => (
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
          As a Full Stack Development Intern, I contributed to ResoluteAI's
          healthcare SaaS platform focused on patient management and analytics.
          My work primarily involved frontend optimization, cloud-based
          architecture, and UI/UX enhancements.
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 4 }}>
          {ResoluteHighlights.map((highlight: any) => (
            <ListItem sx={{ display: "list-item", color: "#b4b4b4" }}>
              <Typography variant="heading_03_medium" color="primary">
                {highlight}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fade>
  );
};

export default ResoluteAI;
