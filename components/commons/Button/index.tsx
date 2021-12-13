import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import cn from "classnames";
import { Theme } from "@mui/material/styles";

export interface Props extends ButtonProps {
  isLoading?: boolean;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "50px !important",
    boxShadow: "none !important",
    height: "58px !important",
    textTransform: "inherit",
    fontSize: theme.typography.button.fontSize,
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
