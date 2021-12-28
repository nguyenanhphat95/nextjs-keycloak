import type { NextApiRequest, NextApiResponse } from "next";
import axiosWrapper from "commons/helpers/axios/axios-instance";
import { AxiosResponse } from "axios";
import { ListAccountResponse } from "interfaces/IListAccount";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListAccountResponse>
) {
  const url =
    "http://gateway.sandbox.hdbank.com.vn/hdbank/sandbox/accounts/byCif";
  const resp: AxiosResponse<ListAccountResponse> = await axiosWrapper.post(
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
