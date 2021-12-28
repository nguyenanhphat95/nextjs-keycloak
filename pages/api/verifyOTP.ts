import type { NextApiRequest, NextApiResponse } from "next";
import axiosWrapper from "commons/helpers/axios/axios-instance";
import { AxiosResponse } from "axios";
import { VerifyOTPResponse } from "interfaces/IVerifyOTP";
import {
  API_DOMAIN_SBH_SANDBOX,
  CLIENT_ID_SBH,
  CLIENT_SECRET_SBH,
} from "commons/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyOTPResponse>
) {
  const url = `${API_DOMAIN_SBH_SANDBOX}/oauthservice/verifyOtp`;
  const resp: AxiosResponse<VerifyOTPResponse> = await axiosWrapper.post(
    url,
    req.body,
    {
      headers: {
        "X-IBM-Client-Id": CLIENT_ID_SBH,
        "X-IBM-CLIENT-SECRET": CLIENT_SECRET_SBH,
      },
    }
  );
  res.status(200).json(resp.data);
}
