import React, { useEffect, useState } from "react";

export default function ModelForm() {
  const [name, setName] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [manufacturer_id, setmanufacturer_id] = useState("");
  const [manufacturers, setmanufacturers] = useState([]);

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const  handlepicture_url= (event) => {
    const value = event.target.value;
    setPicture_url(value);
  };

  const handlemanufacturer_id = (event) => {
    const value = event.target.value;
    setmanufacturer_id(value);
  };

  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/'
    : 'http://localhost:8100/';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
    name:name,
    picture_url: picture_url,
    manufacturer_id:manufacturer_id
    }

    // Postman shows 200 OK
    const modelsURL = `${baseUrl}models/`;
    const fetchConfig = {
      method: "post",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(modelsURL, fetchConfig);
    if (response.ok) {
    //   const newModel = await response.json();

      setName("");
      setPicture_url("");
      setmanufacturer_id("");

    }
  };

  const fetchData = async () => {
    const url = `${baseUrl}manufacturers/`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setmanufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className="my-5 container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a vehicle model</h1>
              <form onSubmit={handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                  <input
                    value={name} onChange={handleName} placeholder="name" required type="text" name="name" id="name" className="form-control"
                  />
                  <label htmlFor="model_name">Model Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={picture_url} onChange={handlepicture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control"/>
                  <label htmlFor="picture">Picture URL</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    value={manufacturer_id} onChange={handlemanufacturer_id} placeholder="manufacturer_id" required type="text" name="manufacturer_id" id="manufacturer_id" className="form-select">
                  <option value="">Choose a manufacturer_id</option>
                  {manufacturers.map((manufacturer_id) => {
                    return(
                        <option key={manufacturer_id.id} value={manufacturer_id.id}>
                            {manufacturer_id.name}
                            </option>
                    );
                })}
                  </select>
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
