"use client";
import { useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();
  const handleAdd = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setToDos([...toDos, newItem]);
    inputRef.current.value = "";
  };
  const handleDone = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  };
  const handleDel = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>To Do List</h1>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Enter Item..."
      />
      <button onClick={() => handleAdd()} className={styles.btn}>
        Add
      </button>
      <ul>
        {toDos.map(({ completed, text }, index) => {
          return (
            <div className={styles.items} key={index}>
              <li
                style={{ textDecoration: completed ? "line-through" : "" }}
                className={` ${styles.li}`}
                onClick={() => handleDone(index)}
                key={index}
              >
                {text}
              </li>
              <span onClick={() => handleDel(index)} className={styles.del}>
                ❌
              </span>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
