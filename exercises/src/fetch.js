//Using JavaScript Fetch API
//       The JavaScript Fetch API is an inbuilt browser’s native API that gives an easy interface to fetch the data from 
//       the network. The simplest way to use fetch() is by taking one argument and the path from where the data is to be
//       fetched and then returning a promise in a JSON object.

import React, { useState, useEffect } from "react";

function Fetch() {
  
    //we are going to use mock data provided freely by JSONplaceholder in JSON format. We are going to use the user’s 
    //endpoint from that API i.e., https://jsonplaceholder.typicode.com/users.
    
  const url = "https://jsonplaceholder.typicode.com/users";//access the API endpoint and store it in a const variable so that we can use it anytime and anywhere.
  const [data, setData] = useState([]);

  //Create a FetchInfo() Callback Function to Fetch and Store Data
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green", fontSize:"40px" }}>Using JavaScript inbuilt FETCH API</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default Fetch;