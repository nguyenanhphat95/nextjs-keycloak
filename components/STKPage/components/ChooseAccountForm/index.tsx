import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import { ButtonCustom, SelectCustom } from "components/commons";

import { LANGUAGE } from "consts";
import resources from "pages/assets/translate.json";

import notificationIcon from "public/images/Notification.png";

import _get from "lodash/get";
createTheme();
const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: 20,
  },
  btnCustomRegister: {
    borderColor: "#333333 !important",
    color: "#333333 !important",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
}));

interface Props {
  onSubmit: (value: string | number) => void;
  listAccount?: any[];
}

const ChooseAccountForm = (props: Props) => {
  const { onSubmit, listAccount } = props;
  const classes = useStyles();
  const [account, setAccount] = useState("");
  const { locale } = useRouter();
  const t = _get(resources, [locale || LANGUAGE.VI, "chooseAccountForm"]);

  return (
    <Box py={3} px={2} className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Box display="flex" justifyContent="center">
            <Image src={notificationIcon} alt="notification" />
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.title} display="flex" justifyContent="center">
            {t.title}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center">
            {t.content}
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center">
            {t.labelAccount}
          </Box>
        </Grid>

        <Grid item>
          <SelectCustom
            value={account}
            fullWidth
            options={listAccount}
            placeholder={t.placeholderAccount}
            onChange={(event) => {
              setAccount(_get(event, "target.value"));
            }}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <ButtonCustom
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => onSubmit(account)}
          disabled={account ? false : true}
        >
          {t.btnSubmit}
        </ButtonCustom>
      </Box>
    </Box>
  );
};

export default ChooseAccountForm;
