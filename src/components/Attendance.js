import React, { useState } from 'react';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', present: false },
    { id: 2, name: 'Jane Smith', present: false },
  ]);

  const handleAttendanceChange = (id) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  const markAttendance = () => {
    // Logic to save attendance
    console.log("Attendance marked:", students);
  };

  return (
    <div>
      <h2>Attendance</h2>
      <button onClick={markAttendance}>Mark Attendance</button>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <label>
              <input 
                type ="checkbox" 
                checked={student.present} 
                onChange={() => handleAttendanceChange(student.id)} 
              />
              {student.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;