import React, { ChangeEvent } from "react";
import { Grid, Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ButtonCustom, CheckboxCustom } from "components/commons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  content: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  textTermAndCondition: {
    color: theme.palette.error.main,
  },
  tittle: {
    fontWeight: 600,
  },
}));

const ConfirmInfoPage = () => {
  const classes = useStyles();

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className={classes.root}>
      <div className={classes.tittle}>Xác nhận thông tin đăng ký mở TKCK</div>
      <Box mt={1} className={classes.content}>
        <Grid container direction="column" spacing={1}>
          <Grid item>Tên khách hàng</Grid>
          <Grid item>Giới tính</Grid>
          <Grid item>Ngày sinh</Grid>
          <Grid item>CMND/CCCD</Grid>
          <Grid item>Ngày cấp</Grid>
          <Grid item>Nơi cấp</Grid>
          <Grid item>Địa chỉ tường trú</Grid>
          <Grid item>Quốc tịch</Grid>
          <Grid item>Số điện thoại</Grid>
          <Grid item>Địa chỉ liên lạc</Grid>
          <Grid item>Địa chỉ email</Grid>
          <Grid item>Địa điểm mở TKCK</Grid>
          <Grid item>Số TKTT tại HDBank</Grid>
        </Grid>
      </Box>
      <Box mt={1}>
        <CheckboxCustom
          onChange={_handleChange}
          label={
            <div>
              Tôi đồng ý và ủy quyền cho HDBank để cung cấp các thông tin cá
              nhân, thông tài khoản của tôi cho Công ty chứng khoán
              xxxxxxxxxxxx, để thực hiện các thủ tục mở tài khoản chứng khoán
              tại Công ty chứng khoán xxxxxxxxxxx. Tôi đã đọc, hiểu rõ và đồng ý
              với{" "}
              <span className={classes.textTermAndCondition}>
                Điều khoản và Điều kiện
              </span>{" "}
              đính kèm
            </div>
          }
        />
      </Box>

      <Box mt={2} className={classes.content}>
        <ButtonCustom fullWidth variant="contained" color="secondary">
          Tiếp tục
        </ButtonCustom>
      </Box>
    </div>
  );
};

export default ConfirmInfoPage;
