import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "./AllHomeWorkConfig.js";
import classRoutes from "./AllClassTestConfig.js";
import "./HomeworkHomePage.css";

export default function HomeworkHomePage() {
  useEffect(() => {
    localStorage.setItem("NotFundIndex", 0);
  });
  return (
    <main key="homework-main" className="homework-main">
      {routes.map((item, index1) => {
        return (
          <section
            key={"homework-section" + index1}
            className="homework-section">
            <h2>Week {item.week}</h2>
            <div key={"homework-div" + index1} className="homework-div">
              {item.homework.map((item1, index2) => {
                return (
                  <div
                    key={"homework-div-item" + index2}
                    className="class-home-work">
                    <Link key={item1.id} to={item1.path}>
                      {item1.name}{" "}
                    </Link>
                    <Link
                      key={classRoutes[index1].classtest[index2].id}
                      to={classRoutes[index1].classtest[index2].path}>
                      {classRoutes[index1].classtest[index2].name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
