const columns = [
  {
    title: 'To Do',
    items: [
      { title: 'Fix UI Layout', text: 'Refine spacing and card alignment.' },
      { title: 'Prepare assets', text: 'Collect product and avatar visuals.' },
    ],
  },
  {
    title: 'In Progress',
    items: [
      { title: 'Chart integration', text: 'Build dashboard graphs with SVG.' },
      { title: 'Responsive behavior', text: 'Tune mobile and tablet layout.' },
    ],
  },
  {
    title: 'Done',
    items: [
      { title: 'Sidebar setup', text: 'Navigation for dashboard pages is ready.' },
      { title: 'Base theme', text: 'Primary color and panel styling completed.' },
    ],
  },
]

function DashStackTwentyNine() {
  return (
    <section className="dashstack-board">
      {columns.map((column) => (
        <article key={column.title} className="dashstack-column">
          <h3 className="dashstack-column-title">{column.title}</h3>
          {column.items.map((item) => (
            <div key={item.title} className="dashstack-task-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </article>
      ))}
    </section>
  )
}

export default DashStackTwentyNine
