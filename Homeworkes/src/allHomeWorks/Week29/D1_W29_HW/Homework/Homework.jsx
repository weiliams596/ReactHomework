import React, { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function Homework() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [appraise, setAppraise] = useState("1");

  const retStar = (num) => {
    let ret = [];
    for (let i = 0; i < num; i++) {
      ret.push(<i key={num + '_star_' + i } className="bi bi-star-fill"></i>);
    }
    return ret;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, feedback);
  };
  return (
    <div>
      <h1>Кері байланыс Формасы</h1>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="name">Аты-жөні:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="box">
          <label htmlFor="email">Электрондық пошта:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box">
          <label htmlFor="feedback">Пікіріңіз:</label>
          <textarea
            id="feedback"
            onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
        <div className="box">
          <label htmlFor="appraise">Бағаңызды қойыңыз:</label>
          <select
            name="appraise"
            id="appraise"
            onChange={(e) => setAppraise(e.target.value)}>
            <option value="1">
              {retStar(1).map((item) => {
                return item;
              })}
            </option>
            <option value="2">
              {retStar(2).map((item) => {
                return item;
              })}              
            </option>
            <option value="3">
              {retStar(3).map((item) => {
                return item;
              })}
            </option>
            <option value="4">
              {retStar(4).map((item) => {
                return item;
              })}
            </option>
            <option value="5">
              {retStar(5).map((item) => {
                return item;
              })}
            </option>
          </select>
        </div>
        <button type="submit">Бағалау</button>
      </form>
    </div>
  );
}
