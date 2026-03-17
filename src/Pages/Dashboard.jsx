import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='dashboard'>
      <h1>Hi {user ? user.name : 'Guest'} 👋</h1>
      <p>Welcome back to Student Hub!</p>
      <button onClick={() => navigate('/students')}>View Students</button>
      <button onClick={() => navigate('/addstudent')}>Add Student</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard