import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import Landing from './Pages/Landing'
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Students from './Pages/Students'
import AddStudent from './Pages/AddStudent'
import './App.css'


function App() {
  return (
    <AuthProvider>
      <Routes>
       
        <Route path="/"            element={<Landing />} />
        <Route path="/signup"      element={<SignUp />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/dashboard"   element={<Dashboard />} />
        <Route path="/students"    element={<Students />} />
        <Route path="/addstudent"  element={<AddStudent />} />
      </Routes>
    </AuthProvider>
  )
}

export default App