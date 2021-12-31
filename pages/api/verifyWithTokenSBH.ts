import axiosWrapper from "commons/helpers/axios/axios-instance";
import type { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";
import { API_DOMAIN } from "commons/constants";
import { VerifyWithTokenSBHResponse } from "interfaces/IVerifyWithTokenSBH";
import { writeLog } from "commons/helpers/logger";
import ip from "ip";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyWithTokenSBHResponse>
) {
  try {
    const url = `${API_DOMAIN}/oauth2/api/verify_sbh_v2`;
    const resp: AxiosResponse<VerifyWithTokenSBHResponse> =
      await axiosWrapper.post(url, req.body);
    res.status(200).json(resp.data);
  } catch (err) {
    writeLog(
      ip.address(),
      new Date(),
      "Failed when call api verify with token SBH",
      JSON.stringify(req.body)
    );
  }
}
