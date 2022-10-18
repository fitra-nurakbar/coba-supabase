import React from "react";
import styles from "../../styles/Home.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>To-Do List</h1>
      </div>
      <nav>
        <h2>Username</h2>
      </nav>
    </header>
  );
}
