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
    fontSize: theme.typography.button.fontSize,
    paddingLeft: "30px !important",
    paddingRight: "30px !important",
    transition: "all 150ms ease",
  },
  textBtn: {
    textTransform: "initial",
  },
  btnLoading: {
    background: "red",
  },
}));

const ButtonCustom = (props: Props) => {
  const { fullWidth, loading, className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Button
          variant="contained"
          fullWidth={fullWidth}
          className={cn(classes.root, className)}
          disabled
        >
          <LoadingIcon />
        </Button>
      ) : (
        <Button
          fullWidth={fullWidth}
          className={cn(classes.root, className)}
          {...rest}
        >
          <span className={classes.textBtn}>{children}</span>
        </Button>
      )}
    </>
  );
};

export default ButtonCustom;
