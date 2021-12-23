import { PARTNER_ID, SIGNATURE } from "consts";
import { v4 as uuidv4 } from "uuid";

export const generateRequestBody = () => {
  return {
    request: {
      requestId: uuidv4(),
      requestTime: "",
      partnerId: PARTNER_ID as string,
      signature: SIGNATURE as string,
    },
  };
};
