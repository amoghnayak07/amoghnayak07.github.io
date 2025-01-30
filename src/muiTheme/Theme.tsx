import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import MuiCssBaseline from "@mui/material/CssBaseline";
import { theme } from "./CreateTheme";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display_01_medium: React.CSSProperties;
    display_01_bold: React.CSSProperties;
    display_01_extra_bold: React.CSSProperties;
    display_02_medium: React.CSSProperties;
    display_02_bold: React.CSSProperties;
    display_02_extra_bold: React.CSSProperties;
    display_02_extra_bold_900: React.CSSProperties;
    display_03_extra_bold_900: React.CSSProperties;
    heading_01_medium: React.CSSProperties;
    heading_01_bold: React.CSSProperties;
    heading_01_extra_bold: React.CSSProperties;
    heading_01_small: React.CSSProperties;
    heading_01_small_medium: React.CSSProperties;
    heading_01_small_bold: React.CSSProperties;
    heading_01_small_extra_bold: React.CSSProperties;
    heading_01_small_extra_bold_900: React.CSSProperties;
    heading_02_medium: React.CSSProperties;
    heading_02_bold: React.CSSProperties;
    heading_02_extra_bold: React.CSSProperties;
    heading_03_medium: React.CSSProperties;
    heading_03_bold: React.CSSProperties;
    heading_03_extra_bold: React.CSSProperties;
    heading_03_extra_bold_900: React.CSSProperties;
    heading_04_medium: React.CSSProperties;
    heading_04_bold: React.CSSProperties;
    heading_04_extra_bold: React.CSSProperties;
    heading_05_light: React.CSSProperties;
    heading_05_medium: React.CSSProperties;
    heading_05_bold: React.CSSProperties;
    heading_05_extra_bold: React.CSSProperties;
    heading_06_medium: React.CSSProperties;
    heading_06_bold: React.CSSProperties;
    heading_06_extra_bold: React.CSSProperties;
    heading_07_bold: React.CSSProperties;
    sub_heading_extra_small: React.CSSProperties;
    sub_heading_small: React.CSSProperties;
    sub_heading_small_2: React.CSSProperties;
    sub_heading_medium: React.CSSProperties;
    sub_heading_bold: React.CSSProperties;
    sub_heading_2_extra_bold_900: React.CSSProperties;
    paragraph_01_medium: React.CSSProperties;
    paragraph_01_bold: React.CSSProperties;
    paragraph_02_medium: React.CSSProperties;
    paragraph_02_medium_font2: React.CSSProperties;
    paragraph_02_medium_font1: React.CSSProperties;
    paragraph_02_bold: React.CSSProperties;
    paragraph_03_medium: React.CSSProperties;
    paragraph_03_bold: React.CSSProperties;
    paragraph_04_medium: React.CSSProperties;
    button_01_medium: React.CSSProperties;
    caption_regular: React.CSSProperties;
    caption_medium: React.CSSProperties;
    caption_uppercase: React.CSSProperties;
  }

  // allow configuration using `createTheme`

  interface TypographyVariantsOptions {
    display_01_medium: React.CSSProperties;
    display_01_bold: React.CSSProperties;
    display_01_extra_bold: React.CSSProperties;
    display_02_medium: React.CSSProperties;
    display_02_bold: React.CSSProperties;
    display_02_extra_bold: React.CSSProperties;
    display_02_extra_bold_900: React.CSSProperties;
    display_03_extra_bold_900: React.CSSProperties;
    heading_01_medium: React.CSSProperties;
    heading_01_bold: React.CSSProperties;
    heading_01_extra_bold: React.CSSProperties;
    heading_01_small: React.CSSProperties;
    heading_01_small_medium: React.CSSProperties;
    heading_01_small_bold: React.CSSProperties;
    heading_01_small_extra_bold: React.CSSProperties;
    heading_01_small_extra_bold_900: React.CSSProperties;
    heading_02_medium: React.CSSProperties;
    heading_02_bold: React.CSSProperties;
    heading_02_extra_bold: React.CSSProperties;
    heading_03_medium: React.CSSProperties;
    heading_03_bold: React.CSSProperties;
    heading_03_extra_bold: React.CSSProperties;
    heading_03_extra_bold_900: React.CSSProperties;
    heading_04_medium: React.CSSProperties;
    heading_04_bold: React.CSSProperties;
    heading_04_extra_bold: React.CSSProperties;
    heading_05_light: React.CSSProperties;
    heading_05_medium: React.CSSProperties;
    heading_05_bold: React.CSSProperties;
    heading_05_extra_bold: React.CSSProperties;
    heading_06_medium: React.CSSProperties;
    heading_06_bold: React.CSSProperties;
    heading_06_extra_bold: React.CSSProperties;
    heading_07_bold: React.CSSProperties;
    sub_heading_extra_small: React.CSSProperties;
    sub_heading_small: React.CSSProperties;
    sub_heading_small_2: React.CSSProperties;
    sub_heading_medium: React.CSSProperties;
    sub_heading_bold: React.CSSProperties;
    sub_heading_2_extra_bold_900: React.CSSProperties;
    paragraph_01_medium: React.CSSProperties;
    paragraph_01_bold: React.CSSProperties;
    paragraph_02_medium: React.CSSProperties;
    paragraph_02_medium_font2: React.CSSProperties;
    paragraph_02_medium_font1: React.CSSProperties;
    paragraph_02_bold: React.CSSProperties;
    paragraph_03_medium: React.CSSProperties;
    paragraph_03_bold: React.CSSProperties;
    paragraph_04_medium: React.CSSProperties;
    button_01_medium: React.CSSProperties;
    caption_regular: React.CSSProperties;
    caption_medium: React.CSSProperties;
    caption_uppercase: React.CSSProperties;
  }
}

