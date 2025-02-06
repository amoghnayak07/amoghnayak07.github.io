import { Box, Chip, Fade, List, ListItem, Typography } from "@mui/material";
import { LVHighlights, LVSkills } from "../../constants/PortfolioConstants";

const LV = () => {
  return (
    <Fade in={true}>
      <Box display="flex" flexDirection="column" height="100%" gap="1rem">
        <span>
          <Typography variant="heading_02_medium" color="primary">
            Software Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            June 2021 - Oct 2023
          </Typography>
          <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
            {LVSkills.map((skill: any) => (
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
          During my time at LetsVenture, I played a key role in developing trica
          capital, a modern platform designed to streamline investment
          workflows, ESOP management, and community engagement for startups and
          investors. Additionally, I contributed to Scalix, an Operating System
          for Founders.
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 4 }}>
          {LVHighlights.map((highlight: any) => (
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

export default LV;
