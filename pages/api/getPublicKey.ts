import type { NextApiRequest, NextApiResponse } from "next";
import axiosWrapper from "commons/helpers/axios/axios-instance";
import { AxiosResponse } from "axios";
import { API_DOMAIN } from "commons/constants";
import { PublicKeyResponse } from "interfaces/IPublicKey";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PublicKeyResponse>
) {
  const url = `${API_DOMAIN}/oauth2/api/get_key`;
  const resp: AxiosResponse<PublicKeyResponse> = await axiosWrapper.get(url);
  res.status(200).json(resp.data);
}
