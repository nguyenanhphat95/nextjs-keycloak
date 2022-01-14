import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      [theme.breakpoints.down("xs")]: {
        background: "red",
      },
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return <div className={classes.root}>Home page</div>;
};

export default Home;
