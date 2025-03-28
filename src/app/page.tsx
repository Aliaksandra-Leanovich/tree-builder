import Tree from "./components/tree/tree";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Tree />
    </div>
  );
}
