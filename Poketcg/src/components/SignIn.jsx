import '/src/App.css'
import { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    console.log('Login attempt', { email, password })
    alert('Login is not wired yet. This is a placeholder.')
  }

  return (
    <div className="form-wrapper" style={{ left: "50%", alignSelf:  "center", transform: "translateX(-50%)", gap: "16px" }}>
      <div className="card" role="form" aria-label="Sign in">
        <div className="field">
          <div style={{ color: 'var(--text, white)', fontSize: '16px', alignSelf: 'flex-start' }}>Email</div>
          <input
            className="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <div style={{ color: 'var(--text, white)', fontSize: '16px', alignSelf: 'flex-start' }}>Password</div>
          <input
            className="Pass"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleLogin}>
            Sign In
          </button>
        </div>

        <div style={{ width: '100%', textAlign: 'left', color: 'white', fontSize: '16px', textDecoration: 'underline' }}>
          Forgot password?
        </div>
      </div>

      <div className="error" style={{ width: '680px', color: 'white', fontSize: '16px' }}>
        Error
      </div>
    </div>
  )
}

export default SignIn
