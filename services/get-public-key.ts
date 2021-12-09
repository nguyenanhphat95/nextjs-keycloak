import axios, { AxiosResponse } from "axios";

interface PublicKeyResponse {
  data: {
    key: string;
  };
}

export const getPublicKey = async () => {
  const url = "http://113.161.76.226:8087/oauth2/api/get_key";
  const resp: AxiosResponse<PublicKeyResponse> = await axios.get(url);
  return resp;
};
