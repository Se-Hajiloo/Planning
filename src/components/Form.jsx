import { useState } from "react";
import styles from "./Form.module.css";

function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");

  const addHandler = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError("Write what you plan to do.");
      return;
    }
    if (startTime && endTime && endTime <= startTime) {
      setError("The ending time must be after the starting time.");
      return;
    }

    onAdd({ title: title.trim(), startTime, endTime });
    setTitle("");
    setStartTime("");
    setEndTime("");
    setError("");
  };

  return (
    <section className={styles.addPlan}>
      <h2>Add plan</h2>
      <form className={styles.form} onSubmit={addHandler}>
        <label className={styles.field}>
          <span>Title</span>
          <input
            type="text"
            dir="auto"
            placeholder="What do you want to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className={styles.field}>
          <span>Starting time</span>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <label className={styles.field}>
          <span>Ending time</span>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </section>
  );
}

export default Form;
