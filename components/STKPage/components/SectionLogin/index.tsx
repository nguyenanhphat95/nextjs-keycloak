import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import _get from "lodash/get";
import { UtilityEbank, LoginForm } from "components/LoginPage";
import { LOGIN_STEP } from "pages/index";
import { ChooseAccountForm, LoginSuccessForm } from "components/STKPage";
createTheme();
const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 500,
  },
  borderRight: {
    borderRight: "1px solid #BCC0CC",
  },
}));

interface Props {
  onSubmit: (
    JSEnscript: any,
    data: { username: string; password: string }
  ) => void;
  onChooseAccount: (value: string | number) => void;
  step: string;
}

const SectionLogin = (props: Props) => {
  const { onSubmit, step, onChooseAccount } = props;
  const classes = useStyles();

  const _handleSubmit = (data: { username: string; password: string }) => {
    const JSEnscript = _get(window, "JSEncrypt");
    onSubmit(JSEnscript, data);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className={classes.borderRight}>
          <UtilityEbank />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              {step === LOGIN_STEP.step1 && (
                <LoginForm onSubmit={_handleSubmit} />
              )}
              {step === LOGIN_STEP.step2 && (
                <ChooseAccountForm onSubmit={onChooseAccount} />
              )}
              {step === LOGIN_STEP.step3 && <LoginSuccessForm />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionLogin;
