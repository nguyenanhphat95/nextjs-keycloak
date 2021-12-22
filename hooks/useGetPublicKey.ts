import axiosWrapper from "commons/helpers/axios/axios-instance";
import { useQuery } from "react-query";

const getPublicKey = async () => {
  const { data } = await axiosWrapper.get(
    "http://113.161.76.226:8087/oauth2/api/get_key"
  );
  return data;
};

export default function useGetPublicKey() {
  return useQuery(["post"], () => getPublicKey());
}
