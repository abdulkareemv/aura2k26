function openSunleaf() {
  document.getElementById("companyName").innerText =
    "Sunleaf Free Energy Solutions";

  document.getElementById("companyIndustry").innerText =
    "Renewable Energy | EV & Lithium Battery Manufacturing";

  document.getElementById("companyDetails").innerHTML = `
    <strong>Vacancy Area:</strong>
    <ul>
      <li>Lithium Battery & EV Manufacturing Unit</li>
    </ul>

    <strong>Job Roles:</strong>
    <ul>
      <li>Lithium Battery Technician</li>
      <li>EV Technician / EV Mechanic</li>
    </ul>

    <strong>Qualifications Required:</strong>
    <ul>
      <li>Diploma / B.Tech in Electronics</li>
      <li>Diploma / B.Tech in Electrical</li>
    </ul>
  `;

  document.getElementById("companyModal").style.display = "flex";
}

function openBritco() {
  document.getElementById("companyName").innerText =
    "Britco & Bridco";

  document.getElementById("companyIndustry").innerText =
    "Mobile Technology & Technical Training";

  document.getElementById("companyDetails").innerHTML = `
    <strong>Vacancies:</strong>
    <ul>
      <li>60 Positions</li>
    </ul>

    <strong>Job Roles:</strong>
    <ul>
      <li>Mobile Phone Service Engineer</li>
      <li>Trainer</li>
    </ul>

    <strong>Qualifications Required:</strong>
    <ul>
      <li>Diploma in EC / EL / EEE / CHM</li>
    </ul>

    <strong>Eligibility Criteria:</strong>
    <ul>
      <li>Age below 23 years</li>
      <li>Male candidates only</li>
    </ul>
  `;

  document.getElementById("companyModal").style.display = "flex";
}

function closeCompany() {
  document.getElementById("companyModal").style.display = "none";
}

/* Close when clicking outside */
document.getElementById("companyModal").addEventListener("click", e => {
  if (e.target.id === "companyModal") closeCompany();
});
