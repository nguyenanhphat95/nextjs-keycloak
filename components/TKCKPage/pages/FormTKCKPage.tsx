import React, { useState } from "react";
import Image from "next/image";

import { makeStyles } from "@mui/styles";
import { Card, Grid, Box } from "@mui/material";
import { ButtonCustom, CheckboxCustom, SelectCustom } from "components/commons";
import warningIcon from "public/asset/images/warning.png";

import _get from "lodash/get";

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: "1rem",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  warningIcon: {
    width: "20px !important",
  },
}));

interface Props {
  onSubmit: () => void;
}

const LIST_TKTT = [
  { id: 1, value: "Tài khoản 1" },
  { id: 2, value: "Tài khoản 2" },
  { id: 3, value: "Tài khoản 3" },
];

const LIST_COMPANY = [
  { id: 1, value: "Company 1" },
  { id: 2, value: "Company 2" },
  { id: 3, value: "Company 3" },
  { id: 4, value: "Company 4" },
];

const FormTKCKPage = (props: Props) => {
  const { onSubmit } = props;
  const classes = useStyles();
  const [data, setData] = useState({
    accountTKTT: "",
  });
  return (
    <div className={classes.root}>
      <Card className={classes.content}>
        <Grid container direction="column" spacing={2}>
          <Grid item className={classes.title}>
            Thông tin TKTT
          </Grid>
          <Grid item>
            <SelectCustom
              value=""
              placeholder="Chọn TKTT"
              options={LIST_TKTT}
              fullWidth
              onChange={(event) => {
                console.log("value", _get(event, "target.value"));
              }}
            />
          </Grid>
          <Grid item className={classes.title}>
            Thông tin bổ sung TKCK
          </Grid>
          <Grid item>
            <SelectCustom
              value=""
              placeholder="Chọn công ty CK"
              options={LIST_COMPANY}
              fullWidth
            />
          </Grid>
          <Grid item>
            <SelectCustom
              value=""
              placeholder="Chọn địa điểm mở TKCK"
              options={[]}
              fullWidth
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <CheckboxCustom
                endIcon={
                  <Image className={classes.warningIcon} src={warningIcon} />
                }
                label="Giao dịch qua Internet (Web và App)"
              />
            </Grid>
            <Grid item>
              <CheckboxCustom label="Ứng trước tiền bán chứng khoán tự động" />
            </Grid>
            <Grid item>
              <CheckboxCustom label="Giao dịch trái phiếu phát hành riêng lẻ" />
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Box px={3} py={1}>
        <ButtonCustom
          onClick={onSubmit}
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

export default FormTKCKPage;
