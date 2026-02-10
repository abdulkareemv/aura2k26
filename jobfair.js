function openSunleaf() {
  document.getElementById("companyName").innerText =
    "Sunleaf Energy Solutions";

  document.getElementById("companyIndustry").innerText =
    "Renewable Energy | EV & Lithium Battery Manufacturing";

  document.getElementById("companyDetails").innerHTML = `
  <p><strong>Location:</strong> Kondotty</p>
  <p><strong>Vacancy Area:</strong> Lithium Battery & EV Manufacturing Unit, Office Section</p>

  <strong>Job Role 1:</strong>
  <ul>
    <li>Lithium Battery Technician</li>
    <li>EV Technician / EV Mechanic</li>
  </ul>

  <p><strong>Qualifications:</strong>Diploma / B.Tech in Electronics (EC, EL, IE, etc.) and Electrical</p>

  <p><strong>Job Role 2:</strong>Office Section</p>

 <p> <strong>Qualifications:</strong>Diploma in Computer Application and  Business Management</p>

  <strong>Training & Employment Details:</strong>
  <ul>
    <li>Training Period: 3 Months (Stipend ₹5,000/month)</li>
    <li>Probation Period: 2 Months after Training</li>
    <li>Salary During Probation: ₹10,000</li>
    <li>Confirmed Employment Salary: ₹12,000</li>
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

    <strong>Qualifications:</strong>
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

function openEqualhire() {
  document.getElementById("companyName").innerText =
    "EQUALHIRE Logitech India Pvt. Ltd.";

  document.getElementById("companyIndustry").innerText =
    "";

  document.getElementById("companyDetails").innerHTML = `
    <strong>Vacancy Area:</strong>
    <ul>
      <li></li>
    </ul>

    <strong>Job Roles:</strong>
    <ul>
      <li></li>
      <li></li>
    </ul>

    <strong>Qualifications:</strong>
    <ul>
      <li></li>
      <li></li>
    </ul>
  `;

  document.getElementById("companyModal").style.display = "flex";
}

function openSFO() {
  document.getElementById("companyName").innerText =
    "SFO Technologies";

  document.getElementById("companyIndustry").innerText =
    "Electronics Manufacturing & Technology Services";

  document.getElementById("companyDetails").innerHTML = `
  <p><strong>Vacancies:</strong> 75+ Positions</p>
  <p><strong>Job Role:</strong> Operator Trainee</p>
   <p><strong>Salary:</strong> ₹15,000/- CTC </p>
   <p><strong>Additional:</strong> Shift allowance, overtime allowance</p>
  <p><strong>Location:</strong> Kakkanad, Kochi</p>
 
  <strong>Qualifications:</strong>
  <ul>
    <li>Diploma</li>
    <li>ITI</li>
    <li>VHSE</li>
  </ul>

  <strong>Eligibility Criteria:</strong>
  <ul>
    <li>Age between 18 to 27 years</li>
    <li>Preferred: Male candidates</li>
    <li>Departments: Various</li>
  </ul>

  <em style="font-size: 0.9rem; opacity: 0.85;">
    * Female candidates will be shortlisted and considered for upcoming openings as per future requirements.
  </em>
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
