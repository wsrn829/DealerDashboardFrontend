import React, { useState } from "react";

function SalespeopleForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [salespeople, setSalespeople] = useState("");

  const handleFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastName = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleEmployeeId = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  };

  const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://dealerdashboardsalesapi-f1c2cc0024f6.herokuapp.com/'
  : 'http://localhost:8090/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.employee_id = employeeId;

    // Postman shows 200 OK
    const salespersonUrl = `${baseUrl}salespeople/`;
    const fetchConfig = {
      method: "post",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(salespersonUrl, fetchConfig);
    if (response.ok) {
      const newSalesperson = await response.json();
      console.log(newSalesperson);
      setFirstName("");
      setLastName("");
      setEmployeeId("");
      const getSalespeople = async () => {
        const salespeopleResponse = await fetch(`${baseUrl}salespeople/`);

        if (salespeopleResponse.ok) {
          const data = await salespeopleResponse.json();
          const salespeople = data.salesperson;
          setSalespeople(salesperson);
        }
      }
      getSalespeople();
    }
  };


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a Salesperson</h1>
              <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                  <input
                    value={firstName} onChange={handleFirstName} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control"
                  />
                  <label htmlFor="first_name">First name...</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={lastName} onChange={handleLastName} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control"
                  />
                  <label htmlFor="last_name">Last name...</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={employeeId} onChange={handleEmployeeId} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control"
                  />
                  <label htmlFor="employee_id">Employee ID...</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalespeopleForm;
