import React, { ChangeEvent, useState } from "react";
import { Grid, Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ButtonCustom, CheckboxCustom } from "components/commons";
import { parseInfoFromEKYC } from "commons/helpers";
import { FormDataFinal } from "../interfaces";

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

interface Props {
  data: FormDataFinal;
}

const ConfirmInfoPage = (props: Props) => {
  const { data } = props;
  const classes = useStyles();
  const [isAceptCondition, setIsAceptCondition] = useState(false);

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAceptCondition(event.target.checked);
  };
  const info = parseInfoFromEKYC(data.ekycData);

  return (
    <div className={classes.root}>
      <div className={classes.tittle}>Xác nhận thông tin đăng ký mở TKCK</div>
      <Box mt={1} className={classes.content}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            Tên khách hàng: <b>{info?.username}</b>
          </Grid>
          <Grid item>
            Giới tính: <b>{info?.gender}</b>
          </Grid>
          <Grid item>
            Ngày sinh: <b>{info?.birthday}</b>
          </Grid>
          <Grid item>
            CMND/CCCD: <b>{info?.identification}</b>
          </Grid>
          <Grid item>
            Ngày cấp: <b>{info?.issue_date}</b>
          </Grid>
          <Grid item>
            Nơi cấp: <b>{info?.issue_place}</b>
          </Grid>
          <Grid item>
            Địa chỉ tường trú: <b>{info?.recent_location}</b>
          </Grid>
          <Grid item>
            Quốc tịch: <b>{info?.nationality}</b>
          </Grid>
          <Grid item>
            Số điện thoại: <b>0962486390</b>
          </Grid>
          <Grid item>
            Địa chỉ liên lạc: <b>{info?.recent_location}</b>
          </Grid>
          <Grid item>
            Địa chỉ email: <b>email</b>
          </Grid>
          <Grid item>
            Địa điểm mở TKCK: <b></b>
          </Grid>
          <Grid item>
            Số TKTT tại HDBank: <b></b>
          </Grid>
        </Grid>
      </Box>
      <Box mt={1}>
        <CheckboxCustom
          checked={isAceptCondition}
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
        <ButtonCustom
          disabled={!isAceptCondition}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Tiếp tục
        </ButtonCustom>
      </Box>
    </div>
  );
};

export default ConfirmInfoPage;
