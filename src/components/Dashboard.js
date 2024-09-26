// src/components/Dashboard.js
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import studentsData from "../data/mockdata";
import { Bar } from "react-chartjs-2";
import Navbar from "./Navbar"; // Import the Navbar

const Dashboard = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const navigate = useNavigate(); // Use navigate for redirecting

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

            {/* CGPA Chart */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              CGPA Over Semesters
            </Typography>
            <Bar
              data={{
                labels: ["Semester 1", "Semester 2", "Semester 3"],
                datasets: [
                  {
                    label: "CGPA",
                    data: student.cgpa,
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                  },
                  title: {
                    display: true,
                    text: "CGPA Progress",
                  },
                },
              }}
            />

            {/* Soft Skills */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Soft Skills
            </Typography>
            <Typography>{student.softSkills.join(", ")}</Typography>
            <Typography>Remarks: {student.remarks}</Typography>
          </Paper>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
