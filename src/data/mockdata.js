const studentsData = [
  {
    id: "1001",
    name: "John Doe",
    phoneNumber: "1234567890",
    branch: "Computer Science",
    attendance: [90, 85, 88, 92], // Attendance over semesters
    cgpa: [8.5, 8.0, 8.3, 8.7], // CGPA over semesters
    feesPaid: [50000, 50000, 50000, 50000], // Fees paid over semesters
    softSkills: [
      { skill: "Data Structures", rating: 4 },
      { skill: "Web Development", rating: 5 },
      { skill: "Aptitude", rating: 4 },
    ],
    codingPlatformRatings: {
      CodeChef: 4,
      LeetCode: 5,
      Codeforces: 4,
      HackerRank: 3,
    }, // Ratings on coding platforms
    extracurricularActivities: {
      Games: 4,
      Library: 3,
      eventparticipation: 1,
    },
  },
  {
    id: "1002",
    name: "Jane Smith",
    phoneNumber: "9876543210",
    branch: "Information Technology",
    attendance: [95, 92, 93, 90],
    cgpa: [9.0, 8.8, 8.7, 9.2],
    feesPaid: [50000, 50000, 50000, 50000],
    softSkills: [
      { skill: "Leadership", rating: 5 },
      { skill: "Critical Thinking", rating: 4 },
    ],
    codingPlatformRatings: {
      CodeChef: 5,
      LeetCode: 4,
      Codeforces: 4,
      HackerRank: 5,
    },
    extracurricularActivities: {
      Games: 4,
      Library: 3,
      eventparticipation: 1,
    },
  },
  // Add more student objects as needed
];

export default studentsData;
