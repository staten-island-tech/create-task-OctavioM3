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
