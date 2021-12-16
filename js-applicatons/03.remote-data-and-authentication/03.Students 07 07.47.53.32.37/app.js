const submitButton = document.querySelector("#submit");
const tableBody = document.querySelector("#results tbody");
const firstNameInput = document.querySelector('[name="firstName"]');
const lastNameInput = document.querySelector('[name="lastName"]');
const facultyNumberInput = document.querySelector('[name="facultyNumber"]');
const gradeInput = document.querySelector('[name="grade"]');

submitButton.addEventListener("click", onSubmit);

async function getAllStudents() {
  tableBody.replaceChildren();
  const url = "http://localhost:3030/jsonstore/collections/students";
  const res = await fetch(url);
  const students = await res.json();
  Object.values(students).forEach((s) => {
    createTableRow(s);
  });
}
getAllStudents();

async function createTableRow(student) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${student.firstName}</td>
  <td>${student.lastName}</td>
<td>${student.facultyNumber}</td>
 <td>${Number(student.grade).toFixed(2)}</td>`;
  tableBody.appendChild(tr);
}

async function onSubmit() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const facultyNumber = facultyNumberInput.value;
  const grade = gradeInput.value;

  if (firstName == "" || lastName == "" || facultyNumber == "" || grade == "") {
    alert("Some field is empty! Please fill out all fields.");
  } else {
    const url = "http://localhost:3030/jsonstore/collections/students";
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    });
    const result = await res.json();
    getAllStudents();
  }
}
