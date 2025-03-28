import api from "@/utils/axiosInstance";

import { MutationsEnums } from "@/app/constants/mutations";


export const deleteTreeNode = async (treeName: string, nodeId: string) => {
  const { data } = await api.post(
    `${MutationsEnums.DeleteTreeNode}?treeName=${treeName}&nodeId=${nodeId}`
  );

  return data;
};
