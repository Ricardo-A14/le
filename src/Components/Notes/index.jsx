import { useState, useEffect } from "react";
import styles from "./Notes.module.css";

const Notes = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const getValue = localStorage.getItem("notes");
    if (getValue) {
      setNotes(getValue);
    }
  }, []);

  const HandleNotes = (event) => {
    const newValue = event.target.value;
    setNotes(newValue);
    localStorage.setItem("notes", newValue);
  };

  return (
    <div className={styles.notes_container}>
      <textarea
        value={notes}
        className={styles.textArea}
        cols="30"
        rows="10"
        placeholder="Escribe tus notas."
        onChange={HandleNotes}
      ></textarea>
    </div>
  );
};

export default Notes;
