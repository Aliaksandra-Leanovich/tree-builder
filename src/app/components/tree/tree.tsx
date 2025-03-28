"use client";
import React from "react";

import { useFetchTree } from "../../hooks";
import TreeNodeComponent from "../tree-node/tree-node";


const Tree = () => {
  const treeName = "e4b1ba45-dcbe-4034-8a3a-c7607ac00bf8";
  const { tree, loading } = useFetchTree(treeName);

  return (
    <div className="tree">
      {loading ? <p>Загрузка дерева...</p> : tree ? <TreeNodeComponent node={tree} treeName={treeName} /> : <p>Нет дерева</p>}
    </div>
  );
};

export default Tree;