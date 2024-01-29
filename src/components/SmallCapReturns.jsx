// SmallCapReturns.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SmallCapReturns = () => {
  const [returnsData, setReturnsData] = useState([]);
  const { type } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/get_small_cap_mutual_funds_${type}`);
  //       setReturnsData(response.data.top_mutual_funds);
  //     } catch (error) {
  //       console.error(`Error fetching small cap returns data for ${type} returns:`, error);
  //     }
  //   };

  //   fetchData();
  // }, [type]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for ${type} returns...`);
        const response = await axios.get(`http://localhost:5000/get_small_cap_mutual_funds_${type}`);
        let responseData;
  
        // Check if the response type is a string and parse it
        if (typeof response.data === 'string') {
          responseData = JSON.parse(response.data);
        } else {
          responseData = response.data;
        }
  
        console.log('Response Type:', typeof responseData);
        console.log('Response Data:', responseData);
  
        setReturnsData(responseData.top_mutual_funds || responseData.top_mutual_funds_3Y || responseData.top_mutual_funds_5Y ||responseData.top_mutual_funds_10Y ||[]);
      } catch (error) {
        console.error(`Error fetching small cap returns data for ${type} returns:`, error);
      }
    };
  
    fetchData();
  }, [type]);
  

  return (
    <div>
      <h2>Top Small Cap Equity Funds based on   {type === '1Y' ? '1 Year' : type === '3Y' ? '3 Year' : type === '5Y' ? '5 Year' : type==='10Y' ? '10 Year' :'Unknown'} Returns </h2>

      <table border="10">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Scheme Name</th>
            <th>{type === '1Y' ? '1Y Returns (%)' : type==='3Y' ? '3Y Returns (%)' : type==='5Y' ? '5Y Returns(%) ':type==='10Y'? '10Y Returns (%) ' : 'Unknown'}</th>
            <th>AuM (Cr)</th>
          </tr>
        </thead>
        <tbody>
          {returnsData?.map((fund) => (
            <tr key={fund.Rank}>
              <td>{fund.Rank}</td>
              <td>{fund['Scheme Name']}</td>
              <td>{fund[type]}</td>
              <td>{fund['AuM (Cr)']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmallCapReturns;




