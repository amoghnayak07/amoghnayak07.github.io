import { Box } from "@mui/material";
import { Component } from "react";

export default class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(error: any) {
    this.setState({ hasError: true, error });
  }

  render() {
    return this.state.hasError ? (
      <Box width="100%" p={2} my={2} style={{ border: "3px solid red" }}>
        Error: {this.state.error}
      </Box>
    ) : (
      this.props.children
    );
  }
}
