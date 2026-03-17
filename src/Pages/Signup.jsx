import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // basic validation
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required')
      return
    }

    localStorage.setItem('user', JSON.stringify(form))
    navigate('/login')
  }

  return (
    <div className='form-page'>
      <h2>Sign Up</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name"     placeholder="Full Name"  onChange={handleChange} />
        <input name="email"    placeholder="Email"      onChange={handleChange} />
        <input name="password" placeholder="Password"   onChange={handleChange} type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp