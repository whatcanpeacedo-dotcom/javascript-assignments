let studentName = "Itunuoluwa";
let testScore = 17;
let assignmentScore = 19;
let examScore = 55;
let finalScore = testScore + assignmentScore + examScore;

function calculateGrade() {
    if (finalScore >= 70) {
        console.log("Grade: A");
    } else if (finalScore >= 60) {
        console.log("Grade: B");
    } else if (finalScore >= 50) {
        console.log("Grade: C");
    } else if (finalScore >= 45) {
        console.log("Grade: D");
    } else if (finalScore >= 40) {
        console.log("Grade: E");
    } else {
        console.log("Grade: F");
    }
}

console.log("Student: " + studentName);
console.log("Score: " + finalScore);

calculateGrade();

if (finalScore >= 40) {
    console.log("Status: Passed");
} else {
    console.log("Status: Failed");
}
/* Bonus Challenge */

if (finalScore >= 80) {
    console.log("Feedback: Excellent work");
} else if (finalScore >= 50) {
    console.log("Feedback: Good effort, but you can do better.");
} else {
    console.log("Feedback: You need to work harder.");
}