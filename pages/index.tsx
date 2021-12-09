import React, { useEffect, useCallback, useRef } from "react";
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
  SectionLogin,
  SectionNotification,
  SectionFooter,
  SectionMobile1,
  UtilityEbank,
} from "components/LoginPage";

import {
  verifyClientApi,
  VerifyClientBody,
  VerifyBody,
  verifyApi,
  getPublicKey,
} from "services";
import { generateRequestBody, handleErrorWithResponse } from "helpers";
import { CLIENT_SECRET, REDIRECT_URI } from "consts";
import desktopPic from "public/images/desktop.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import _get from "lodash/get";

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

const Home = () => {
  const classes = useStyles();
  const router = useRouter();
  const query = router.query;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        // clientId: "minhnq9",
        // clientSecret: CLIENT_SECRET,
        // redirectUri: "http://127.0.0.1",
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

  if (!_checkHaveParam(query)) {
    return <div>Invalid params</div>;
  }

  const _handleSubmitForm = async (
    JSEnscript: any,
    data: { username: string; password: string }
  ) => {
    const resp = await getPublicKey();
    const publicKey = _get(resp, "data.data.key");
    if (!publicKey) {
      toast.error("Get public key failed");
      return;
    }

    const crypt = new JSEnscript();
    crypt.setPublicKey(publicKey);
    const credential = crypt.encrypt(JSON.stringify(data));

    const body: VerifyBody = {
      ...generateRequestBody(),
      data: {
        credential,
        key: publicKey,
      },
    };

    verifyApi(body)
      .then((res) => {
        const code = _get(res, "data.data.code");
        if (!code) {
          toast.error("Get code failed");
          return;
        }
        // Redirect to redirect uri
        router.push({
          pathname: REDIRECT_URI,
          query: {
            code,
          },
        });
      })
      .catch((err) => console.log(err));
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
            <SectionMobile1 />
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
            <SectionLogin onSubmit={_handleSubmitForm} />
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

export default Home;
