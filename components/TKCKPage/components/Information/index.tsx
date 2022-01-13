import React from "react";
import { Card, Grid, Box, Modal, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import xIcon from "public/asset/images/X.png";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    padding: "10px",
    background: "#C7262E",
    color: "white",
  },
}));

interface Props {
  onClose?: () => void;
}

const Information = (props: Props) => {
  const classes = useStyles();
  const { onClose } = props;
  return (
    <Card>
      <Box className={classes.header}>
        <Grid
          alignItems="center"
          spacing={1}
          container
          justifyContent="space-between"
        >
          <Grid item>Ứng trước tiền bán chứng khoán tự động</Grid>
          {onClose && (
            <Grid item onClick={onClose}>
              <Image width={15} height={15} src={xIcon} />
            </Grid>
          )}
        </Grid>
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
