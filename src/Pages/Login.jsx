import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem('user'))

    if (!savedUser || savedUser.email !== form.email || savedUser.password !== form.password) {
      setError('Invalid email or password')
      return
    }

    login(savedUser)       // save to context
    navigate('/dashboard') // go to dashboard
  }

  return (
    <div className='form-page'>
      <h2>Login</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="email"    placeholder="Email"    onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login