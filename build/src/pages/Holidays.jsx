import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';

const defaultHolidays = [
  { id: 1, date: '2024-01-01', name: 'New Year' },
  { id: 2, date: '2024-05-01', name: 'May Day' },
  { id: 3, date: '2024-03-26', name: 'Independence Day' },
  { id: 4, date: '2024-12-16', name: 'Victory Day' },
];

const Holidays = () => {
  // State for holidays data
  const [holidays, setHolidays] = useState([...defaultHolidays]);
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for new holiday
  const [newHoliday, setNewHoliday] = useState({ date: '', name: '' });

  // Handle delete holiday
  const handleDeleteHoliday = (id) => {
    // Delete logic here
    const updatedHolidays = holidays.filter(holiday => holiday.id !== id);
    setHolidays(updatedHolidays);
  };

  // Handle input change for new holiday
  const handleNewHolidayChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle add new holiday
  const handleAddHoliday = () => {
    // Add logic here
    const newId = Math.max(...holidays.map(holiday => holiday.id)) + 1;
    const updatedHolidays = [...holidays, { ...newHoliday, id: newId }];
    setHolidays(updatedHolidays);
    setShowModal(false);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h1 className="mt-3 mb-4 text-center">Holidays</h1>
          <Button variant="success" onClick={() => setShowModal(true)}>Add Holiday</Button>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Holiday Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday) => (
                <tr key={holiday.id}>
                  <td>{holiday.id}</td>
                  <td>{holiday.date}</td>
                  <td>{holiday.name}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDeleteHoliday(holiday.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* Add Holiday Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                type="date" 
                name="date" 
                value={newHoliday.date} 
                onChange={handleNewHolidayChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Holiday Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={newHoliday.name} 
                onChange={handleNewHolidayChange} 
                required 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddHoliday}>Add Holiday</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Holidays;
