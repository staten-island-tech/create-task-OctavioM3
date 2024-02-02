import { DOMSelectors } from "./dom";
import { PatientList } from "./arr";
import "../Css/style.css";

function Patient(patient) {
  DOMSelectors.PatientList.insertAdjacentHTML(
    "beforeend",
    `<div class="PatientCard"> 
    <h2 class="Name">${patient.name}</h2> 
    <img src="${patient.Picture}" alt="picture of ${patient.name}" class="PatientImage"</img> 
    <h3 class="info"> ${patient.DOB} </h3>`
  )
}

function PatientProfile() {
  PatientList.forEach((patient) =>
  Patient(patient)
  );
}

PatientProfile();


    PatientList.sort((a, b) => {
      const nameA = a.name.toUpperCase;
      const nameB = b.name.toUpperCase;
      if (nameA > nameB) {
        return 1;
      }
        else if (nameA < nameB) {
          return - 1;
      }
    
      return 1;
    })


const calcAge = (DOB) => {
  const BD = new Date(DOB)
  const CD = new Date();
  const age = CD.getFullYear() - BD.getFullYear()

if (
  CD.getMonth() < BD.getMonth() || 
  (CD.getMonth() === BD.getMonth() &&
  CD.getDate() < BD.getDate())
) {
  return age - 1;
}

return age;
};

function sortPatientsAlphabetically() {
  for (let i = 0; i < PatientList.length; i++) {
    for (let j = i + 1; j < PatientList.length; j++) {
      const nameI = PatientList[i].name.toUpperCase();
      const nameJ = PatientList[j].name.toUpperCase();
      if (nameI > nameJ) {
        const first = PatientList[i];
        PatientList[i] = PatientList[j];
        PatientList[j] = first;
      }
    }
  }
}

function sortByAge() {
  for (let i = 0; i < PatientList.length; i++) {
    for (let j = i + 1; j < PatientList.length; j++) {
      const ageI = calcAge(PatientList[i].DOB);
      const ageJ = calcAge(PatientList[j].DOB);
      if (ageI > ageJ) {
        const first = PatientList[i];
        PatientList[i] = PatientList[j];
        PatientList[j] = first;
      }
    }
  }
}

function clearAll() {
  const PatientCard = document.querySelectorAll(".PatientCard");
  PatientCard.forEach((card) => card.remove());
}

DOMSelectors.NameButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  sortPatientsAlphabetically();
  PatientList.forEach((patient) => Patient(patient));
})

DOMSelectors.DOBButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  sortByAge();
  PatientList.forEach((patient) => Patient(patient));
})