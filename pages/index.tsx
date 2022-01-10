import React, { useState } from "react";
import Script from "next/script";

import { makeStyles } from "@mui/styles";
import { Grid, Modal, Box } from "@mui/material";

import {
  FormTKCKPage,
  EKYCVerifyPage,
  ConfirmInfoPage,
  RegisterSuccessPage,
  VerifyOTP,
} from "components/TKCKPage";
import TKCKContext from "components/TKCKPage/contexts/TKCKContextValue";
import { FormDataStep1 } from "components/TKCKPage/interfaces";

const useStyles = makeStyles(() => ({
  root: {
    background: "#F2F2F4",
    height: "100vh",
  },
  otpContainer: {
    background: "#FAFAFA",
  },
  h100: {
    height: "100%",
  },
}));

export const STEP_KHHH = {
  step1: "Step enter TKCK",
  step2: "Step eKYC verify",
  step3: "Step confirm info register TKCK",
  step4: "Step register success",
};

const Home = () => {
  const classes = useStyles();
  const [openVerifyOTP, setOpenVerifyOTP] = useState(false);
  const [stepCurrent, setStepCurrent] = useState(STEP_KHHH.step3);

  const [dataForm, setDataForm] = useState({
    account: "",
    company: "",
    location: "",
    transferInternet: false,
    transferAuto: false,
    transferBonds: false,
    ekycData: null,
  });

  const _onNextStep = (step: string) => {
    setStepCurrent(step);
  };

  const _toggleModalVerifyOTP = () => {
    setOpenVerifyOTP((prev) => !prev);
  };

  const TKCKContextValue = {};

  const _handleSubmitStep1 = (data: FormDataStep1) => {
    setDataForm({
      ...dataForm,
      ...data,
    });
    _onNextStep(STEP_KHHH.step2);
  };

  const _handleSubmitStep2 = (data: any) => {
    if (!data) {
      return;
    }
    setDataForm({
      ...dataForm,
      ekycData: data,
    });
    _onNextStep(STEP_KHHH.step3);
  };

  const _handleSubmitStep3 = () => {
    // TODO: api send OTP
    _toggleModalVerifyOTP();
  };

  return (
    <>
      <Script id="lottie-id" src="/asset/js/lottie.min.js" />
      <Script id="jsqr-id" src="/asset/js/jsQR.js" />
      <Script id="vnptbrowser-id" src="/asset/js/VNPTBrowserSDKAppV2.3.3.js" />

      <div className={classes.root}>
        <TKCKContext.Provider value={TKCKContextValue}>
          {stepCurrent === STEP_KHHH.step1 && (
            <FormTKCKPage onSubmit={_handleSubmitStep1} />
          )}
          {stepCurrent === STEP_KHHH.step2 && (
            <EKYCVerifyPage onSubmit={_handleSubmitStep2} />
          )}
          {stepCurrent === STEP_KHHH.step3 && (
            <ConfirmInfoPage data={dataForm} onSubmit={_handleSubmitStep3} />
          )}
          {stepCurrent === STEP_KHHH.step4 && <RegisterSuccessPage />}
        </TKCKContext.Provider>
      </div>
      {/* <Modal open={openEKYCNote} onClose={_toggleModalEKYCNote}>
        <Grid
          className={classes.h100}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Card>
              <EKYCNote />
            </Card>
          </Grid>
        </Grid>
      </Modal> */}
      <Modal open={openVerifyOTP} onClose={_toggleModalVerifyOTP}>
        <Grid
          className={classes.h100}
          container
          justifyContent="center"
          alignItems="flex-end"
        >
          <Grid item xs={11}>
            <Box px={1} py={2} className={classes.otpContainer}>
              <VerifyOTP />
            </Box>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Home;
