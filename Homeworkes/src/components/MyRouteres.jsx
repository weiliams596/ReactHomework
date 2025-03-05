import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./AllHomeWorkConfig";
import "./myrouteres.css";

function NotFoundPage(){
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);
  return(
    <div className="not-found-page">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or try again later.</p>
      <p>Page will be redirected in 5 seconds.</p>
    </div>
  );
};


export default function MyRouteres() {
  return (
    <Router>
      <Routes>
        {routes.map((item, index1) => {
          return item.homework.map((page, index2) => {
            return (
              <Route
                key={(index1 + 1) * (index2 + 1)}
                path={page.path}
                element={<page.component/>}
              />
            );
          });
        })}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}
