import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';

const AttendanceAdmin = () => {
  // Dummy data for employee attendance
  const dummyData = [
    { name: 'Tapu', attendance: [true, true, false, false, true, false, true, true, true, false, false, false, true, true, false, true, false, true, true, false, true, true, true, false, false, false, true, true, false, true] },
    { name: 'Emon', attendance: [false, true, true, false, false, false, true, true, false, true, true, true, false, false, false, true, true, false, true, false, true, false, false, true, true, true, false, true, true, false] },
    { name: 'Riaz', attendance: [true, false, true, false, false, true, false, true, true, false, false, true, true, false, false, true, true, false, false, true, false, true, false, true, true, true, false, true, false, true] },
    { name: 'Hakim', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
    { name: 'Sohel', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
    { name: 'Rahim', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
    { name: 'Karim', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
    { name: 'Dana', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
    { name: 'Suhana', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
    { name: 'Fatiha', attendance: [false, true, false, true, true, false, false, false, true, true, false, true, false, true, false, true, false, true, false, true, true, false, false, false, true, false, true, false, true, true] },
  ];

  // State to store the attendance data for each employee
  const [attendanceData, setAttendanceData] = useState(dummyData);

  // Function to toggle attendance status
  const toggleAttendance = (employeeIndex, dayIndex) => {
    const updatedAttendanceData = [...attendanceData];
    updatedAttendanceData[employeeIndex].attendance[dayIndex] = !updatedAttendanceData[employeeIndex].attendance[dayIndex];
    setAttendanceData(updatedAttendanceData);
  };

  // Function to mark attendance automatically for an employee
  const markAttendanceAutomatically = (employeeIndex) => {
    const updatedAttendanceData = [...attendanceData];
    // Assuming the punch machine provides the attendance automatically
    // Here, we toggle the attendance status for each day randomly
    updatedAttendanceData[employeeIndex].attendance = updatedAttendanceData[employeeIndex].attendance.map(() => Math.random() < 0.5);
    setAttendanceData(updatedAttendanceData);
  };

  return (
    <div>
      <h2>Attendance Admin</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Employee</th>
            {[...Array(31)].map((_, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((employee, employeeIndex) => (
            <tr key={employeeIndex}>
              <td>{employee.name}</td>
              {employee.attendance.map((dayAttendance, dayIndex) => (
                <td key={dayIndex} onClick={() => toggleAttendance(employeeIndex, dayIndex)}>
                  {dayAttendance ? (
                    <AiOutlineCheckCircle style={{ color: 'green', fontSize: '1.5rem' }} />
                  ) : (
                    <AiOutlineCloseCircle style={{ color: 'red', fontSize: '1.5rem' }} />
                  )}
                </td>
              ))}
              <td>
                <Button onClick={() => markAttendanceAutomatically(employeeIndex)} variant="primary">Mark Attendance</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AttendanceAdmin;
