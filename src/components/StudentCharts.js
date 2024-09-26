import React from "react";
import { Bar } from "react-chartjs-2";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the scales and components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentCharts = ({ student }) => {
  // Check if the student object is available
  if (!student) {
    return <Typography>No performance data available.</Typography>;
  }

  // Create chart data objects
  const cgpaData = {
    labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
    datasets: [
      {
        label: "CGPA",
        data: student.cgpa,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const attendanceData = {
    labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
    datasets: [
      {
        label: "Attendance",
        data: student.attendance,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const feesData = {
    labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
    datasets: [
      {
        label: "Fees Paid",
        data: student.feesPaid,
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const codingPlatformData = {
    labels: Object.keys(student.codingPlatformRatings),
    datasets: [
      {
        label: "Coding Platform Ratings",
        data: Object.values(student.codingPlatformRatings),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const activitiesData = {
    labels: Object.keys(student.extracurricularActivities),
    datasets: [
      {
        label: "Participation",
        data: Object.values(student.extracurricularActivities),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const softSkillsData = {
    labels: student.softSkills.map((skill) => skill.skill),
    datasets: [
      {
        label: "Soft Skills Ratings",
        data: student.softSkills.map((skill) => skill.rating),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Typography variant="h3" gutterBottom align="center">
        Performance Metrics Charts
      </Typography>

      {/* Grid container for cards */}
      <Grid container spacing={4} justifyContent="center">
        {/* CGPA Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ minHeight: "450px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                CGPA Over Semesters
              </Typography>
              <Bar
                data={cgpaData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: "CGPA Progress",
                      font: { size: 20 },
                    },
                  },
                }}
                height={300}
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Attendance Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ minHeight: "450px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Attendance Over Semesters
              </Typography>
              <Bar
                data={attendanceData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: "Attendance Progress",
                      font: { size: 20 },
                    },
                  },
                }}
                height={300}
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Fees Paid Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ minHeight: "450px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Fees Paid Over Semesters
              </Typography>
              <Bar
                data={feesData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: "Fees Paid Progress",
                      font: { size: 20 },
                    },
                  },
                }}
                height={300}
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Coding Platform Ratings Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ minHeight: "450px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Coding Platform Ratings
              </Typography>
              <Bar
                data={codingPlatformData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: "Ratings on Coding Platforms",
                      font: { size: 20 },
                    },
                  },
                }}
                height={300}
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Extracurricular Activities Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ minHeight: "450px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Extracurricular Activities Participation
              </Typography>
              <Bar
                data={activitiesData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: "Activities Participation",
                      font: { size: 20 },
                    },
                  },
                }}
                height={300}
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Soft Skills Ratings Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ minHeight: "450px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Soft Skills Ratings
              </Typography>
              <Bar
                data={softSkillsData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: "Soft Skills Ratings",
                      font: { size: 20 },
                    },
                  },
                }}
                height={300}
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentCharts;
