import { DOMSelectors } from "./dom";
import { PatientList } from "./arr";
import "../Css/style.css";

function Patient(patient) {
  DOMSelectors.PatientList.insertAdjacentHTML(
    "beforeend",
    `<div class="PatientCard"> 
    <h2 class="Name">${patient.Name}</h2> 
    <img src="${patient.Picture}" alt="picture of ${patient.Name}" class="PatientImage"</img> 
    <h3 class="info"> ${patient.DOB} 
    ${patient.Gender} 
    ${patient.MedicalHistory} </h3>`
  )
}

function PatientProfile() {
  PatientList.forEach((patient) =>
  Patient(patient)
  );
}

PatientProfile();

//Algorithm
let sortPatientsAlphabetically = PatientList.sort((a, b) => {
  const nameA = a.Name.toUpperCase();
  const nameB = b.Name.toUpperCase();
  if (nameA > nameB) {
    return - 1;
  }
    if (nameA < nameB) {
      return 1;
  }

  return 1;
})
console.log(sortPatientsAlphabetically);

let sortPatientByDOB = PatientList.sort((a, b) => {
  const DOBA = a.DOB;
  const DOBB = b.DOB;
  const date = new Date();
  let year = date.getFullYear();
  const ageA = function() {
    return year - DOBA;
  }
  const ageB = function() {
    return year - DOBB;
  }
  if (ageA < ageB) {
    return - 1;
  }
  if (ageA > ageB) {
    return 1;
  }
  return 1
  }
)

console.log(sortPatientByDOB)

function PatientsAlphabetically() {
  sortPatientsAlphabetically.forEach((patient) =>
  Patient(patient)
);
}

function clearAll() {
  const PatientCard = document.querySelectorAll(".PatientCard");
  PatientCard.forEach((card) => card.remove());
}

DOMSelectors.NameButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  PatientsAlphabetically();
})
