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
    name: "Mike",
    testScore: 10,
    assignmentScore: 12,
    examScore: 25
},
    {
    name: "Sam",
    testScore: 4,
    assignmentScore: 9,
    examScore: 23
},

    {
    name: "Ynx",
    testScore: 8,
    assignmentScore: 10,
    examScore: 22
},
   
    {
    name: "Jonathan",
    testScore: 15,
    assignmentScore: 12,
    examScore: 40
},
]




let table = document.getElementById("results");

for(let student of students){

    let finalScore = student.testScore + student.assignmentScore + student.examScore;


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
    }
    else{
        status = "Failed";
    }
   

    let feedback;
    if (finalScore >= 80){
        feedback = "Excellent work";
    }
    else if(finalScore >= 50){
        feedback = "Good effort, but you can do better.";
    }
    else{
        feedback = "You need to work harder."
    }


    let row = table.insertRow();

    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = finalScore;
    row.insertCell(2).textContent = grade;
    row.insertCell(3).textContent = status;
    row.insertCell(4).textContent = feedback;

    console.log(student.name);
    console.log(finalScore);
    console.log(grade);
    console.log(status);
    console.log(feedback);


}
