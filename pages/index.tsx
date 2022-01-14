import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "red",
    [theme.breakpoints.down("sm")]: {
      background: theme.palette.primary.main,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.root}>Home page</div>;
};

export default Home;
