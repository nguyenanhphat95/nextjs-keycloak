import React from "react";
import Image from "next/image";

import { Grid, Box, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import hdbsLogo from "public/asset/images/hdbs-logo.png";
import { ButtonCustom } from "components/commons";
const useStyles = makeStyles(() => ({
  root: {
    padding: "16px 6px",
  },
  textTitle: {},
}));

const RegisterSuccessPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <Box p={2}>
          <Box>
            <Image src={hdbsLogo} alt="hdbs-logo" />
          </Box>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Box textAlign="center">icon success</Box>
            </Grid>
            <Grid item>
              <Box textAlign="center">ĐĂNG KÝ THÀNH CÔNG</Box>
            </Grid>
            <Grid item>
              <Box textAlign="center">Chia sẻ</Box>
            </Grid>
            <Grid item>
              <Box textAlign="center">Công ty cổ phần chứng khoán HDBS</Box>
            </Grid>
            <Grid item>
              Quý khách đã yêu cầu đăng ký mở tài khoản giao dịch chứng khoán
              HDBS thành công. HDBS sẽ liên hệ với Quý khách để hướng dẫn hoàn
              tất thủ tục trong vòng 1 ngày làm việc. Trường hợp cần hỗ trợ. Quý
              khách vui lòng liên hệ hotline của HDBS theo số xxxxxxxxxxx
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Box mt={2}>
        <ButtonCustom fullWidth variant="contained" color="secondary">
          Giao dịch khác
        </ButtonCustom>
      </Box>
    </div>
  );
};

export default RegisterSuccessPage;
