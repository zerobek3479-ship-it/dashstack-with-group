const tasks = [
  'Design dashboard UI',
  'Review API docs',
  'Team sync-up',
  'Fix chart layout',
]

function DashStackTwentySeven() {
  return (
    <section className="dashstack-panel">
      <h2 className="dashstack-panel-title">To-Do List</h2>
      <div className="dashstack-todo-list">
        {tasks.map((task) => (
          <article key={task} className="dashstack-card dashstack-todo-item">
            <div className="dashstack-todo-main">
              <div className="dashstack-check" />
              <strong>{task}</strong>
            </div>
            <span className="dashstack-priority">Priority</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DashStackTwentySeven
