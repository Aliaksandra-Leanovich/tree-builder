import api from "@/utils/axiosInstance";

import { MutationsEnums } from "@/app/constants/mutations";


export const createTreeNode = async (treeName: string, nodeName: string, parentNodeId: string) => {
  const { data } = await api.post(
    `${MutationsEnums.CreateTreeNode}?treeName=${treeName}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`
  );

  return data;
};
