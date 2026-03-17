// const AddStudent = () => {
//   return <div>Add Student Page</div>
// }

// export default AddStudentimport { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.company) {
      setError('All fields are required')
      return
    }
    setSuccess('Student added successfully! ✅')
    setError('')
    setForm({ name: '', email: '', company: '' })
  }

  return (
    <div className='form-page'>
      <h2>Add Student</h2>

      {/* shows error message if fields are empty */}
      {error && <p className='error'>{error}</p>}

      {/* shows success message when student is added */}
      {success && <p className='success'>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
          value={form.company}
        />
        <button type="submit">Add Student</button>
        <button onClick={() => navigate('/students')}>Back to Students</button>
      </form>
    </div>
  )
}

export default AddStudent


