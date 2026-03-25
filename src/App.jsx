import { Navigate, Route, Routes } from 'react-router-dom'
import DashStackOne from './abbos/DashStackOne'
import Pricing from './abbos/Pricing'
import Calendar from './abbos/Calendar'
import ToDo from './abbos/ToDo'
import Contact from './abbos/Contact'
import Invoice from './abbos/Invoice'
import UIElements from './abbos/UIElements'
import Team from './abbos/Team'
import Table from './abbos/Table'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Reports from './pages/Reports'

import { navItems, pageItems, stats } from './abbos/data/abbosDashStackData'
// tugadi
const dashboardData = {
  navItems,
  pageItems,
  stats,
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashStackOne dashboardData={dashboardData} />} />
      <Route path="/pricing" element={<Pricing dashboardData={dashboardData} />} />
      <Route path="/calendar" element={<Calendar dashboardData={dashboardData} />} />
      <Route path="/to-do" element={<ToDo dashboardData={dashboardData} />} />
      <Route path="/contact" element={<Contact dashboardData={dashboardData} />} />
      <Route path="/invoice" element={<Invoice dashboardData={dashboardData} />} />
      <Route path="/ui-elements" element={<UIElements dashboardData={dashboardData} />} />
      <Route path="/team" element={<Team dashboardData={dashboardData} />} />
      <Route path="/table" element={<Table dashboardData={dashboardData} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App