const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator, students) {
  // Start coding here
  return accumulator + students.score / 4
}

let result = students.reduce(getAverageStudentScore, 0); // Output: 87.5

console.log(result)
