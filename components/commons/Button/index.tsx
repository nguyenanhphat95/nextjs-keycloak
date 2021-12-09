import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export interface Props extends ButtonProps {
  isLoading?: boolean;
}

createTheme();
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "50px !important",
    boxShadow: "none !important",
    height: "58px !important",
  },
}));

const ButtonCustom = (props: Props) => {
  const { isLoading, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button className={classes.root} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
