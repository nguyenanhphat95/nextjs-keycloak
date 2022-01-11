import React, { useState } from "react";
import Script from "next/script";

import { makeStyles } from "@mui/styles";
import { Dialog, Box } from "@mui/material";

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
  dialogCustom: {
    "& .MuiPaper-root": {
      margin: 0,
    },
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
  const [stepCurrent, setStepCurrent] = useState(STEP_KHHH.step1);

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

  const _handleVerifyOtp = (otp: string) => {
    // TODO: verify OTP
    _toggleModalVerifyOTP();
    _onNextStep(STEP_KHHH.step4);
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
      <Dialog
        className={classes.dialogCustom}
        open={openVerifyOTP}
        onClose={_toggleModalVerifyOTP}
      >
        <Box px={1} py={2} className={classes.otpContainer}>
          <VerifyOTP onSubmit={_handleVerifyOtp} />
        </Box>
      </Dialog>
    </>
  );
};

export default Home;
