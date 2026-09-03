let students = [
    {
    name: "Ike",
    testScore: 17,
    assignmentScore: 19,
    examScore: 55
},
    {
    name: "Alma",
    testScore: 15,
    assignmentScore: 18,
    examScore: 49
},
    {
    name: "Toks",
    testScore: 14,
    assignmentScore: 15,
    examScore: 24
},

    {
    name: "Sam",
    testScore: 4,
    assignmentScore: 9,
    examScore: 23
},
   
    {
    name: "Jonathan",
    testScore: 15,
    assignmentScore: 12,
    examScore: 40
},
]

let totalScore = 0;
let highestScore = 0;
let lowestScore = Infinity;
let passedStudents = 0;

function calculateResult(name, testScore, assignmentScore, examScore) {
   
    let finalScore = testScore + assignmentScore + examScore;
    
   
    let grade;

    if(finalScore >= 70){
        grade = "A";
    }
    else if (finalScore >= 60){
        grade = "B";
    }
    else if (finalScore >= 50){
        grade = "C";
    }
    else if (finalScore >= 45){
        grade = "D";
    }
    else if(finalScore >= 40){
        grade = "E";
    }
    else{
        grade = "F";
    }


    let status;
    
    if (finalScore >= 40){
        status = "Passed";
        passedStudents++;
    }
    else{
        status = "Failed";
    }
   
    
    totalScore += finalScore;

    if(finalScore > highestScore) {
        highestScore = finalScore;
    }
    
    if (finalScore < lowestScore) {
        lowestScore = finalScore;
    }

    
    console.log("Student:", name);
    console.log("Score:", finalScore);
    console.log("Grade:", grade);
    console.log("Status:", status);

}



students.forEach((student) => {
    calculateResult(student.name, student.testScore, student.assignmentScore, student.examScore)

});
//forEach() takes each student object from the array one at a time, passes it to student parameter which is used to provide arguments in the function calculateResult

let classAverage = totalScore / students.length;

console.log("Class Results");
console.log("Class Average:", classAverage);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Students Passed:", passedStudents);


