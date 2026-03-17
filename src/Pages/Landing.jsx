import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className='landing'>
      <h1>Welcome to Student Hub 🎓</h1>
      <p>Manage your students easily and efficiently.</p>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  )
}

export default Landing