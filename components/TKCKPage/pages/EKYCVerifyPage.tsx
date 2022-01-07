import React from "react";
import { makeStyles } from "@mui/styles";
import EKYCComponent from "../components/EKYCVerify";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));
const EKYCVerifyPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <EKYCComponent />
    </div>
  );
};

export default EKYCVerifyPage;
