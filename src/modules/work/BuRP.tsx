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
              Founder, FullStack Engineer
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
        >
          Built a multi-tenant ERP SaaS end-to-end and solo, generating $60K+
          revenue from 20 paying customers in 3 months. Shipped POS, order
          management, invoicing, inventory, and billing as modular subsystems on
          a multi-org architecture with org-level data isolation and RBAC. Built
          a schema-driven dashboard engine letting clients define their own
          fields and charts, and offloaded bulk reporting to an async SQS
          pipeline.
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
