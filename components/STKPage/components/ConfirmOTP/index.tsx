import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InputOTP, ButtonCustom } from "components/commons";
import { startTimer } from "commons/helpers";

import { LANGUAGE } from "commons/constants";
import resources from "pages/assets/translate.json";

import cn from "classnames";
import _get from 'lodash/get';

const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: 20,
  },
  header: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
  },
  caption: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 400,
  },
  label: {
    fontWeight: 500,
  },
  textCenter: {
    textAlign: "center",
  },
  textLink: {
    color: "#1890FF",
    fontWeight: 500,
    cursor: "pointer",
  },
  textTimer: {
    color: "#BE1128",
  },
}));

interface Props {
  onSubmit: (otp: string) => void;
}

const ConfirmOTP = (props: Props) => {
  const { onSubmit } = props;

  const classes = useStyles();
  const timerRef = useRef<any>();
  const [otp, setOtp] = useState("");

  const { locale } = useRouter();
  const t = _get(resources, [locale || LANGUAGE.VI, "confirmOTP"]);

  useEffect(() => {
    const timer = async () => {
      await startTimer(119, timerRef.current);
    };
    timer();
  }, []);

  return (
    <Box py={3} px={2} className={classes.root}>
      <Grid direction="column" container spacing={3}>
        <Grid item className={classes.header}>
          {t.title}
        </Grid>
        <Grid item className={classes.caption}>
        {t.content}
        </Grid>
        <Grid item>
          <Grid direction="column" container spacing={1}>
            <Grid item className={cn(classes.textCenter, classes.label)}>
            {t.label}
            </Grid>
            <Grid item className={cn(classes.textCenter)}>
              <InputOTP onFinish={setOtp} />
            </Grid>
            <Grid item className={cn(classes.textCenter, classes.caption)}>
            {t.question}
            </Grid>
            <Grid item className={cn(classes.textCenter, classes.textLink)}>
            {t.resendOTP}
            </Grid>
            <Grid item className={cn(classes.textCenter)}>
              <span className={classes.textTimer} ref={timerRef} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <ButtonCustom
            variant="contained"
            fullWidth
            color="secondary"
            disabled={!otp}
            onClick={() => onSubmit(otp)}
          >
           {t.btnSubmit}
          </ButtonCustom>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmOTP;
