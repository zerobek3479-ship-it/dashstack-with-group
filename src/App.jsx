import { Navigate, Route, Routes } from 'react-router-dom'
import DashStackOne from './abbos/DashStackOne'
import { navItems, pageItems, stats } from './abbos/data/abbosDashStackData'

const dashboardData = {
  navItems,
  pageItems,
  stats,
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashStackOne activeTab="dashboard" dashboardData={dashboardData} />} />
      <Route path="/pricing" element={<DashStackOne activeTab="Pricing" dashboardData={dashboardData} />} />
      <Route path="/calendar" element={<DashStackOne activeTab="Calendar" dashboardData={dashboardData} />} />
      <Route path="/to-do" element={<DashStackOne activeTab="To-Do" dashboardData={dashboardData} />} />
      <Route path="/contact" element={<DashStackOne activeTab="Contact" dashboardData={dashboardData} />} />
      <Route path="/invoice" element={<DashStackOne activeTab="Invoice" dashboardData={dashboardData} />} />
      <Route path="/ui-elements" element={<DashStackOne activeTab="UI Elements" dashboardData={dashboardData} />} />
      <Route path="/team" element={<DashStackOne activeTab="Team" dashboardData={dashboardData} />} />
      <Route path="/table" element={<DashStackOne activeTab="Table" dashboardData={dashboardData} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
