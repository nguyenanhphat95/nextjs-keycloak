// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axiosWrapper from "helpers/axios/axios-instance";
import type { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";
import { ResponseData } from "models";
import { API_DOMAIN } from "consts";

export interface VerifyUserResponse extends ResponseData {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyUserResponse>
) {
  const url = `${API_DOMAIN}/oauth2/api/verify_client`;
  const resp: AxiosResponse<VerifyUserResponse> = await axiosWrapper.post(
    url,
    req.body
  );
  res.status(200).json(resp.data);
}
