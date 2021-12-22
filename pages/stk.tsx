import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { ParsedUrlQuery } from "querystring";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";

import {
  SectionHeader,
  SectionNotification,
  SectionFooter,
  UtilityEbank,
} from "components/LoginPage";

import { SectionLogin } from "components/STKPage";
import SectionMobile1 from "components/STKPage/components/mobile/Section1";

import {
  verifyClientApi,
  VerifyClientBody,
  VerifyBody,
  verifyApi,
  getPublicKey,
  getListAccountApi,
  AccountItem,
} from "services";

import {
  ERROR_CODE,
  generateRequestBody,
  handleErrorWithResponse,
} from "commons/helpers";
import { CLIENT_SECRET } from "commons/constants";

import desktopPic from "public/images/desktop.png";

import _get from "lodash/get";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createTheme();
const useStyles = makeStyles(() => ({
  banner: {
    "&  > span": {
      width: "100% !important",
    },
  },
  rootMobileUtility: {
    margin: "50px 40px",
  },
}));

const ERROR_MESSAGE_VERIFY_USER = {
  [ERROR_CODE.Unauthorized]: "Username or password incorrect",
  [ERROR_CODE.SessionExpired]: "Session Expired",
  [ERROR_CODE.UserNotExist]: "User Not Exist",
  [ERROR_CODE.SessionIdNotFound]: "Session Id Not Found",
  [ERROR_CODE.FormatMessageInvalid]: "Format Message Invalid",
  [ERROR_CODE.SystemError]: "System Error",
  [ERROR_CODE.PasswordExpired]:
    "Expired password requires accessing ebank.hdbank.com.vn to change password",
};

export const LOGIN_STEP = {
  step1: "step1",
  step2: "step2",
  step3: "step3",
};

const STKPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const query = router.query;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [loginStep, setLoginStep] = useState(LOGIN_STEP.step1);
  const [listAccount, setListAccount] = useState<AccountItem[]>([]);
  const accountRef = useRef<string | number>("");

  const _checkHaveParam = useCallback((query: ParsedUrlQuery) => {
    if (
      !query.client_id ||
      !query.redirect_uri ||
      !query.response_type ||
      !query.scope
    ) {
      return false;
    }
    return true;
  }, []);

  useEffect(() => {
    if (!_checkHaveParam(query)) {
      return;
    }

    const body: VerifyClientBody = {
      ...generateRequestBody(),
      data: {
        clientId: query.client_id as string,
        clientSecret: CLIENT_SECRET,
        redirectUri: query.redirect_uri as string,
      },
    };
    verifyClientApi(body)
      .then((resp) => {
        handleErrorWithResponse(router, resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, _checkHaveParam, router]);

  // if (!_checkHaveParam(query)) {
  //   return <div>Invalid params</div>;
  // }

  const _handleSubmitForm = async (
    JSEnscript: any,
    data: { username: string; password: string }
  ) => {
    setLoginStep(LOGIN_STEP.step2);
    getListAccountApi(data.username).then((res) => {
      setListAccount(res.data);
    });

    // const resp = await getPublicKey();
    // const publicKey = _get(resp, "data.data.key");

    // if (!publicKey) {
    //   toast.error("Get public key error");
    //   return;
    // }

    // const crypt = new JSEnscript();
    // crypt.setPublicKey(publicKey);
    // const credential = crypt.encrypt(JSON.stringify(data));

    // const body: VerifyBody = {
    //   ...generateRequestBody(),
    //   data: {
    //     credential,
    //     key: publicKey,
    //   },
    // };

    // verifyApi(body)
    //   .then((res) => {
    //     const code = _get(res, "data.data.code");
    //     if (!code) {
    //       const errorCode = _get(res, "data.response.responseCode");
    //       toast.error(ERROR_MESSAGE_VERIFY_USER[errorCode] || "Login failed");
    //       return;
    //     }
    //     setLoginStep(LOGIN_STEP.step2);
    //   })
    //   .catch((err) => console.log(err));
  };

  const _handleChooseAccount = (account: string | number) => {
    accountRef.current = account;
    setLoginStep(LOGIN_STEP.step3);
  };

  return (
    <Grid container direction="column">
      <ToastContainer
        theme="colored"
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Grid item xs={12}>
        <SectionHeader />
      </Grid>

      {isMobile && (
        <>
          <Grid item xs={12}>
            <SectionMobile1
              listAccount={listAccount}
              step={loginStep}
              onChooseAccount={_handleChooseAccount}
              onSubmit={_handleSubmitForm}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.rootMobileUtility}>
              <UtilityEbank />
            </div>
          </Grid>
        </>
      )}
      {!isMobile && (
        <>
          <Grid item xs={12}>
            <Box className={classes.banner}>
              <Image src={desktopPic} alt="desktop" />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <SectionLogin
              listAccount={listAccount}
              step={loginStep}
              onSubmit={_handleSubmitForm}
              onChooseAccount={_handleChooseAccount}
            />
          </Grid>

          <Grid item xs={12}>
            <SectionNotification />
          </Grid>
        </>
      )}

      <SectionFooter />
    </Grid>
  );
};

export default STKPage;
