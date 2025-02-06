import { Box, Chip, Fade, List, ListItem, Typography } from "@mui/material";
import { PeRHighlights, PeRSkills } from "../../constants/PortfolioConstants";

const PeR = () => {
  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="1rem">
        <span>
          <Typography variant="heading_02_medium" color="primary">
            Founder, Full Stack Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            Oct 2020 - May 2021
          </Typography>
          <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
            {PeRSkills.map((skill: any) => (
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
          As the Founder & Full Stack Developer of Praan-e-Rakshak, a
          tech-driven NGO, I built a web application for tracking and rescuing
          stray animals. The system allowed users to report distress calls for
          animals, monitor their health and feeding status, and manage territory
          tracking for over 55 dogs.
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 4 }}>
          {PeRHighlights.map((highlight: any) => (
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

export default PeR;
