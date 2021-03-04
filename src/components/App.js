import React from "react";
import Courses from "./courses/Courses";
import { wrapper } from "./App.module.css";

const App = () => {
  return (
    <div className={wrapper}>
      <Courses />
    </div>
  );
};

export default App;
