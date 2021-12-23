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

export const isNumber = (val: number): boolean => {
  return !isNaN(val);
};

export const startTimer = async (
  duration: any = 59
  // display: HTMLElement
) => {
  return new Promise((resolve) => {
    let timer: any = duration;
    let minutes: any;
    let seconds: any;
    const x = setInterval(() => {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);
      console.log("typeof----:", typeof minutes);
      console.log("minutes----:", minutes);
      console.log("-------");
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // if (+minutes) {
      //   display.textContent = `(${minutes} : ${seconds}s)`;
      // } else {
      //   display.textContent = `(${seconds}s)`;
      // }
      timer--;

      if (timer < 0) {
        // display.textContent = "";
        resolve(true);
        clearInterval(x);
      }
    }, 1000);
  });
};
