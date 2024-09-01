import React from 'react';

function Pricing() {
  const plans = [
    { name: 'A', cvs: 1000, price: 59, additional: 0.059 },
    { name: 'B', cvs: 5000, price: 129, additional: 0.0258 },
    { name: 'C', cvs: 20000, price: 219, additional: 0.01095 },
    { name: 'D', cvs: 35000, price: 349, additional: 0.00997 },
    { name: 'E', cvs: 50000, price: 469, additional: 0.00938 },
    { name: 'F', cvs: 75000, price: 669, additional: 0.00892 },
    { name: 'G', cvs: 100000, price: 849, additional: 0.00849 },
    { name: 'H', cvs: 150000, price: 1199, additional: 0.00799 },
    { name: 'I', cvs: 200000, price: 1499, additional: 0.00749 },
    { name: 'J', cvs: 300000, price: 2099, additional: 0.00699 },
    { name: 'K', cvs: 400000, price: 2699, additional: 0.00674 },
    { name: 'L', cvs: 500000, price: 3299, additional: 0.00659 },
    { name: 'M', cvs: 600000, price: 3899, additional: 0.00649 },
    { name: 'N', cvs: 700000, price: 4499, additional: 0.00642 },
    { name: 'O', cvs: 800000, price: 5099, additional: 0.00637 },
    { name: 'P', cvs: 900000, price: 5699, additional: 0.00633 },
    { name: 'Q', cvs: 1000000, price: 6299, additional: 0.0063 },
  ];

  return (
    <div className="pricing">
      <h2>Pricing</h2>
      <p>Plans for everyone, with volume discounts</p>
      <ul>
        <li>Plans are monthly subscriptions.</li>
        <li>No commitment. You can cancel/downgrade/upgrade at any time.</li>
        <li>Each plan lets you parse up to a certain number of CVs per month.</li>
        <li>If you exceed this number, you are billed for each additional CV parsed.</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Number of CVs per month</th>
            <th>Price per month</th>
            <th>Price per additional CV</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.name}>
              <td>{plan.name}</td>
              <td>{plan.cvs.toLocaleString()} CVs</td>
              <td>{plan.price} €</td>
              <td>{plan.additional.toFixed(4)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pricing;