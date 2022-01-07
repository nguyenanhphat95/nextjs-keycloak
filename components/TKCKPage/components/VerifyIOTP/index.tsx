import React from "react";
import { Card, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputOTP from "components/commons/InputOTP";
import ButtonCustom from "components/commons/Button";

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 60,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  textSubTitle: {
    fontSize: 14,
    fontWeight: 300,
  },
  textLabelOtp: {
    fontSize: 14,
    fontWeight: 300,
  },
  borderBottom: {
    borderBottom: "1px solid",
  },
}));

const VerifyOTP = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <Box p={2} className={classes.borderBottom}>
          <div className={classes.textTitle}>Mật khẩu giao dịch</div>
          <div className={classes.textSubTitle}>
            Vui lòng nhập OTP để xác thực đăng ký
          </div>
        </Box>
        <Box p={2}>
          <InputOTP
            label={<div className={classes.textLabelOtp}>Nhập mã OTP</div>}
          />
        </Box>
      </Card>
      <Box px={2} mt={4}>
        <ButtonCustom fullWidth variant="contained" color="secondary">
          Xác nhận
        </ButtonCustom>
      </Box>
    </div>
  );
};
export default VerifyOTP;
