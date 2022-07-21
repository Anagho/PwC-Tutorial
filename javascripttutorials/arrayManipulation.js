// Array Manipulation
// Array of Numbers
const studentScores = [80, 90, 70, 60, 50];

// Array of Strings
const studentsNames = [
  "Oluwafemi",
  "James",
  "Okiroro",
  "Temilehin",
  "Oluwafemi",
];

// Array of Objects
const studentsActivities = [
  {
    id: 1,
    description: "Having the induction session",
    isDone: true,
  },
  {
    id: 2,
    description: "Starting the Javascript, HTML, CSS, React class",
    isDone: false,
  },
  {
    id: 3,
    description: "Starting the C# .NET classes",
    isDone: false,
  },
];

  // Array of Objects
  const customerAccountInfo = [
    {
      id: 1,
      accountNumber: '123456789',
      fullName: "Oluwakemi Ogunjobi",
      address: "26 Obafemi Awolowo road",
      canDebit: true
    },
    {
      id: 2,
      accountNumber: '553456789',
      fullName: "Akinwunmi Samuel",
      address: "26 Old Airportn road",
      canDebit: false
    },
    {
      id: 3,
      accountNumber: '123456744',
      fullName: "Abraham Samuel",
      address: "30 Hamsat Awolowo road",
      canDebit: true
    },
  ];

// Coverting the Array of objects to JSON Format
const studentsActivitiesJSON = JSON.stringify(studentsActivities);

// Accessing the array elements
console.log(studentScores[0]);
console.log(studentScores[3]);
console.log(studentScores[2]);
console.log(studentsActivities[2].description);
console.log(studentsActivities[1].isDone);

// Higher Order Array Functions
// map()

const studentsActivitiesDescription = studentsActivities.map((activity) => activity.description);

const studentsActivitiesId = studentsActivities.map((activity) => activity.id);

console.log(studentsActivitiesDescription);

// Map Customer Activities
// customer Ids
const customerAccountInfoId = customerAccountInfo.map((info) => info.id);

// Customer Account Numbers
const customerAccountInfoAccountNumber = customerAccountInfo.map((info) => info.accountNumber);

// Customer Full Names
const customerAccountInfoFullName = customerAccountInfo.map((info) => info.fullName);

// Customer Addresses
const customerAccountInfoAddress = customerAccountInfo.map((info) => info.address);

// Customer Debit Status
const customerAccountInfoCanDebit = customerAccountInfo.map((info) => info.canDebit);

console.log(customerAccountInfoId);
console.log(customerAccountInfoAccountNumber);
console.log(customerAccountInfoFullName);
console.log(customerAccountInfoAddress);
console.log(customerAccountInfoCanDebit);

// Task 2 - Double Student Scores
const doubleStudentScores = studentScores.map((oldScore, newScore) =>{
 newScore = oldScore * 2
 return `${oldScore} x 2 = ${newScore}`
});
console.log(doubleStudentScores)

// Task 3 - Append the student first name
const pwcStudentScores = studentsNames.map((studentName) => {
  return studentName
});

// Filter()
const studentsActivitiesDone = studentsActivities.filter(
  // Activity that is done
  (activity) => activity.isDone
);

// Student student with ID of 3
const studentsActivities3 = studentsActivities.filter(
  (activity) => activity.id === 3
)