import React, { useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

    if (editIndex !== null) {
      // Edit existing student
      const updatedStudents = [...students];
      updatedStudents[editIndex] = name;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      // Add new student
      setStudents([...students, name]);
    }
    setName('');
  };

  const handleEditStudent = (index) => {
    setName(students[index]);
    setEditIndex(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>Student Management</h2>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">{editIndex !== null ? 'Update Student' : 'Add Student'}</button>
      </form>
      <h3>Student List</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => handleEditStudent(index)}>Edit</button>
            <button onClick={() => handleDeleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;