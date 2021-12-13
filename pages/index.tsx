import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

import { Typography } from "@mui/material";
import { ButtonCustom } from "components/commons";

import _get from "lodash/get";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.dark,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonCustom variant="contained" color="secondary">
        Test button
      </ButtonCustom>
      <Typography variant="body1">Text typo</Typography>
    </div>
  );
};

export default Home;
