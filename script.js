const studentForm = document.getElementById("studentForm");
const resultsTbody = document.getElementById("resultsTbody");
const themeToggle = document.getElementById("themeToggle");


if (studentForm) {

    studentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const studentName = document.getElementById("name").value;
        const testScore = Number(document.getElementById("test").value);
        const assignmentScore = Number(document.getElementById("assignment").value);
        const examScore = Number(document.getElementById("exam").value);

        const finalScore = testScore + assignmentScore + examScore;

        let grade;
        let status;
        let feedback;

        if (finalScore >= 70) {
            grade = "A";
            status = "Passed";
            feedback = "Excellent performance!";
        } 
        else if (finalScore >= 60) {
            grade = "B";
            status = "Passed";
            feedback = "Very good performance!";
        } 
        else if (finalScore >= 50) {
            grade = "C";
            status = "Passed";
            feedback = "Good performance.";
        } 
        else if (finalScore >= 40) {
            grade = "D";
            status = "Passed";
            feedback = "You passed, but there is room for improvement.";
        } 
        else {
            grade = "F";
            status = "Failed";
            feedback = "You need to improve your performance.";
        }

        const student = {
            studentName,
            testScore,
            assignmentScore,
            examScore,
            finalScore,
            grade,
            status,
            feedback
        };

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));

        window.location.href = "table.html";
    });
}


if (resultsTbody) {

    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(function(student) {

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${student.studentName}</td>
            <td>${student.testScore}</td>
            <td>${student.assignmentScore}</td>
            <td>${student.examScore}</td>
            <td>${student.finalScore}</td>
            <td>${student.grade}</td>
            <td>${student.status}</td>
            <td>${student.feedback}</td>
        `;

        resultsTbody.appendChild(newRow);
    });
}



if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}