import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Ensure you import this if you plan to use it
import studentsData from "../data/mockdata";
import StudentCharts from "./StudentCharts"; // Import StudentCharts component
import Navbar from "./Navbar"; // Import the Navbar

const Dashboard = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const navigate = useNavigate(); // Use navigate for redirecting if necessary

  // Handle fetching student data based on ID
  const handleFetchStudent = () => {
    const foundStudent = studentsData.find((s) => s.id === studentId);
    setStudent(foundStudent);
  };

  return (
    <>
      <Navbar isLoggedIn={true} /> {/* Render Navbar */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Student Dashboard
        </Typography>

        {/* Input field for Student ID */}
        <TextField
          label="Enter Student ID"
          fullWidth
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleFetchStudent}
          sx={{ mt: 2 }}
        >
          Fetch Student Data
        </Button>
        <p>Ex : 1001</p>

        {/* Student Details */}
        {student && (
          <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Student Details
            </Typography>
            <Typography>Name: {student.name}</Typography>
            <Typography>Phone Number: {student.phoneNumber}</Typography>
            <Typography>Branch: {student.branch}</Typography>
            <Typography>Attendance: {student.attendance}%</Typography>

            {/* Render StudentCharts component */}
            <StudentCharts student={student} />
          </Paper>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
