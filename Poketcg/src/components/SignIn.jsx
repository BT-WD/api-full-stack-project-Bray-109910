import '/src/App.css'
import { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')

      // save token (or whatever the backend returns)
      localStorage.setItem('token', data.token)
      // optional: save user info
      localStorage.setItem('user', JSON.stringify(data.user))

      // redirect or update your app state
      window.location.href = '/' // or navigate with your router
    } catch (err) {
      console.error('Login error', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-wrapper" >
      <div className="card" role="form" aria-label="Sign in">
        <div className="field">
          <div className="field-label">Email</div>
          <input
            className="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <div className="field-label">Password</div>
          <input
            className="Pass"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleLogin} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => alert('Sign-up is coming soon!')}
            disabled={loading}
          >
            Sign Up
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="forgot-password">
          Forgot password?
        </div>
      </div>
    </div>
  )
}
export default SignIn

