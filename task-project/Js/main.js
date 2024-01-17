import { DOMSelectors } from "./dom";
import { PatientList } from "./arr";

function PatientProfile() {
  PatientList.forEach((patient) =>
    DOMSelectors.PatientList.insertAdjacentHTML(
      "beforeend",
      `<div class="PatientCard"> 
      <h2 class="Name">${patient.Name}</h2> 
      <img src="${patient.Picture}" alt="picture of ${patient.Name}" class="PatientImage"</img> 
      <h3 class="info"> ${patient.DOB} 
      ${patient.Gender} 
      ${patient.MedicalHistory} </h3>`
    )
  );
}

PatientProfile();

let sortPatientsAlphabetically = PatientList.sort((a, b) => {
  const nameA = a.Name.toUpperCase();
  const nameB = b.Name.toUpperCase();
  if (nameA < nameB) {
    return - 1;
  }
    if (nameA > nameB) {
      return 1;
  }

  return 1;
})
console.log(sortPatientsAlphabetically);


function PatientsAlphabetically() {
  sortPatientsAlphabetically.forEach((patient) =>
  DOMSelectors.sortPatientsAlphabetically.insertAdjacentHTML(
    "beforeend",
    `<div class="PatientCard"> 
    <h2 class="Name">${patient.Name}</h2> 
    <img src="${patient.Picture}" alt="picture of ${patient.Name}" class="PatientImage"</img> 
    <h3 class="info"> ${patient.DOB} 
    ${patient.Gender} 
    ${patient.MedicalHistory} </h3>`
  )
);
}