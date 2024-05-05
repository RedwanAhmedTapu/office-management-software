import React, { useState } from 'react';
import { Table, Pagination, Form, Container, Row, Col } from 'react-bootstrap';
import { records } from "../utils/data";

const EmployeesTable = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Initial items per page

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  if (!records) {
    return <div>No employees data available.</div>;
  }

  // Pagination logic
  const totalPages = Math.ceil(records.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages)); // Clamp page number within range
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const renderPaginationItems = () => {
    const items = [];
    const visiblePages = 3; // Number of visible pages before and after the current page
    const ellipsis = '...';

    // Logic to determine visible page numbers
    let startPage = Math.max(1, currentPage - visiblePages);
    let endPage = Math.min(totalPages, currentPage + visiblePages);

    // If there are more pages than the visible range, display ellipsis
    if (startPage > 1) {
      items.push(
        <Pagination.Item key="startEllipsis" disabled>
          {ellipsis}
        </Pagination.Item>
      );
    }

    // Render visible page numbers
    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === currentPage} 
          onClick={() => handleClick(number)}
          style={{ cursor: 'pointer' }} // Add cursor pointer style
        >
          {number}
        </Pagination.Item>
      );
    }

    // If there are more pages than the visible range, display ellipsis
    if (endPage < totalPages) {
      items.push(
        <Pagination.Item key="endEllipsis" disabled>
          {ellipsis}
        </Pagination.Item>
      );
    }

    return items;
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter records based on search query
  const filteredRecords = records.filter(record => {
    return record.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Container fluid >
      <Row className="justify-content-center ">
        <Col  md={12}>
          <h1 className="mt-3 mb-4 text-center">Employees</h1>
          <Form.Group controlId="search">
            <Form.Control 
              type="text" 
              placeholder="Search by name..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </Form.Group>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Company</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.slice(startIndex, endIndex).map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.age}</td>
                  <td>{record.company}</td>
                  <td>{record.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <div className="d-flex justify-content-between align-items-center">
            <div className='d-flex '>
              <span>Display </span>
              <Form.Select
                onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
                value={itemsPerPage}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="0">All</option>
              </Form.Select>
            </div>
            <div>
              <span>Page {currentPage} of {totalPages}</span>
            </div>
            <div className="pagination-container-small bg-red-500" style={{ overflowX: 'auto' }}>
              <Pagination size='sm'>
                <Pagination.First onClick={() => handleClick(1)} />
                <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
                <Pagination.Last onClick={() => handleClick(totalPages)} />
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeesTable;
