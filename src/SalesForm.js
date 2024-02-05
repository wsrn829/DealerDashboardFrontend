import React, {useEffect, useState} from 'react';

const inventoryUrl = process.env.NODE_ENV === 'production'
  ? 'https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/'
  : 'http://localhost:8100/';

const salesUrl = process.env.NODE_ENV === 'production'
  ? 'https://dealerdashboardsalesapi-f1c2cc0024f6.herokuapp.com/'
  : 'http://localhost:8090/';


function SalesForm() {
    const [automobile, setAutomobile] = useState('');
    const [automobiles, setAutomobiles] = useState([]);
    const [salesperson, setSalesperson] = useState("");
    const [salespeople, setSalespeople] = useState([]);
    const [customer, setCustomer] = useState("");
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState('');
    const [sales, setSales] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
      }
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
      }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
      }
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
      }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
          automobile: automobile,
          salesperson: salesperson,
          customer: customer,
          price: price
        };
        console.log(data);

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
        };

        const saleUrl = `${salesUrl}sales/`;
        const response = await fetch(saleUrl, fetchConfig);
        const test = await response.json();
        console.log(test);
        if (response.ok) {
            const newSale = await response.json();
            console.log(newSale);
            setPrice('');
            setCustomer('');
            setAutomobile('');
            setSalesperson('');
            setFormSubmitted(true);
          }
    }

    const fetchData = async () => {
    const url = `${inventoryUrl}automobiles/`;
    const url1 = `${salesUrl}salespeople/`;
    const url2 = `${salesUrl}customers/`;
    const url3 = `${salesUrl}sales/`;

    const response = await fetch(url);
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);

    if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos)
    }
    if (response1.ok) {
        const data1 = await response1.json();
        setSalespeople(data1.salesperson)
      }
    if (response2.ok) {
        const data2 = await response2.json();
        setCustomers(data2.customer)
      }
    if (response3.ok) {
        const data3 = await response3.json();
        setSales(data3.sale)
      }
  }

  useEffect(() => {
    fetchData();
  }, []);


  // let soldVinList = []
  // let newAutomobiles = []


  // for (let i = 0; i < sales.length; i++)

  //         soldVinList.push(sales[i]["automobile"]["vin"])

  // for (let i = 0; i < automobiles.length; i++)

  //     if (soldVinList.includes(automobiles[i]["vin"]) === false)

  //         newAutomobiles.push(automobiles[i])

  let messageClasses = 'alert alert-success d-none mb-0';
  let formClasses = '';

  if (formSubmitted) {
    messageClasses = 'alert alert-success mb-0';
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
                    <select onChange = {handleAutomobileChange} value={automobile} required id="automobile" name="automobile" className="form-select">
                    <option value="">Choose an automobile VIN...</option>
                    {automobiles?.map(automobile => {
                        return (
                        <option key={automobile.id} value={automobile.vin}>
                        {automobile.vin}
                        </option>
                        );
                        })}
                    </select>
                </div>

                <div className="mb-3">
                  Salesperson
                    <select onChange = {handleSalespersonChange} value={salesperson} required id="salesperson" name="salesperson" className="form-select">
                    <option value="">Choose a salesperson...</option>
                    {salespeople.map(salesperson => {
                        return (
                        <option key={salesperson.id} value={salesperson.id}>
                        {salesperson.first_name}
                        </option>
                        );
                        })}
                    </select>
                </div>

                <div className="mb-3">
                  Customer
                    <select onChange = {handleCustomerChange} value={customer} required id="customer" name="customer" className="form-select">
                    <option value="">Choose a customer...</option>
                    {customers.map(customer => {
                        return (
                        <option key={customer.id} value={customer.id}>
                        {customer.first_name}
                        </option>
                        );
                        })}
                    </select>
                </div>

                <div className="form-floating mb-3">
                Price
                <input onChange = {handlePriceChange} value={price} placeholder="price" required type="number" name="price" id="price" className="form-control"/>
                <label htmlFor="price"></label>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>
              <div className={messageClasses} id="success-message">
                  Congratulations!
                </div>
          </div>
        </div>
      </div>
    );
  }


export default SalesForm;
