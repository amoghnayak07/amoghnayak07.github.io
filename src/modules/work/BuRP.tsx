import { Box, Button, Divider, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { useStyles } from "./styles";

const BuRP = (props: any) => {
  const classes = useStyles();

  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box
        display="flex"
        flexDirection={"column"}
        gap="0.5rem"
        height="100%"
        p={"0 1rem 0.5rem"}
      >
        <Box>
          {isMob ? (
            <Typography variant="heading_03_medium" color="primary.dark">
              Founder, Software Developer
            </Typography>
          ) : null}
          <Typography variant="sub_heading_medium" color="primary">
            Nov 2023 - Aug 2024
          </Typography>
        </Box>

        <Divider />

        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          Founded and built a multi-tenant ERP SaaS from 0 to 1. Drove $60K+
          revenue in 3 months through rapid iteration on customer feedback.
          Architected microservices on AWS with Node.js, MongoDB schema-driven
          React dashboards, and Dockerized CI/CD - cutting deployment time by
          60%.
        </Typography>
        <Link
          to="https://www.app.burpp.in"
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
      </Box>
    </Fade>
  );
};

export default BuRP;
