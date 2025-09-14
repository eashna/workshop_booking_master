import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";

function WorkshopStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/statistics/")  
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h2 className="mb-3">Workshop Statistics</h2>
      {stats ? (
        <Card className="p-3">
          <p><strong>Total Workshops:</strong> {stats.total_workshops}</p>
          <p><strong>Total Students:</strong> {stats.total_students}</p>
        </Card>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default WorkshopStats;
