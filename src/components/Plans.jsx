import PlanCard from "./PlanCard";
import styles from "./Plans.module.css";

function Plans({ data, onToggle, onDelete }) {
  if (data.length === 0) {
    return (
      <p className={styles.empty}>
        No plans yet. Add your first plan above.
      </p>
    );
  }

  // Show plans ordered by starting time; plans without a time go last
  const sorted = [...data].sort((a, b) => {
    if (!a.startTime && !b.startTime) return 0;
    if (!a.startTime) return 1;
    if (!b.startTime) return -1;
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <ul className={styles.list}>
      {sorted.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          onToggle={() => onToggle(plan.id)}
          onDelete={() => onDelete(plan.id)}
        />
      ))}
    </ul>
  );
}

export default Plans;
