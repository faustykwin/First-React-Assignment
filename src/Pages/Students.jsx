import { useState, useEffect } from 'react'
import StudentCard from '../Components/StudentsCard'

const Students = () => {
  const [students, setStudents] = useState([])
  const [search, setSearch]     = useState('')
  const [loading, setLoading]   = useState(true)

  // useEffect fetches data when page loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setStudents(data)
        setLoading(false)
      })
  }, [])

  // filter students by search
  const filtered = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='students-page'>
      <h2>Students List</h2>
      <input
        placeholder='Search by name...'
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading students...</p>
      ) : (
        <div className='students-grid'>
          {filtered.map(student => (
            <StudentCard
              key={student.id}
              name={student.name}
              email={student.email}
              company={student.company.name}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Students