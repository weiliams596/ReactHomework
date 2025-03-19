import React, { use, useContext, useEffect } from "react";
import {
  BrowserRouter as Router /* HashRouter as Router , */,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import routes from "./AllHomeWorkConfig";
import classRoutes from "./AllClassTestConfig";
import HomeworkHomePage from "./HomeworkHomePage";
import "./myrouteres.css";

import GlobalContex from "../MyContext";

function NotFoundPage() {
  const navigate = useNavigate();
  const [timeCount, setTimeCount] = React.useState(5);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeCount(timeCount - 1);
    }, 1000);
    if (timeCount === 0) {
      navigate("/");
      return () => clearTimeout(timer);
    }
    }, [timeCount]);

  return (
    <div className="not-found-page">
      {(document.title = "Page Not Found")}
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or try again later.</p>
      <p>Page will be redirected in {timeCount} seconds.</p>
    </div>
  );
}
export default function MyRouteres() {
  const { globalInfo } = useContext(GlobalContex);
  const [childRoutes, setChildRoutes] = React.useState([]);

  useEffect(() => {
    console.log("globalInfo", globalInfo);
    if (globalInfo.routes) {
      setChildRoutes(globalInfo.routes);
      console.log(childRoutes);
    }
  },[globalInfo.routes]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeworkHomePage />} />
        {routes.map((item) => {
          return item.homework.map((page) => {
            return (
              <Route
                key={page.id}
                path={page.path}
                element={<page.component />}
              />
            );
          });
        })}
        {classRoutes.map((item) => {
          return item.classtest.map((page) => {
            return (
              <Route
                key={page.id}
                path={page.path}
                element={<page.element />}
              />
            );
          });
        })}
        {
          childRoutes &&
          childRoutes.map((item) => {
              return (
                <Route
                  key={item.id}
                  path={item.path}
                  element={<item.element />}
                />
              );
            })
          }
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
