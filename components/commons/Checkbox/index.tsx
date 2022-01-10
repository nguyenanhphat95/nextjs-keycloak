import React, { useRef } from "react";
import { Checkbox, CheckboxProps, FormControlLabel, Grid } from "@mui/material";

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& svg": {
      color: theme.palette.secondary.dark,
      // background: "black",
    },
  },
}));
interface Props extends CheckboxProps {
  label?: string | React.ReactElement;
  endIcon?: React.ReactElement;
}
const CheckboxCustom = (props: Props) => {
  const classes = useStyles();
  const { label, endIcon, ...rest } = props;

  return (
    <Grid wrap="nowrap" container alignItems="center">
      <Grid item xs={true}>
        <FormControlLabel
          className={classes.root}
          control={<Checkbox {...rest} />}
          label={label || ""}
        />
      </Grid>
      {endIcon && (
        <Grid item xs="auto">
          {endIcon}
        </Grid>
      )}
    </Grid>
  );
};

export default CheckboxCustom;
