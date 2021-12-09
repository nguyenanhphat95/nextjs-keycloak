import { ERROR_CODE } from "helpers";
import React from "react";
import { useRouter } from "next/router";
import _get from "lodash/get";

const ERROR_MESSAGE = {
  [ERROR_CODE.Unauthorized]: "Unauthorized",
  [ERROR_CODE.SessionExpired]: "Session Expired",
  [ERROR_CODE.UserNotExist]: "User Not Exist",
  [ERROR_CODE.SessionIdNotFound]: "Session Id Not Found",
  [ERROR_CODE.FormatMessageInvalid]: "Format Message Invalid",
  [ERROR_CODE.SystemError]: "System Error",
  Error: "Request failed",
};

const ErrorPage = () => {
  const router = useRouter();
  const query = router.query;
  const code = _get(query, "code", "Error");

  return <div>{_get(ERROR_MESSAGE, `${code}`)}</div>;
};

export default ErrorPage;
