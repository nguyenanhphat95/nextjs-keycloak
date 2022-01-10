import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import { makeStyles } from "@mui/styles";
import { Card, Grid, Box } from "@mui/material";
import { ButtonCustom, CheckboxCustom, SelectCustom } from "components/commons";

import * as hdbsServices from "services/hdbsService";
import { AccountItem } from "interfaces/IListAccount";
import { FormDataStep1 } from "../interfaces";

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
}));

const LIST_COMPANY = [
  { id: "Company 1", value: "Company 1" },
  { id: "Company 2", value: "Company 2" },
  { id: "Company 3", value: "Company 3" },
  { id: "Company 4", value: "Company 4" },
];

const LIST_LOCATION = [
  { id: 1, value: "Location 1" },
  { id: 2, value: "Location 2" },
  { id: 3, value: "Location 3" },
  { id: 4, value: "Location 4" },
];
interface Props {
  onSubmit: (data: FormDataStep1) => void;
}

const clientNo = "00012132";

const FormTKCKPage = (props: Props) => {
  const { onSubmit } = props;
  const classes = useStyles();

  const [listAccount, setListAccount] = useState<AccountItem[]>([]);
  const [data, setData] = useState({
    account: "",
    company: "",
    location: "",
    transferInternet: true,
    transferAuto: true,
    transferBonds: true,
  });

  useEffect(() => {
    hdbsServices.getListAccountApi(clientNo).then((res) => {
      const listAccount = _get(res, "data.data", []);
      setListAccount(listAccount);
    });
  }, []);

  const listAccountNew = useMemo(() => {
    return (listAccount || []).map((item) => ({
      id: item.accountNo,
      value: item.accountNo,
    }));
  }, [listAccount]);

  const _handleChange = (field: string, value: string) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const _getListLocationByCompany = (company: string) => {
    // TODO api get location
  };

  return (
    <div className={classes.root}>
      <Card className={classes.content}>
        <Grid container direction="column" spacing={2}>
          <Grid item className={classes.title}>
            Thông tin TKTT
          </Grid>
          <Grid item>
            <SelectCustom
              value={data.account}
              placeholder="Chọn TKTT"
              options={listAccountNew}
              fullWidth
              onChange={(event) => {
                _handleChange("account", _get(event, "target.value"));
              }}
            />
          </Grid>
          <Grid item className={classes.title}>
            Thông tin bổ sung TKCK
          </Grid>
          <Grid item>
            <SelectCustom
              value={data.company}
              placeholder="Chọn công ty CK"
              options={LIST_COMPANY}
              fullWidth
              onChange={(event) => {
                _handleChange("company", _get(event, "target.value"));
                _getListLocationByCompany(_get(event, "target.value"));
              }}
            />
          </Grid>
          <Grid item>
            <SelectCustom
              value={data.location}
              placeholder="Chọn địa điểm mở TKCK"
              options={LIST_LOCATION}
              fullWidth
              onChange={(event) => {
                _handleChange("location", _get(event, "target.value"));
              }}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <CheckboxCustom
                checked={data.transferInternet}
                endIcon={<Image width={20} height={20} src={warningIcon} />}
                label="Giao dịch qua Internet (Web và App)"
                onChange={(event) => {
                  _handleChange(
                    "transferInternet",
                    _get(event, "target.checked", false)
                  );
                }}
              />
            </Grid>
            <Grid item>
              <CheckboxCustom
                checked={data.transferAuto}
                endIcon={<Image width={20} height={20} src={warningIcon} />}
                label="Ứng trước tiền bán chứng khoán tự động"
                onChange={(event) => {
                  _handleChange(
                    "transferAuto",
                    _get(event, "target.checked", false)
                  );
                }}
              />
            </Grid>
            <Grid item>
              <CheckboxCustom
                checked={data.transferBonds}
                endIcon={<Image width={20} height={20} src={warningIcon} />}
                label="Giao dịch trái phiếu phát hành riêng lẻ"
                onChange={(event) => {
                  _handleChange(
                    "transferBonds",
                    _get(event, "target.checked", false)
                  );
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Box px={3} py={1}>
        <ButtonCustom
          onClick={() => onSubmit(data)}
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
