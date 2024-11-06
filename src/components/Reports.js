import React, { useState } from 'react';

const Reports = () => {
  // Sample attendance data
  const [attendanceData, setAttendanceData] = useState([
    { date: '2023-10-01', student: 'John Doe', status: 'Present' },
    { date: '2023-10-01', student: 'Jane Smith', status: 'Absent' },
    { date: '2023-10-02', student: 'John Doe', status: 'Present' },
    { date: '2023-10-02', student: 'Jane Smith', status: 'Present' },
    { date: '2023-10-03', student: 'John Doe', status: 'Absent' },
    { date: '2023-10-03', student: 'Jane Smith', status: 'Present' },
  ]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleGenerateReport = () => {
    const filtered = attendanceData.filter(record => {
      const recordDate = new Date(record.date);
      return recordDate >= new Date(startDate) && recordDate <= new Date(endDate);
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <h2>Attendance Reports</h2>
      <div>
        <label>
          Start Date:
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
        </label>
        <label>
          End Date:
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
          />
        </label>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </div>
      {filteredData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Student</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.student}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filteredData.length === 0 && (
        <p>No records found for the selected date range.</p>
      )}
    </div>
  );
};

export default Reports;