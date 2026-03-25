import { areaPath, linePath } from './chartUtils'

const salesSeries = [20, 25, 26, 30, 31, 48, 40, 52, 45, 38, 48, 45, 52, 85, 45, 55, 50, 48, 55, 52, 58, 62, 30, 35, 30, 55, 56, 52, 45, 75, 55, 65, 55, 62, 45, 58, 50, 62, 55, 62]

function SalesDetailsChart() {
  const salesLine = linePath(salesSeries, 960, 260, 28)
  const salesArea = areaPath(salesSeries, 960, 260, 28)

  return (
    <div className="dashstack-chart-frame is-tall">
      <svg className="dashstack-svg" viewBox="0 0 960 260" role="img" aria-label="Sales details">
        <rect x="0" y="0" width="960" height="260" rx="24" fill="#ffffff" />
        {[50, 95, 140, 185, 230].map((y) => (
          <line key={y} x1="28" x2="932" y1={y} y2={y} stroke="#eef1f7" />
        ))}
        <path d={salesArea} fill="rgba(72, 128, 255, 0.09)" />
        <path d={salesLine} fill="none" stroke="#4880ff" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
      <div className="dashstack-x-axis">
        <span>5k</span>
        <span>10k</span>
        <span>15k</span>
        <span>20k</span>
        <span>25k</span>
        <span>30k</span>
        <span>35k</span>
        <span>40k</span>
        <span>45k</span>
        <span>50k</span>
        <span>55k</span>
        <span>60k</span>
      </div>
    </div>
  )
}

export default SalesDetailsChart
