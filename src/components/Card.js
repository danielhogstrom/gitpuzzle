import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {
  const [number, setNumber] = useState();
  const [totalScore, setTotalScore] = useState(0);

  const newCard = () => {
    axios
      .get('http://localhost:8080/getnumber')
      .then((res) => {
        setNumber(res.data);
        setTotalScore(totalScore + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get('http://localhost:8080/getnumber')
      .then((res) => {
        setNumber(res.data);
        setTotalScore(totalScore + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <h2>Card:</h2>
        <h3>{number}</h3>
      </div>
      <div>
        <h2>Total Score:</h2>
        <h3>{totalScore}</h3>
      </div>
      <button onClick={newCard}>Hit!</button>
    </div>
  );
}
