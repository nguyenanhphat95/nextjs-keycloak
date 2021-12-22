import { PARTNER_ID, SIGNATURE } from "commons/constants";
import { v4 as uuidv4 } from "uuid";

export const generateRequestBody = () => {
  return {
    request: {
      requestId: uuidv4(),
      requestTime: "",
      partnerId: PARTNER_ID,
      signature: SIGNATURE,
    },
  };
};
