import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LeaveSettings = () => {
  const [holidays, setHolidays] = useState([
    { id: 1, date: '2024-01-01', name: 'New Year' },
    { id: 2, date: '2024-05-01', name: 'May Day' },
    { id: 3, date: '2024-03-26', name: 'Independence Day' },
    { id: 4, date: '2024-12-16', name: 'Victory Day' },
  ]);

  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Alice Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Emma Brown' },
  ]);

  const handleAddHoliday = () => {
    const newId = holidays.length + 1;
    const newHoliday = { id: newId, date: '', name: '' };
    setHolidays([...holidays, newHoliday]);
  };

  const handleRemoveHoliday = (id) => {
    setHolidays(holidays.filter(holiday => holiday.id !== id));
  };

  const handleAddEmployee = () => {
    const newId = employees.length + 1;
    const newEmployee = { id: newId, name: '' };
    setEmployees([...employees, newEmployee]);
  };

  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Holidays</h2>
          {holidays.map(holiday => (
            <div key={holiday.id}>
              <Form.Control type="date" value={holiday.date} onChange={(e) => holiday.date = e.target.value} />
              <Form.Control type="text" value={holiday.name} onChange={(e) => holiday.name = e.target.value} />
              <Button onClick={() => handleRemoveHoliday(holiday.id)} variant="danger">Remove</Button>
            </div>
          ))}
          <Button onClick={handleAddHoliday}>Add Holiday</Button>
        </Col>
        <Col>
          <h2>Employees</h2>
          {employees.map(employee => (
            <div key={employee.id}>
              <Form.Control type="text" value={employee.name} onChange={(e) => employee.name = e.target.value} />
              <Button onClick={() => handleRemoveEmployee(employee.id)} variant="danger">Remove</Button>
            </div>
          ))}
          <Button onClick={handleAddEmployee}>Add Employee</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LeaveSettings;
