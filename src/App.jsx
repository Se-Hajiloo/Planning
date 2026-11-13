import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Plans from "./components/Plans";

const STORAGE_KEY = "planning-data";

function loadPlans() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function App() {
  // Lazy initial state: read from localStorage once, on first render
  const [data, setData] = useState(loadPlans);

  // Save to localStorage every time the list changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* storage full or blocked - ignore */
    }
  }, [data]);

  const addPlan = (plan) => {
    setData((prev) => [...prev, { ...plan, id: crypto.randomUUID(), done: false }]);
  };

  const toggleDone = (id) => {
    setData((prev) =>
      prev.map((p) => (p.id === id ? { ...p, done: !p.done } : p))
    );
  };

  const deletePlan = (id) => {
    setData((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <Header total={data.length} doneCount={data.filter((p) => p.done).length} />
      <Form onAdd={addPlan} />
      <Plans data={data} onToggle={toggleDone} onDelete={deletePlan} />
    </>
  );
}

export default App;
