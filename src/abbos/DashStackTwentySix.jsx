const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const calendarDays = Array.from({ length: 35 }, (_, index) => {
  const day = index - 1

  if (day < 1 || day > 31) {
    return { id: index, label: day < 1 ? '30' : String(day - 31), muted: true }
  }

  return {
    id: index,
    label: String(day),
    muted: false,
    note: day === 15 ? 'Meeting' : day === 21 ? 'Review' : '',
  }
})

function DashStackTwentySix() {
  return (
    <section className="dashstack-panel">
      <h2 className="dashstack-panel-title">Calendar</h2>
      <div className="dashstack-calendar">
        {weekDays.map((day) => (
          <div key={day} className="dashstack-calendar-head">
            {day}
          </div>
        ))}
        {calendarDays.map((day) => (
          <div key={day.id} className={`dashstack-calendar-day ${day.muted ? 'is-muted' : ''}`}>
            <div className="dashstack-calendar-day-number">{day.label}</div>
            {day.note ? <span className="dashstack-badge">{day.note}</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DashStackTwentySix
