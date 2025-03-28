import api from "@/utils/axiosInstance";

import { MutationsEnums } from "@/app/constants/mutations";


export const getTree = async (treeName: string) => {
  const { data } = await api.post(
    `${MutationsEnums.GetTree}?treeName=${treeName}`
  );

  return data;
};
