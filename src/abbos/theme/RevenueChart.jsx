import { areaPath } from './chartUtils'

const revenueSales = [20, 32, 22, 28, 55, 35, 90, 45, 65, 40, 55, 35]
const revenueProfit = [30, 70, 40, 45, 50, 52, 50, 68, 55, 42, 90, 50]

function RevenueChart() {
  const revenueAreaOne = areaPath(revenueSales, 860, 250, 24)
  const revenueAreaTwo = areaPath(revenueProfit, 860, 250, 24)

  return (
    <div className="dashstack-chart-frame">
      <svg className="dashstack-svg" viewBox="0 0 860 250" role="img" aria-label="Revenue chart">
        <defs>
          <linearGradient id="revenueOrange" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff946d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff946d" stopOpacity="0.24" />
          </linearGradient>
          <linearGradient id="revenuePurple" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#c99aff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c99aff" stopOpacity="0.24" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="860" height="250" rx="24" fill="#ffffff" />
        {[40, 85, 130, 175, 220].map((y) => (
          <line key={y} x1="24" x2="836" y1={y} y2={y} stroke="#eef1f7" />
        ))}
        <path d={revenueAreaTwo} fill="url(#revenuePurple)" />
        <path d={revenueAreaOne} fill="url(#revenueOrange)" />
      </svg>
      <div className="dashstack-revenue-legend">
        <span><i className="legend-dot sales" />Sales</span>
        <span><i className="legend-dot profit" />Profit</span>
      </div>
    </div>
  )
}

export default RevenueChart
