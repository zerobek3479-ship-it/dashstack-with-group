import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './DashStackOne.css'
import CustomersRingChart from './theme/CustomersRingChart'
import RevenueChart from './theme/RevenueChart'
import SalesAnalyticsChart from './theme/SalesAnalyticsChart'
import SalesDetailsChart from './theme/SalesDetailsChart'

function PlaceholderPage() {
  return (
    <section className="dashstack-placeholder">
      <div className="dashstack-placeholder-empty" />
    </section>
  )
}


function DashboardContent({ stats }) {
  return (
    <div className="dashstack-content-stack">
      <section className="dashstack-stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="dashstack-stat-card">
            <div className="dashstack-stat-top">
              <div>
                <p className="dashstack-stat-label">{item.label}</p>
                <h3 className="dashstack-stat-value">{item.value}</h3>
              </div>
              <div className={`dashstack-stat-icon ${item.icon.toLowerCase()}`}>{item.icon}</div>
            </div>
            <p className={`dashstack-stat-change ${item.tone === 'up' ? 'is-up' : 'is-down'}`}>{item.change}</p>
          </article>
        ))}
      </section>

      <section className="dashstack-panel-card">
        <div className="dashstack-panel-head">
          <h3>Sales Details</h3>
          <button type="button" className="dashstack-small-filter">
            October
          </button>
        </div>
        <SalesDetailsChart />
      </section>

      <section className="dashstack-panel-card">
        <div className="dashstack-panel-head">
          <h3>Revenue</h3>
          <button type="button" className="dashstack-small-filter">
            October
          </button>
        </div>
        <RevenueChart />
      </section>

      <section className="dashstack-bottom-grid">
        <article className="dashstack-panel-card compact">
          <h3>Customers</h3>
          <CustomersRingChart />
        </article>

        <article className="dashstack-panel-card compact featured">
          <h3>Featured Product</h3>
          <div className="dashstack-featured-body">
            <button type="button" className="dashstack-arrow-button">
              {'<'}
            </button>
            <div className="dashstack-headphone-art">
              <span className="band" />
              <span className="ear left" />
              <span className="ear right" />
            </div>
            <button type="button" className="dashstack-arrow-button">
              {'>'}
            </button>
          </div>
          <p className="dashstack-featured-name">Beats Headphone 2026</p>
          <p className="dashstack-featured-price">$89.00</p>
        </article>

        <article className="dashstack-panel-card compact">
          <h3>Sales Analytics</h3>
          <SalesAnalyticsChart />
        </article>
      </section>

      <section className="dashstack-panel-card">
        <div className="dashstack-panel-head">
          <h3>Deals Details</h3>
          <button type="button" className="dashstack-small-filter">
            October
          </button>
        </div>
        <div className="dashstack-table-wrap">
          <table className="dashstack-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Location</th>
                <th>Date - Time</th>
                <th>Piece</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="dashstack-product-cell">
                    <span className="dashstack-watch-icon">W</span>
                    Apple Watch
                  </div>
                </td>
                <td>6096 Marjolaine Landing</td>
                <td>12.09.2026 - 12:53 PM</td>
                <td>423</td>
                <td>$34,295</td>
                <td>
                  <span className="dashstack-status delivered">Delivered</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

const pagePathMap = {
  dashboard: '/',
  Pricing: '/pricing',
  Calendar: '/calendar',
  'To-Do': '/to-do',
  Contact: '/contact',
  Invoice: '/invoice',
  'UI Elements': '/ui-elements',
  Team: '/team',
  Table: '/table',
}

function DashStackOne({ activeTab: routeTab = 'dashboard', dashboardData }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(routeTab)

  useEffect(() => {
    setActiveTab(routeTab)
  }, [routeTab])

  const isDashboard = activeTab === 'dashboard'
  const pageTitle = activeTab === 'dashboard' ? 'Dashboard' : activeTab
  const { navItems = [], pageItems = [], stats = [] } = dashboardData ?? {}

  const handleTabChange = (nextTab) => {
    setActiveTab(nextTab)
    navigate(pagePathMap[nextTab] ?? '/')
  }

  return (
    <div className="dashstack-shell">
      <aside className="dashstack-sidebar">
        <div className="dashstack-brand-row">
          <div className="dashstack-logo-mark">D</div>
          <h1>DashStack</h1>
        </div>

        <nav className="dashstack-menu">
          <button
            type="button"
            onClick={() => handleTabChange('dashboard')}
            className={`dashstack-menu-item ${isDashboard ? 'is-active' : ''}`}
          >
            Dashboard
          </button>

          {navItems.map((item) => (
            <button key={item} type="button" className="dashstack-menu-item is-muted">
              {item}
            </button>
          ))}

          <div className="dashstack-menu-label">Pages</div>
          {pageItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleTabChange(item)}
              className={`dashstack-menu-item ${activeTab === item ? 'is-active' : 'is-muted'}`}
            >
              {item}
            </button>
          ))}

          <div className="dashstack-menu-footer">
            <button type="button" className="dashstack-menu-item is-muted">
              Settings
            </button>
            <button type="button" className="dashstack-menu-item is-muted">
              Logout
            </button>
          </div>
        </nav>
      </aside>

      <main className="dashstack-main-area">
        <header className="dashstack-topbar">
          <div className="dashstack-searchbar">
            <span className="dashstack-search-icon">S</span>
            <input type="text" placeholder="Search" />
          </div>

          <div className="dashstack-topbar-right">
            <div className="dashstack-language">
              <span className="dashstack-flag" />
              <span>English</span>
            </div>
            <div className="dashstack-profile">
              <div className="dashstack-profile-avatar">MR</div>
              <div>
                <p>Moni Roy</p>
                <small>Admin</small>
              </div>
            </div>
          </div>
        </header>

        <section className="dashstack-scroll-area">
          <div className="dashstack-page-head">
            <h2>{pageTitle}</h2>
          </div>
          {isDashboard ? <DashboardContent stats={stats} /> : <PlaceholderPage />}
        </section>
      </main>
    </div>
  )
}

export default DashStackOne
