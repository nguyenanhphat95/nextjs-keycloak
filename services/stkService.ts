import axios, { AxiosResponse } from "axios";
import {
  CHANNEL_SBH,
  IS_REQ_CHAL_CODE_SBH,
  NARRATIVE_SBH,
  SERVICE_CODE_SBH,
} from "commons/constants";
import { CreateOTPRequest, CreateOTPResponse } from "interfaces/ICreateOTP";
import {
  ListAccountResponse,
  ListAccountRequest,
} from "interfaces/IListAccount";
import { VerifyOTPRequest, VerifyOTPResponse } from "interfaces/IVerifyOTP";
import { v4 as uuidv4 } from "uuid";

export const getListAccountApi = async (clientNo: string) => {
  const body: ListAccountRequest = {
    requestId: uuidv4() as string,
    data: {
      clientNo,
    },
  };
  const resp: AxiosResponse<ListAccountResponse> = await axios.post(
    "/api/getAccountByCif",
    body
  );
  return resp;
};

export const createOTPApi = async (userId: string) => {
  const body: CreateOTPRequest = {
    requestId: uuidv4() as string,
    data: {
      channel: CHANNEL_SBH as string,
      serviceCode: SERVICE_CODE_SBH as string,
      userId,
      serialNo: "",
      narrative: NARRATIVE_SBH as string,
      language: "vi",
      clientImei: "",
      partner: "",
      isReqChalCode: IS_REQ_CHAL_CODE_SBH as string,
      mediaType: "",
    },
  };
  const resp: AxiosResponse<CreateOTPResponse> = await axios.post(
    "/api/createOTP",
    body
  );
  return resp;
};

export const verifyOTPApi = async (userId: string, otp: string) => {
  const body: VerifyOTPRequest = {
    requestId: uuidv4() as string,
    data: {
      channel: CHANNEL_SBH as string,
      serviceCode: SERVICE_CODE_SBH as string,
      userId,
      serialNo: "",
      narrative: NARRATIVE_SBH as string,
      mediaType: "",
      challengeCode: "",
      otp,
    },
  };
  const resp: AxiosResponse<VerifyOTPResponse> = await axios.post(
    "/api/verifyOTP",
    body
  );
  return resp;
};
