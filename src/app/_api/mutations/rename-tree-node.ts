import api from "@/utils/axiosInstance";

import { MutationsEnums } from "@/app/constants/mutations";


export const renameTreeNode = async (treeName: string, nodeId: string, newNodeName: string) => {
  const { data } = await api.post(
    `${MutationsEnums.RenameTreeNode}?treeName=${treeName}&nodeId=${nodeId}&newNodeName=${newNodeName}`
  );

  return data;
};
