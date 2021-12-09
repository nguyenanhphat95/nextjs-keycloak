import React, { useState, ChangeEvent } from "react";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";

import { Grid, Box } from "@mui/material";
import { InputCustom, ButtonCustom } from "components/commons";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import userIcon from "public/images/user.png";
import passIcon from "public/images/pwd.png";
import rightIcon from "public/images/rightloging.png";

import resources from "pages/assets/translate.json";
import { LANGUAGE } from "consts";

import _get from "lodash/get";
createTheme();
const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: 20,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 500,
  },
}));

interface Props {
  onSubmit: (data: { username: string; password: string }) => void;
}

const LoginForm = (props: Props) => {
  const { onSubmit } = props;
  const classes = useStyles();
  const { locale } = useRouter();
  const t = _get(resources, [locale || LANGUAGE.VI, "loginForm"]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  return (
    <Box py={3} px={2} className={classes.root}>
      <Script
        id="stripe-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/2.3.1/jsencrypt.min.js"
      />
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <Box
            className={classes.loginTitle}
            display="flex"
            justifyContent="center"
          >
            {t?.title}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <InputCustom
                InputProps={{
                  startAdornment: <Image src={userIcon} alt="username" />,
                }}
                id="username"
                placeholder={t?.username}
                variant="outlined"
                value={formData.username}
                onChange={_handleChange}
              />
            </Grid>
            <Grid item>
              <InputCustom
                InputProps={{
                  startAdornment: <Image src={passIcon} alt="username" />,
                }}
                id="password"
                placeholder={t?.password}
                variant="outlined"
                value={formData.password}
                onChange={_handleChange}
                type="password"
              />
            </Grid>

            <Grid item>
              <ButtonCustom
                startIcon={<Image src={rightIcon} alt="icon-right" />}
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => onSubmit(formData)}
                disabled={!formData.password || !formData.username}
              >
                {t?.btnSubmit}
              </ButtonCustom>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
