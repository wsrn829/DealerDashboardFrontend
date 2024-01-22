import React, {useEffect, useState} from 'react';


function SalesForm() {
    const [price, setPrice] = useState('');
    const [customer, setCustomer] = useState("");
    const [customers, setCustomers] = useState([]);
    const [automobile, setAutomobile] = useState('');
    const [automobiles, setAutomobiles] = useState([]);
    const [salesperson, setSalesperson] = useState("");
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const salesUrl = process.env.NODE_ENV === 'production'
      ? 'https://dealerdashboardsalesapi-f1c2cc0024f6.herokuapp.com/'
      : 'http://localhost:8090/';


    const inventoryUrl = process.env.NODE_ENV === 'production'
      ? 'https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/'
      : 'http://localhost:8100/';


    const fetchData = async (url, stateSetter) => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        stateSetter(data);
      }
    };
    
    
    useEffect(() => {
      fetchData(`${salesUrl}salespeople/`, setSalespeople);
      fetchData(`${salesUrl}customers/`, setCustomers);
      fetchData(`${inventoryUrl}automobiles/`, setAutomobiles);
      fetchData(`${salesUrl}sales/`, setSales);
    }, []);
    
      
    const handleInputChange = (event, stateSetter) => {
      stateSetter(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        price,
        customer,
        automobile,
        salesperson,
      };
  
      const saleUrl = `${salesUrl}sales/`;
      const fetchConfig = {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  

      const response = await fetch(saleUrl, fetchConfig);
  

      if (response.ok) {
        const newSale = await response.json();
        console.log(newSale);
  
        setPrice('');
        setCustomer('');
        setAutomobile('');
        setSalesperson('');
        setFormSubmitted(true);
      }
    };
  

    let soldVinList = [];
    let newAutomobiles = [];
  
    
    for (let i = 0; i < sales.length; i++) {
      soldVinList.push(sales[i]?.automobile?.vin);
    }
  
    for (let i = 0; i < automobiles.length; i++) {
      if (!soldVinList.includes(automobiles[i]?.vin)) {
        newAutomobiles.push(automobiles[i]);
      }
    }
  
    let formClasses = '';
    if (formSubmitted) {
      formClasses = 'd-none';
    }
  
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form className={formClasses} onSubmit={handleSubmit} id="create-sale-form">
              <div className="mb-3">
                Automobile VIN
                <select onChange={(e) => handleInputChange(e, setAutomobile)} value={automobile} required id="automobile" name="automobile" className="form-select">
                  <option value="">Choose an automobile VIN...</option>
                  {newAutomobiles.map((auto) => (
                    <option key={auto.id} value={auto.vin}>
                      {auto.vin}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className="mb-3">
                Salesperson
                <select onChange={(e) => handleInputChange(e, setSalesperson)} value={salesperson} required id="salesperson" name="salesperson" className="form-select">
                  <option value="">Choose a salesperson...</option>
                  {salespeople.map((person) => (
                    <option key={person.id} value={person.id}>
                      {person.first_name}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className="mb-3">
                Customer
                <select onChange={(e) => handleInputChange(e, setCustomer)} value={customer} required id="customer" name="customer" className="form-select">
                  <option value="">Choose a customer...</option>
                  {customers.map((cust) => (
                    <option key={cust.id} value={cust.id}>
                      {cust.first_name}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className="form-floating mb-3">
                Price
                <input onChange={(e) => handleInputChange(e, setPrice)} value={price} placeholder="price" required type="number" name="price" id="price" className="form-control" />
                <label htmlFor="Price"></label>
              </div>
  
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SalesForm;