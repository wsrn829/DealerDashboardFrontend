import React, { useState, useEffect }  from "react";


function SalesList() {
    const [sale, setSale] = useState([]);

    const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://dealerdashboardsalesapi-f1c2cc0024f6.herokuapp.com/'
    : 'http://localhost:8090/';

    // Postman shows 200 OK
    async function LoadSales() {
        const response = await fetch(`${baseUrl}sales/`);
        if (response.ok) {
            const data = await response.json();
            setSale(data.sale)
        }
    }
    useEffect(() => {
        LoadSales();
    }, []);


    return (
        <div>
            <h1>Sales</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sale.map((saleData) => {
                        return (
                            <tr key={saleData.id}>
                                <td>{ saleData.salesperson.employee_id}</td>
                                <td>{ saleData.salesperson.first_name}</td>
                                <td>{ saleData.customer.first_name }</td>
                                <td>{ saleData.automobile.vin}</td>
                                <td>{ saleData.price }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SalesList;