// Update the Typography's variant prop options

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display_01_medium: true;
    display_01_bold: true;
    display_01_extra_bold: true;
    display_02_medium: true;
    display_02_bold: true;
    display_02_extra_bold: true;
    display_02_extra_bold_900: true;
    display_03_extra_bold_900: true;
    heading_01_medium: true;
    heading_01_bold: true;
    heading_01_extra_bold: true;
    heading_01_small: true;
    heading_01_small_medium: true;
    heading_01_small_bold: true;
    heading_01_small_extra_bold: true;
    heading_01_small_extra_bold_900: true;
    heading_02_medium: true;
    heading_02_bold: true;
    heading_02_extra_bold: true;
    heading_03_medium: true;
    heading_03_bold: true;
    heading_03_extra_bold: true;
    heading_03_extra_bold_900: true;
    heading_04_medium: true;
    heading_04_bold: true;
    heading_04_extra_bold: true;
    heading_05_light: true;
    heading_05_medium: true;
    heading_05_bold: true;
    heading_05_extra_bold: true;
    heading_06_medium: true;
    heading_06_bold: true;
    heading_06_extra_bold: true;
    heading_07_bold: true;
    sub_heading_extra_small: true;
    sub_heading_small: true;
    sub_heading_small_2: true;
    sub_heading_medium: true;
    sub_heading_bold: true;
    sub_heading_2_extra_bold_900: true;
    paragraph_01_medium: true;
    paragraph_01_bold: true;
    paragraph_02_medium: true;
    paragraph_02_medium_font2: true;
    paragraph_02_medium_font1: true;
    paragraph_02_bold: true;
    paragraph_03_medium: true;
    paragraph_03_bold: true;
    paragraph_04_medium: true;
    button_01_medium: true;
    caption_regular: true;
    caption_medium: true;
    caption_uppercase: true;
  }
}

export type ThemeProviderProps = {
  /**
   * a node of mui to be rendered in the special component.
   */
  children?: ReactNode;
};

export const AGNThemeProvider = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <MuiCssBaseline />
    <style />
    {children}
  </ThemeProvider>
);
