import styles from "./PlanCard.module.css";

function PlanCard({ plan, onToggle, onDelete }) {
  const { title, startTime, endTime, done } = plan;

  let time = "No time set";
  if (startTime && endTime) time = `${startTime} – ${endTime}`;
  else if (startTime) time = `From ${startTime}`;
  else if (endTime) time = `Until ${endTime}`;

  return (
    <li className={`${styles.card} ${done ? styles.done : ""}`}>
      <p className={styles.time} dir="ltr">
        {time}
      </p>
      <h3 className={styles.title} dir="auto">
        {title}
      </h3>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.toggle}
          onClick={onToggle}
          aria-pressed={done}
        >
          {done ? "Done ✓" : "Not done"}
        </button>
        <button
          type="button"
          className={styles.delete}
          onClick={onDelete}
          aria-label={`Delete plan: ${title}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default PlanCard;
