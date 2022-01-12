import React from "react";
import { Card, Grid, Box, Modal, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    padding: "10px",
    background: "#C7262E",
    color: "white",
  },
}));

const Information = () => {
  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.header}>
        Ứng trước tiền bán chứng khoán tự động
      </Box>
      <Box p={2}>
        HDBS sẽ cung cấp Tài khoản và Mật khẩu cho Quý Khách hàng đăng nhập vào
        Hệ thống trực tuyến của HDBS để đặt lệnh giao dịch và quản lý danh mục
        đầu tư
      </Box>
    </Card>
  );
};

export default Information;
