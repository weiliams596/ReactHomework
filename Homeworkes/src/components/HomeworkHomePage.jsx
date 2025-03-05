import React from "react";
import { Link } from "react-router-dom";
import routes from "./AllHomeWorkConfig.js";
import "./HomeworkHomePage.css";

export default function HomeworkHomePage() {
  return (
    <main key="homework-main" className="homework-main">
      {routes.map((item, index1) => {
        return (
          <section key={'homework-section'} className="homework-section">
            <h2>Week {item.week}</h2>
            <div className="homework-div">
              {item.homework.map((item1, index2) => {
                if(index1===0 && index2===0){
                  return null;
                }
                return <Link key={(index1 +1) * (index2 + 1)} to={item1.path}>Homework {(index1 === 0 ? index2  : index2 + 1)}</Link>;
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
