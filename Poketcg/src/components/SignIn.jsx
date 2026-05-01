import '/src/App.css'
import { useState } from 'react'
import mongoose from 'mongoose'
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

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
          <button className="btn-primary" onClick={handleLogin} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

        {error && <div style={{ color: 'salmon' }}>{error}</div>}

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

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } // hashed password
}, { timestamps: true })

export default mongoose.model('User', userSchema)

const router = express.Router()

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' })

    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ message: 'Invalid credentials' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'dev-secret', {
      expiresIn: '7d'
    })

    res.json({ token, user: { id: user._id, email: user.email } })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
