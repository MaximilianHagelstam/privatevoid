import React, { useEffect } from 'react';
import axios from 'axios';

const fetchData = () => {
  return axios
    .get('http://localhost:8080/api/show')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Penis</h1>
    </div>
  );
}
