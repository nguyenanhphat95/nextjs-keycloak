import React, { useState } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { getThemeWithMui } from "styles/utils";

interface Props {
  children: React.ReactNode;
}
const ourTheme = getThemeWithMui();

const ThemeProvider = ({ children }: Props) => {
  const [theme] = useState(ourTheme);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
