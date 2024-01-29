// SmallCapHome.jsx


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SmallCapReturns from './SmallCapReturns';

const SmallCapHome = () => {
  const [homeData, setHomeData] = useState([]);
  const [showReturns, setShowReturns] = useState(false);
  const navigate = useNavigate();

  const fetchHomeData = async () => {
    try {
      const response = await fetch('http://localhost:5000/small_cap_data');
      const data = await response.json();
      setHomeData(data);
    } catch (error) {
      console.error('Error fetching home data:', error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []); // Fetch home data on component mount

  const handleButtonClick = (type) => {
    setShowReturns(true);
    navigate(`/small-cap/returns/${type}`);
  };

  return (
    <div>
      <h2>Small Cap Equity Funds</h2>

      <button onClick={() => handleButtonClick('1Y')}>Click Here To Get Top Small Cap Equity Funds based on 1 Year Returns</button>
      <button onClick={() => handleButtonClick('3Y')}>Click Here To Get Top Small Cap Equity Funds based on 3 Year Returns</button>
      <button onClick={() => handleButtonClick('5Y')}>Click Here To Get Top Small Cap Equity Funds based on 5 Year Returns</button>
      <button onClick={() => handleButtonClick('10Y')}>Click Here To Get Top Small Cap Equity Funds based on 10 Year Returns</button>

      <ul>
        <li>
          <strong>All Small Cap Equity Funds Data and Returns</strong>
          <table border="1">
            <thead>
              <tr>
                <th>Scheme Name</th>
                <th>AuM (Cr)</th>
                <th>Crisil Rank</th>
                <th>1W returns (%)</th>
                <th>1M returns (%)</th>
                <th>3M returns (%)</th>
                <th>6M returns (%)</th>
                <th>1Y returns (%)</th>
                <th>2Y returns (%)</th>
                <th>3Y returns (%)</th>
                <th>5Y returns (%)</th>
                <th>10Y returns (%)</th>
                <th>YTD</th>
              </tr>
            </thead>
            <tbody>
              {homeData.map((fund) => (
                <tr key={`${fund['Scheme Name']}_${fund['Crisil Rank']}`}>
                  <td>{fund['Scheme Name']}</td>
                  <td>{fund['AuM (Cr)']}</td>
                  <td>{fund['Crisil Rank']}</td>
                  <td>{fund['1W']}</td>
                  <td>{fund['1M']}</td>
                  <td>{fund['3M']}</td>
                  <td>{fund['6M']}</td>
                  <td>{fund['1Y']}</td>
                  <td>{fund['2Y']}</td>
                  <td>{fund['3Y']}</td>
                  <td>{fund['5Y']}</td>
                  <td>{fund['10Y']}</td>
                  <td>{fund['YTD']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>
      </ul>

      {showReturns && <SmallCapReturns />}
    </div>
  );
};

export default SmallCapHome;
