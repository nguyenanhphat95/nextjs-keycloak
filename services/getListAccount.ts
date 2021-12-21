import axios, { AxiosResponse } from "axios";
import { API_DOMAIN } from "consts";

export interface ListAccountResponse {
  data: AccountItem[];
}

export interface AccountItem {
  id: number;
  value: string;
}

export const getListAccountApi = async (
  username: string
): Promise<ListAccountResponse> => {
  // const url = `${API_DOMAIN}/getListAccount`;
  // const resp: AxiosResponse<ListAccountResponse> = await axios.get(url);
  // return resp;
  return Promise.resolve({
    data: [
      { id: 1, value: "Account 1" },
      { id: 2, value: "Account 2" },
      { id: 3, value: "Account 3" },
    ],
  });
};
