import React, { useEffect, useState } from "react";

export const TechnicianList = () => {
  const [technicians, setTechnicians] = useState([]);

  const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://dealerdashboardserviceapi-db6bf25312d7.herokuapp.com/'
  : 'http://localhost:8080/';

  // Postman shows 200 OK
  useEffect(() => {
    const getTechnicians = async () => {
      const techUrl = `${baseUrl}technicians/`;
      const response = await fetch(techUrl);

      if (response.ok) {
        const techData = await response.json();
        setTechnicians(techData.technicians);
      }
    };
    getTechnicians();
  }, []);

  return (
    <>
      <h1>Technicians</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map((technician) => (
            <tr key={technician.employee_id}>
              <td>{technician.employee_id}</td>
              <td>{technician.first_name}</td>
              <td>{technician.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
