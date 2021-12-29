import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import cn from "classnames";
import { Theme } from "@mui/material/styles";
import LoadingIcon from "../LoadingIcon";
export interface Props extends ButtonProps {
  loading?: boolean;
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
  btnLoading: {
    background: "red",
  },
}));

const ButtonCustom = (props: Props) => {
  const { loading, className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Button
          variant="contained"
          fullWidth
          className={cn(classes.root, className)}
          disabled
        >
          <LoadingIcon />
        </Button>
      ) : (
        <Button className={cn(classes.root, className)} {...rest}>
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonCustom;
