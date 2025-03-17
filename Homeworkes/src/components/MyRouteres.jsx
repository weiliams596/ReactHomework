import React from "react";
import {
  BrowserRouter as Router , /* HashRouter as Router , */
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import routes from "./AllHomeWorkConfig";
import classRoutes from "./AllClassTestConfig";
import HomeworkHomePage from "./HomeworkHomePage";
import "./myrouteres.css";

function NotFoundPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div className="not-found-page">
      {(document.title = "Page Not Found")}
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or try again later.</p>
      <p>Page will be redirected in 5 seconds.</p>
    </div>
  );
}

export default function MyRouteres() {
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
