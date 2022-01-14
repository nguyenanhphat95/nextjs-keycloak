import createCache from "@emotion/cache";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import pjThemes from ".";

export function getTheme(): ThemeOptions {
  return pjThemes;
}

export function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}

export function getThemeWithMui() {
  return createTheme(getTheme());
}
