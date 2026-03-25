import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './DashStackOne.css'
import CustomersRingChart from './theme/CustomersRingChart'
import RevenueChart from './theme/RevenueChart'
import SalesAnalyticsChart from './theme/SalesAnalyticsChart'
import SalesDetailsChart from './theme/SalesDetailsChart'
import { dashstackPages, dashstackSidebarItems } from '../dashstackPages'
import DashStackTwentySix from './DashStackTwentySix'
import DashStackTwentySeven from './DashStackTwentySeven'
import DashStackTwentyNine from './DashStackTwentyNine'

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

function DashStackOne({ dashboardData }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { stats = [] } = dashboardData ?? {}
  const activePath = location.pathname
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [introStep, setIntroStep] = useState('sign-in')
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [signUpForm, setSignUpForm] = useState({ email: '', username: '', password: '' })
  const [rememberPassword, setRememberPassword] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const currentItem = dashstackSidebarItems.find((item) => item.path === activePath)
  const pageTitle = currentItem?.label ?? 'Dashboard'
  const currentPage = dashstackPages.find((page) => page.path === activePath)
  const ActivePageComponent = currentPage?.component ?? null

  useEffect(() => {
    const hasVisited = window.localStorage.getItem('dashstack-onboarding-complete')

    if (!hasVisited) {
      setShowOnboarding(true)
      setIntroStep('sign-in')
    }
  }, [])

  const handleTabChange = (path) => {
    navigate(path)
  }

  const updateLoginField = (field, value) => {
    setLoginForm((current) => ({ ...current, [field]: value }))
  }

  const updateSignUpField = (field, value) => {
    setSignUpForm((current) => ({ ...current, [field]: value }))
  }

  const finishOnboarding = () => {
    window.localStorage.setItem('dashstack-onboarding-complete', 'true')
    setShowOnboarding(false)
    navigate('/')
  }

  const handleSignIn = () => {
    window.prompt('Sign In', `Email: ${loginForm.email || 'guest@example.com'}`)
    finishOnboarding()
  }

  const handleSignUp = () => {
    window.prompt('Sign Up', `Username: ${signUpForm.username || 'new-user'}`)
    finishOnboarding()
  }

  const renderMainContent = () => {
    if (showOnboarding) {
      if (introStep === 'sign-up') {
        return (
          <DashStackTwentySeven
            formValues={signUpForm}
            acceptedTerms={acceptedTerms}
            onFieldChange={updateSignUpField}
            onAcceptedTermsChange={setAcceptedTerms}
            onGoToSignIn={() => setIntroStep('sign-in')}
            onSignUp={handleSignUp}
          />
        )
      }

      if (introStep === 'not-found') {
        return <DashStackTwentyNine onBackToDashboard={() => setIntroStep('sign-up')} />
      }

      return (
        <DashStackTwentySix
          formValues={loginForm}
          rememberPassword={rememberPassword}
          onFieldChange={updateLoginField}
          onRememberChange={setRememberPassword}
          onForgotPassword={() => setIntroStep('not-found')}
          onCreateAccount={() => setIntroStep('sign-up')}
          onSignIn={handleSignIn}
        />
      )
    }

    if (activePath === '/') {
      return <DashboardContent stats={stats} />
    }

    if (ActivePageComponent) {
      return <ActivePageComponent dashboardData={dashboardData} />
    }

    return <DashboardContent stats={stats} />
  }

  return (
    <div className="dashstack-shell">
      {!showOnboarding ? (
        <aside className="dashstack-sidebar">
          <div className="dashstack-brand-row">
            <div className="dashstack-logo-mark">D</div>
            <h1>DashStack</h1>
          </div>

          <nav className="dashstack-menu">
            <button
              type="button"
              onClick={() => handleTabChange('/')}
              className={`dashstack-menu-item ${activePath === '/' ? 'is-active' : ''}`}
            >
              Dashboard
            </button>
            <div className="dashstack-menu-label">All DashStack Pages</div>
            {dashstackSidebarItems.slice(1).map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleTabChange(item.path)}
                className={`dashstack-menu-item dashstack-menu-item-small ${activePath === item.path ? 'is-active' : 'is-muted'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      ) : null}

      <main className="dashstack-main-area">
        {!showOnboarding ? (
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
        ) : null}

        <section className="dashstack-scroll-area">
          {!showOnboarding ? (
            <div className="dashstack-page-head">
              <h2>{pageTitle}</h2>
            </div>
          ) : null}
          {renderMainContent()}
        </section>
      </main>
    </div>
  )
}

export default DashStackOne
