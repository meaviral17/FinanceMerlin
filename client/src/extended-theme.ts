/* eslint-disable */

// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; // eslint-disable-line

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

/* eslint-enable */
