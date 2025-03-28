import { createTreeNode, renameTreeNode, deleteTreeNode } from "../_api/mutations";

export const useTreeActions = (treeName: string, openModal: (type: any, action: any) => void) => {
  const handleAddNode = (parentId: string) => {
    openModal("add", async (nodeName: string) => {
      if (!nodeName) return;
      await createTreeNode(treeName, nodeName, parentId);
    });
  };

  const handleRenameNode = (nodeId: string) => {
    openModal("rename", async (newName: string) => {
      if (!newName) return;
      await renameTreeNode(treeName, nodeId, newName);
    });
  };

  const handleDeleteNode = (nodeId: string) => {
    openModal("delete", async () => {
      await deleteTreeNode(treeName, nodeId);
    });
  };

  return { handleAddNode, handleRenameNode, handleDeleteNode };
};
