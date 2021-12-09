import { PARTNER_ID, SIGNATURE } from "consts";

export const generateRequestBody = () => {
  return {
    request: {
      requestId: "",
      requestTime: "",
      partnerId: PARTNER_ID,
      signature: SIGNATURE,
    },
  };
};
