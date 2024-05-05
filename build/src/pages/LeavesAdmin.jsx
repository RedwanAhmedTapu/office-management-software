import React, { useState } from 'react';
import { Table, Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const LeavesAdmin = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [leaveStatus, setLeaveStatus] = useState('');
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editLeave, setEditLeave] = useState(null);

  // Dummy leave records
  const [leaveRecords, setLeaveRecords] = useState([
    { id: 1, employeeName: 'John Doe', leaveType: 'Sick Leave', from: '2024-05-01', to: '2024-05-03', numOfDays: 3, reason: 'Fever', status: 'Approved' },
    { id: 2, employeeName: 'Alice Smith', leaveType: 'Vacation', from: '2024-06-15', to: '2024-06-20', numOfDays: 6, reason: 'Holiday trip', status: 'Pending' },
    { id: 3, employeeName: 'Bob Johnson', leaveType: 'Personal Leave', from: '2024-07-10', to: '2024-07-12', numOfDays: 3, reason: 'Family event', status: 'Rejected' },
    { id: 4, employeeName: 'Emma Brown', leaveType: 'Maternity Leave', from: '2024-08-01', to: '2024-10-01', numOfDays: 62, reason: 'Maternity leave', status: 'Approved' },
    { id: 5, employeeName: 'Michael Clark', leaveType: 'Study Leave', from: '2024-09-15', to: '2024-09-20', numOfDays: 6, reason: 'Exam preparation', status: 'Pending' },
    // Add more leave records as needed
  ]);

  // Filter leave records based on search criteria
  const filteredLeaveRecords = leaveRecords.filter(leave => {
    return (
      leave.leaveType.toLowerCase().includes(leaveType.toLowerCase()) &&
      leave.from.includes(fromDate) &&
      leave.to.includes(toDate) &&
      leave.status.toLowerCase().includes(leaveStatus.toLowerCase())
    );
  });

  // Handle search button click
  const handleSearch = () => {
    // Perform search logic here
    console.log('Search Criteria:', {
      leaveType,
      fromDate,
      toDate,
      leaveStatus,
    });
  };

  // Handle edit button click
  const handleEdit = (leave) => {
    setSelectedLeave(leave);
    setEditLeave({ ...leave });
    setShowEditModal(true);
  };

  // Handle save changes button click
  const handleSaveChanges = () => {
    // Save changes logic here
    setShowEditModal(false);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    setLeaveRecords(leaveRecords.filter(leave => leave.id !== id));
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="mt-3 mb-4 text-center">Leaves (Admin)</h1>
          <Form className="mb-3">
            <Row>
              <Col>
                <Form.Group controlId="leaveType">
                  <Form.Label>Leave Type</Form.Label>
                  <Form.Control type="text" value={leaveType} onChange={(e) => setLeaveType(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="fromDate">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="toDate">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="leaveStatus">
                  <Form.Label>Leave Status</Form.Label>
                  <Form.Control type="text" value={leaveStatus} onChange={(e) => setLeaveStatus(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" onClick={handleSearch}>Search</Button>
          </Form>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>No Of Days</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaveRecords.map(leave => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{leave.employeeName}</td>
                  <td>{leave.leaveType}</td>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.numOfDays}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>
                    <Button variant="info" size="sm" className="me-1" onClick={() => handleEdit(leave)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(leave.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Leave Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editLeaveType">
              <Form.Label>Leave Type</Form.Label>
              <Form.Control type="text" value={editLeave?.leaveType || ''} onChange={(e) => setEditLeave({ ...editLeave, leaveType: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="editFromDate">
              <Form.Label>From</Form.Label>
              <Form.Control type="date" value={editLeave?.from || ''} onChange={(e) => setEditLeave({ ...editLeave, from: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="editToDate">
              <Form.Label>To</Form.Label>
              <Form.Control type="date" value={editLeave?.to || ''} onChange={(e) => setEditLeave({ ...editLeave, to: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="editNoOfDays">
              <Form.Label>No Of Days</Form.Label>
              <Form.Control type="number" value={editLeave?.numOfDays || ''} onChange={(e) => setEditLeave({ ...editLeave, numOfDays: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="editReason">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows={3} value={editLeave?.reason || ''} onChange={(e) => setEditLeave({ ...editLeave, reason: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="editStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" value={editLeave?.status || ''} onChange={(e) => setEditLeave({ ...editLeave, status: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LeavesAdmin;
