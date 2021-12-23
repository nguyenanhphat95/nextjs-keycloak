import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InputOTP, ButtonCustom } from "components/commons";
import { startTimer } from "commons/helpers";
import cn from "classnames";

const useStyles = makeStyles(() => ({
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
}));

const ConfirmOTP = () => {
  const classes = useStyles();

  useEffect(() => {
    const timer = async () => {
      const isDone = await startTimer(2);
    };
    timer();
  }, []);

  return (
    <Grid direction="column" container spacing={3}>
      <Grid item className={classes.header}>
        Xác nhận lựa chọn tài khoản thanh toán
      </Grid>
      <Grid item className={classes.caption}>
        Vui lòng nhập mã xác thực đã được gửi đến số điện thoại của bạn
      </Grid>
      <Grid item>
        <Grid direction="column" container spacing={1}>
          <Grid item className={cn(classes.textCenter, classes.label)}>
            Nhập mã xác nhận
          </Grid>
          <Grid item className={cn(classes.textCenter)}>
            <InputOTP onFinish={(optStr) => null} />
          </Grid>
          <Grid item className={cn(classes.textCenter, classes.caption)}>
            Quý khách không nhận được tin nhắn?
          </Grid>
          <Grid item className={cn(classes.textCenter)}>
            Gửi lại OTP
          </Grid>
          <Grid item className={cn(classes.textCenter)}>
            01:57
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <ButtonCustom variant="contained" fullWidth color="secondary">
          Xác nhận
        </ButtonCustom>
      </Grid>
    </Grid>
  );
};

export default ConfirmOTP;
