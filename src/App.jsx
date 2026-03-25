import { Navigate, Route, Routes } from 'react-router-dom'
import DashStackOne from './abbos/DashStackOne'
import { navItems, pageItems, stats } from './abbos/data/abbosDashStackData'
import { dashstackPages } from './dashstackPages'

const dashboardData = {
  navItems,
  pageItems,
  stats,
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashStackOne dashboardData={dashboardData} />} />
      {dashstackPages.map(({ path }) => (
        <Route key={path} path={path} element={<DashStackOne dashboardData={dashboardData} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
