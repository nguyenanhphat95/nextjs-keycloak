import type { NextApiRequest, NextApiResponse } from "next";
import axiosWrapper from "commons/helpers/axios/axios-instance";
import { AxiosResponse } from "axios";
import { CreateOTPResponse } from "interfaces/ICreateOTP";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateOTPResponse>
) {
  const url =
    "https://gateway.sandbox.hdbank.com.vn/hdbank/sandbox/oauthservice/createOtp";
  const resp: AxiosResponse<CreateOTPResponse> = await axiosWrapper.post(
    url,
    req.body,
    {
      headers: {
        "X-IBM-Client-Id": process.env.CLIENT_ID_SBH_CLIENT,
        "X-IBM-CLIENT-SECRET": process.env.CLIENT_SECRET_BH_CLIENT,
      },
    }
  );
  res.status(200).json(resp.data);
}
