const studentsData = [
  {
    id: "1001",
    name: "John Doe",
    phoneNumber: "1234567890",
    branch: "Computer Science",
    attendance: 85,
    cgpa: [8.5, 8.0, 7.9],
    softSkills: ["Teamwork", "Communication"],
    remarks: "Excellent performance in projects.",
    academicHistory: {
      grades: [80, 85, 90],
      attendance: [90, 85, 88],
    },
    extracurricularActivities: [
      { name: "Basketball", participation: 2 },
      { name: "Debate Club", participation: 1 },
    ],
    performanceMetrics: {
      projectsCompleted: 5,
      competitionsParticipated: 3,
      skillAssessments: [4, 5, 3],
    },
  },
  {
    id: "1002",
    name: "Jane Smith",
    phoneNumber: "9876543210",
    branch: "Information Technology",
    attendance: 90,
    cgpa: [9.0, 8.8, 8.7],
    softSkills: ["Leadership", "Critical Thinking"],
    remarks: "Great problem-solving skills.",
    academicHistory: {
      grades: [90, 92, 95],
      attendance: [95, 92, 93],
    },
    extracurricularActivities: [
      { name: "Science Club", participation: 3 },
      { name: "Football", participation: 2 },
    ],
    performanceMetrics: {
      projectsCompleted: 8,
      competitionsParticipated: 4,
      skillAssessments: [5, 5, 4],
    },
  },
  // Add more student objects as needed
];

export default studentsData;
