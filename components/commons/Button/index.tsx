import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import cn from "classnames";

export interface Props extends ButtonProps {
  isLoading?: boolean;
  className?: string;
}

createTheme();
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "50px !important",
    boxShadow: "none !important",
    height: "58px !important",
    textTransform: "inherit",
    fontSize: 16,
  },
}));

const ButtonCustom = (props: Props) => {
  const { isLoading, className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button className={cn(classes.root, className)} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
