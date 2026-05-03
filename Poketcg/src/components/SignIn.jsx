import '/src/App.css'
import { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

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

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      window.location.href = '/'
    } catch (err) {
      console.error('Login error', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Signup failed')

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      window.location.href = '/'
    } catch (err) {
      console.error('Signup error', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsSignUp(!isSignUp)
    setError('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="form-wrapper">
      <div className="card" role="form" aria-label={isSignUp ? 'Sign up' : 'Sign in'}>
        <h2 style={{ color: '#f3f3f3' }}>{isSignUp ? 'Create Account' : 'Sign In'}</h2>

        <div className="field">
          <div className="field-label">Email</div>
          <input
            className="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        {isSignUp && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              className="Pass"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
            />
          </div>
        )}

        <div className="actions">
          <button
            className="btn-primary"
            onClick={isSignUp ? handleSignUp : handleLogin}
            disabled={loading}
          >
            {loading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Sign Up' : 'Log In')}
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="toggle-mode">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          {' '}
          <button
            type="button"
            className="link-button"
            onClick={toggleMode}
            disabled={loading}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        {!isSignUp && (
          <div className="forgot-password">
            Forgot password?
          </div>
        )}
      </div>
    </div>
  )
}

export default SignIn

