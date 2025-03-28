export interface ITreeNode {
  id: string;
  name: string;
  children?: Array<ITreeNode>;
}

export interface ITreeNodeProps {
  node: ITreeNode;
  treeName: string;
}