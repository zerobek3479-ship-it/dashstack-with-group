function DashStackTwentySix({
  formValues,
  rememberPassword,
  onFieldChange,
  onRememberChange,
  onForgotPassword,
  onCreateAccount,
  onSignIn,
}) {
  return (
    <section className="dashstack-auth-screen">
      <div className="dashstack-auth-card">
        <h3>Login to Account</h3>
        <p>Please enter your email and password to continue</p>

        <form className="dashstack-auth-form">
          <label htmlFor="login-email">Email address:</label>
          <input
            id="login-email"
            type="email"
            placeholder="esteban.schiller@gmail.com"
            value={formValues.email}
            onChange={(event) => onFieldChange('email', event.target.value)}
          />

          <div className="dashstack-auth-password-row">
            <label htmlFor="login-password">Password</label>
            <button type="button" onClick={onForgotPassword}>
              Forgot Password?
            </button>
          </div>
          <input
            id="login-password"
            type="password"
            placeholder="........"
            value={formValues.password}
            onChange={(event) => onFieldChange('password', event.target.value)}
          />

          <label className="dashstack-auth-check">
            <input type="checkbox" checked={rememberPassword} onChange={(event) => onRememberChange(event.target.checked)} />
            <span>Remember Password</span>
          </label>

          <button type="button" className="dashstack-auth-submit" onClick={onSignIn}>
            Sign In
          </button>
        </form>

        <div className="dashstack-auth-footer">
          Don't have an account?{' '}
          <button type="button" onClick={onCreateAccount}>
            Create Account
          </button>
        </div>
      </div>
    </section>
  )
}

export default DashStackTwentySix
