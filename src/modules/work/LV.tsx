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
          {isMob ? (
            <Typography
              variant="heading_03_medium"
              color="primary.dark"
              display={!isMob ? "none" : ""}
            >
              Software Development Engineer
            </Typography>
          ) : null}
          <Typography variant="sub_heading_medium" color="primary">
            June 2021 - July 2024
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
        >
          Built and owned four core fintech systems: ESOP management, investment
          flows, a pitch-deck platform, and a payments + e-sign integration
          layer (Razorpay, SignEasy, Zoho). Cut p95 API latency by 66% across
          100K+ daily requests via query optimization, indexing, CDN, and load
          balancing, and architected an AWS Lambda + SQS pipeline with
          CloudWatch observability. Mentored two junior engineers to SWE I
          promotions in six months.
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
