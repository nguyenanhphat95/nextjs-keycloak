import axios, { AxiosResponse } from "axios";
import { API_DOMAIN } from "consts";

interface PublicKeyResponse {
  data: {
    key: string;
  };
}

export const getPublicKey = async () => {
  const url = `${API_DOMAIN}/oauth2/api/get_key`;
  const resp: AxiosResponse<PublicKeyResponse> = await axios.get(url);
  return resp;
};
