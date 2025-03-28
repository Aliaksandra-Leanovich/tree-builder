import React, { useState } from "react";

import { useModal, useTreeActions } from "@/app/hooks";
import { Modal } from "@/app/common/components/modal/modal";

import { ITreeNodeProps } from "@/app/common/types";

import "./tree-node.styles.scss";


const TreeNodeComponent: React.FC<ITreeNodeProps> = ({ node, treeName }) => {
  const { isOpen, modalType, openModal, closeModal, confirmAction } = useModal();
  const { handleAddNode, handleRenameNode, handleDeleteNode } = useTreeActions(treeName, openModal);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="tree__node" key={node.id}>
      <div className="tree__node-container">
        <div className="tree__header">
          {node.children && node.children.length > 0 && (
            <button className="tree__toggle" onClick={() => setExpanded(!expanded)}>
              {expanded ? "▼" : "▶"}
            </button>
          )}
          <span>{node.name}</span>
        </div>
        <div className="tree__buttons">
          <button onClick={() => handleAddNode(node.id)}>➕</button>
          {node.name !== treeName && (
            <>
              <button onClick={() => handleRenameNode(node.id)}>✏️</button>
              <button onClick={() => handleDeleteNode(node.id)}>❌</button>
            </>
          )}
        </div>
      </div>
      {node.children && expanded && (
        <div className="tree__children">
          {node.children.map((child) => (
            <TreeNodeComponent key={child.id} node={child} treeName={treeName} />
          ))}
        </div>
      )}

      <Modal isOpen={isOpen} modalType={modalType} onConfirm={confirmAction} onClose={closeModal} />
    </div>
  );
};

export default TreeNodeComponent;
