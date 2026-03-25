function DashStackTwentySeven({
  formValues,
  acceptedTerms,
  onFieldChange,
  onAcceptedTermsChange,
  onGoToSignIn,
  onSignUp,
}) {
  return (
    <section className="dashstack-auth-screen">
      <div className="dashstack-auth-card">
        <h3>Create an Account</h3>
        <p>Create a account to continue</p>

        <form className="dashstack-auth-form">
          <label htmlFor="register-email">Email address:</label>
          <input
            id="register-email"
            type="email"
            placeholder="esteban.schiller@gmail.com"
            value={formValues.email}
            onChange={(event) => onFieldChange('email', event.target.value)}
          />

          <label htmlFor="register-username">Username</label>
          <input
            id="register-username"
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={(event) => onFieldChange('username', event.target.value)}
          />

          <div className="dashstack-auth-password-row">
            <label htmlFor="register-password">Password</label>
            <button type="button" onClick={onGoToSignIn}>
              Login
            </button>
          </div>
          <input
            id="register-password"
            type="password"
            placeholder="........"
            value={formValues.password}
            onChange={(event) => onFieldChange('password', event.target.value)}
          />

          <label className="dashstack-auth-check">
            <input type="checkbox" checked={acceptedTerms} onChange={(event) => onAcceptedTermsChange(event.target.checked)} />
            <span>I accept terms and conditions</span>
          </label>

          <button type="button" className="dashstack-auth-submit" onClick={onSignUp}>
            Sign Up
          </button>
        </form>

        <div className="dashstack-auth-footer">
          Already have an account?{' '}
          <button type="button" onClick={onGoToSignIn}>
            Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default DashStackTwentySeven
