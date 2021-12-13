import { ColorScheme } from "./type";

declare module "@mui/material/styles" {
  export interface SimplePaletteColorOptions {
    border?: string;
    background?: string;
    lightBackground?: string;
  }
  interface PaletteOptions {
    // color table
    blue: Partial<ColorScheme>;
  }
}
