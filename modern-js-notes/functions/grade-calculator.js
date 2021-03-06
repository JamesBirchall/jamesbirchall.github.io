// grade-calculator.js
// Birchall 2019

// take in students score and total possible score e.g. (15, 20) 15 points out of 20 = 75%
// print a message about the grade as a letter - case statement
// 90-100 A, 80-89, B, 70-79 C, 60-69 D, 0-59 F

const calculateGrade = function (percentageScore) {
  let grade = "F"

  if (percentageScore > 89) {
    grade = "A"
  } else if (percentageScore > 79) {
    grade = "B"
  } else if (percentageScore > 69) {
    grade = "C"
  } else if (percentageScore > 59) {
    grade = "D"
  }

  return grade
}

const calculateScore = function (score, total) {
  if (typeof score === "number" || typeof total === "number") {
    return (100 / total) * score
  } else {
    throw Error("One of the types was not a number")
  }
}

// const grades = [13, "e", 5, 15, 19, 20, 16] // should fail
const grades = [13, 6, 5, 15, 19, 20, 16] // should not fail
// const totalScore = "s"
const totalScore = 20

try {
  for (let i = 0; i < grades.length; i++) {
    const percentageScore = calculateScore(grades[i], totalScore)
    console.log(
      `Student ${i + 1} got ${
        grades[i]
      } which is ${percentageScore}% and grade: ${calculateGrade(
        percentageScore
      )}`
    )
  }
} catch (error) {
  console.log("Type error: " + error.message)
}
