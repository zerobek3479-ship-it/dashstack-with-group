function CustomersRingChart() {
  return (
    <div className="dashstack-customers-wrap">
      <div className="dashstack-ring-chart">
        <span className="ring-dot dot-1" />
        <span className="ring-dot dot-2" />
        <span className="ring-dot dot-3" />
        <span className="ring-dot dot-4" />
      </div>
      <div className="dashstack-customer-stats">
        <div>
          <strong>34,249</strong>
          <span>New Customers</span>
        </div>
        <div>
          <strong>1420</strong>
          <span>Repeated</span>
        </div>
      </div>
    </div>
  )
}

export default CustomersRingChart
