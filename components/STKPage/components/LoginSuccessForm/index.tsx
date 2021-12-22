import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Grid, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import { LANGUAGE } from "commons/constants";
import resources from "pages/assets/translate.json";

import notificationIcon from "public/images/Notification.png";
import { ButtonCustom } from "components/commons";
import _get from "lodash/get";

createTheme();
const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
  },
  btnContinue: {
    borderColor: "#333333 !important",
    color: "#333333 !important",
  },
  textInstruction: {
    color: "#1890FF",
    fontWeight: 500,
    textAlign: "center",
  },
}));

const LoginSuccessForm = () => {
  const classes = useStyles();

  const { locale } = useRouter();
  const t = _get(resources, [locale || LANGUAGE.VI, "loginSuccessForm"]);

  return (
    <Box py={3} px={2} className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Box display="flex" justifyContent="center">
            <Image src={notificationIcon} alt="notification" />
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.title} display="flex" justifyContent="center">
            {t.title}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center">
            {t.content}
          </Box>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ButtonCustom
              className={classes.btnContinue}
              variant="outlined"
              fullWidth
            >
              {t.btnContinue}
            </ButtonCustom>
          </Grid>
          <Grid item xs={6}>
            <ButtonCustom color="secondary" variant="contained" fullWidth>
              {t.btnDownApp}
            </ButtonCustom>
          </Grid>
        </Grid>

        <Box mt={2} className={classes.textInstruction}>
          {t.textInstruction}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSuccessForm;
