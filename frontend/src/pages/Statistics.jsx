import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

function Statistics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/statistics/") // backend stats endpoint
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Workshop Statistics</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Coordinator</th>
            <th>Institute</th>
            <th>Instructor</th>
            <th>Workshop</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((s, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{s.coordinator_name}</td>
              <td>{s.institute_name}</td>
              <td>{s.instructor_name}</td>
              <td>{s.workshop_name}</td>
              <td>{s.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Statistics;
