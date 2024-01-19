import React, {useState } from 'react'

export default function CustomersForm({ getCustomers }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [customers, setCustomers] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
    }

    const handleAddressChange = (event) => {
        const value = event.target.value
        setAddress(value)
    }

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value
        setPhoneNumber(value)
    }

    const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/'
    : 'http://localhost:8090/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address;
        data.phone_number = phoneNumber;

        const customersUrl = `${baseUrl}customers/`;
        const fetchConfig = {
            method: "post",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }
        const response = await fetch(customersUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);
            setFirstName('')
            setLastName('')
            setAddress('')
            setPhoneNumber('')
            const getCustomers = async () => {
            
              // Postman shows 200 OK
              const customerResponse = await fetch(`${baseUrl}customers/`);

              if (customerResponse.ok) {
                const data = await customerResponse.json();
                const customers = data.customers;
                setCustomers(customers);
              }
            }
            getCustomers();
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control" value={firstName} />
                            <label htmlFor="first_name">First name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control" value={lastName} />
                            <label htmlFor="first_name">Last name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" value={address} />
                            <label htmlFor="address">Address...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" value={phoneNumber} />
                            <label htmlFor="phone_number">Phone number...</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )


}
