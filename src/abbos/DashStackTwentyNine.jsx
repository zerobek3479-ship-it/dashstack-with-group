function DashStackTwentyNine({ onBackToDashboard }) {
  return (
    <section className="dashstack-auth-screen">
      <div className="dashstack-auth-card dashstack-error-card">
        <div className="dashstack-error-window">
          <div className="dashstack-error-window-top">
            <span />
            <span />
            <span />
          </div>
          <div className="dashstack-error-code">404</div>
          <div className="dashstack-error-window-bottom">
            <span />
            <span />
          </div>
        </div>

        <h3>Looks like you've got lost....</h3>
        <button type="button" className="dashstack-auth-submit" onClick={onBackToDashboard}>
          Back to Dashboard
        </button>
      </div>
    </section>
  )
}

export default DashStackTwentyNine
