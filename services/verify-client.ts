import axios, { AxiosResponse } from "axios";
import { VerifyUserResponse } from "pages/api/verifyUser";

export interface VerifyClientBody {
  request: {
    requestId: string;
    requestTime: string;
    partnerId: string;
    signature: string;
  };
  data: {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
  };
}

export const verifyClientApi = async (body: VerifyClientBody) => {
  const resp: AxiosResponse<VerifyUserResponse> = await axios.post(
    "/api/verifyUser",
    body
  );
  return resp;
};
