const StudentCard = ({ name, email, company }) => {
  return (
    <div className='student-card'>
      <h3>{name}</h3>
      <p>📧 {email}</p>
      <p>🏢 {company}</p>
    </div>
  )
}

export default StudentCard

  