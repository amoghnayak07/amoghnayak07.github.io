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
          <Typography variant="heading_02_medium" color="primary.dark">
            Founder, Software Developer
          </Typography>
          <Typography variant="sub_heading_medium" color="primary">
            Nov 2023 - present
          </Typography>
        </Box>

        <Divider />

        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
          mt="1rem"
        >
          BuRP is a modern ERP SaaS platform I founded to help SMEs streamline
          operations. I led the full-stack development using MERN Stack, and
          implemented multi-organization tenancy with dynamic UI generators
          driven by DB schemas. The platform runs on a Dockerized CI/CD pipeline
          deployed via AWS EC2 and ECR, enabling fast, zero-downtime releases.
        </Typography>
        <Link
          to="https://app.burpp.in"
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
