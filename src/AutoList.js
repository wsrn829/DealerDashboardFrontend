import React, { useEffect, useState } from "react";

export const AutoList = () => {
  const [automobiles, setAutomobiles] = useState([]);

  const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/'
  : 'http://localhost:8100/';

  //   Fetch automobile data (Postman shows 200 OK)

  useEffect(() => {
    const getAutomobiles = async () => {
      const autoUrl = `${baseUrl}automobiles/`;
      const response = await fetch(autoUrl);

      if (response.ok) {
        const automobileData = await response.json();
        setAutomobiles(automobileData.autos);
      }
    };
    getAutomobiles();
  }, []);
  return (
    <>
      <h1>Automobiles</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map((auto) => {
            return (
              <tr key={auto.id}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>{auto.sold ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
