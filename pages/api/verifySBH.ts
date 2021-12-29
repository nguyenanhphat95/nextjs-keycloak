import axiosWrapper from "commons/helpers/axios/axios-instance";
import type { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";
import { API_DOMAIN } from "commons/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = `${API_DOMAIN}/oauth2/api/verify_sbh`;
  const resp: AxiosResponse<any> = await axiosWrapper.post(url, req.body);
  res.status(200).json(resp.data);
}
