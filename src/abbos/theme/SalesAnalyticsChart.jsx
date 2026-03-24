import { linePath } from './chartUtils'

const analyticPrimary = [25, 80, 70, 60, 95]
const analyticSecondary = [5, 65, 45, 25, 85]

function SalesAnalyticsChart() {
  const analyticPathOne = linePath(analyticPrimary, 300, 170, 18)
  const analyticPathTwo = linePath(analyticSecondary, 300, 170, 18)

  return (
    <div className="dashstack-analytics-chart">
      <svg className="dashstack-svg" viewBox="0 0 300 170" role="img" aria-label="Sales analytics">
        {[25, 60, 95, 130, 165].map((y) => (
          <line key={y} x1="18" x2="282" y1={y} y2={y} stroke="#eef1f7" />
        ))}
        <path d={analyticPathOne} fill="none" stroke="#4880ff" strokeWidth="3" strokeLinecap="round" />
        <path d={analyticPathTwo} fill="none" stroke="#00b69b" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="dashstack-mini-axis">
        <span>2015</span>
        <span>2016</span>
        <span>2017</span>
        <span>2018</span>
        <span>2026</span>
      </div>
    </div>
  )
}

export default SalesAnalyticsChart
