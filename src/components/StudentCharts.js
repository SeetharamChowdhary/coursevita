// src/components/StudentCharts.js
import React from "react";
import { Bar } from "react-chartjs-2";
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
  const projectData = {
    labels: [`Project 1`, `Project 2`, `Project 3`],
    datasets: [
      {
        label: "Project Scores",
        data: student.performanceMetrics.projects,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const quizData = {
    labels: [`Quiz 1`, `Quiz 2`, `Quiz 3`],
    datasets: [
      {
        label: "Quiz Scores",
        data: student.performanceMetrics.quizzes,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <h2>Performance Metrics Charts</h2>
        <Bar
          data={projectData}
          options={{ maintainAspectRatio: false }}
          height={300}
        />
        <Bar
          data={quizData}
          options={{ maintainAspectRatio: false }}
          height={300}
        />
      </div>
    </>
  );
};

export default StudentCharts;
