import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    borderRadius: 40,
    "&  > div": {
      borderRadius: "inherit",
      height: 58,
    },
    "& input": {
      marginLeft: 10,
    },
  },
}));

export type BaseInputProps = TextFieldProps & {};

const InputCustom = (props: BaseInputProps) => {
  const classes = useStyles();

  return <TextField {...props} className={classes.root} />;
};

export default InputCustom;
