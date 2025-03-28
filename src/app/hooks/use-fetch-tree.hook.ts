import { useState, useEffect } from "react";

import { getTree } from "../_api/mutations";

import { ITreeNode } from "../common/types";


export const useFetchTree = (treeName: string) => {
  const [tree, setTree] = useState<ITreeNode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTree = async () => {
      setLoading(true);
      try {
        const data = await getTree(treeName);
        setTree(data);
      } catch (error) {
        console.error("Ошибка при загрузке дерева:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTree();
  }, [treeName]);

  return { tree, loading, setTree };
};