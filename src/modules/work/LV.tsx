import { Link } from "react-router-dom";
import { Box, Button, Divider, Fade, Typography } from "@mui/material";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { useStyles } from "./styles";

const LV = (props: any) => {
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
            Software Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            June 2021 - Oct 2023
          </Typography>
          {/* <Box display="flex" gap="1rem" mt="1rem" flexWrap={"wrap"}>
            {LVSkills.map((skill: any) => (
              <Chip label={skill} variant="filled" sx={{ fontWeight: 500 }} />
            ))}
          </Box> */}
        </Box>

        <Divider />

        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          At LetsVenture, I was a core contributor to trica capital and Scalix,
          platforms empowering startups and investors through streamlined ESOP
          management, investment workflows, and founder tools. I led agile
          sprints, translated business needs into technical execution, and
          optimized API response-times by 40%. I also ensured timely delivery of
          high-impact features through tight cross-functional coordination.
        </Typography>

        <Link
          to="https://www.trica.co/"
          target="_blank"
          type="button"
          style={{ display: "contents" }}
        >
          <Button className={classes.viewWork} variant="contained">
            View
            <LaunchOutlinedIcon
              sx={{ color: "primary.light" }}
              fontSize="small"
            />
          </Button>
        </Link>

        {/* <List sx={{ listStyleType: "disc", pl: 4 }}>
          {LVHighlights.map((highlight: any) => (
            <ListItem sx={{ display: "list-item", color: "#b4b4b4" }}>
              <Typography variant="heading_03_medium" color="primary">
                {highlight}
              </Typography>
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Fade>
  );
};

export default LV;
