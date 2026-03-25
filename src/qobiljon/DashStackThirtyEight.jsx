import React, { useState } from "react";
import "./DashStackThirtyEight.css"

function DashStackThirtyEight() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Meeting with CEO", done: false, star: false },
    { text: "Pick up kids from school", done: false, star: true },
    { text: "Shopping with Brother", done: false, star: false },
    { text: "Going to Dia's School", done: false, star: false },
    { text: "Check design files", done: false, star: true },
    { text: "Update File", done: false, star: false },
  ]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false, star: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const toggleStar = (index) => {
    const newTasks = [...tasks];
    newTasks[index].star = !newTasks[index].star;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <header className="header">
        <h2 className="title">Add New To-Do</h2>
        <button className="save-btn" onClick={addTask}>Save</button>
      </header>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Write Your task name here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <section className="taskList">
        {tasks.map((t, index) => (
          <div key={index} className="task">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleDone(index)}
            />
            <span className={t.done ? "done" : ""}>{t.text}</span>
            <div className="actions">
              <span
                className={t.star ? "star active" : "star"}
                onClick={() => toggleStar(index)}
                title={t.star ? "Unstar" : "Star"}
              >
                ★
              </span>
              <span className="delete" onClick={() => deleteTask(index)} title="Delete">
                ✕
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DashStackThirtyEight
