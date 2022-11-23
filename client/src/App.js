import React, { Component } from "react";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null"); // Alert



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0C1F54";
     
      showAlert("Dark mode has been enabled", "success");
      document.title = "Auto-Resume - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Auto-Resume - Light Mode";
    }
  };
  return (
    <div>
      <div className="col-lg-8 mx-auto text-center mt-5">
        <Navbar title="Auto-Resume" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div    style={{
          color: "#0289E3"}}>
        <h1>
          <b>Let's create a Resume!</b>
        </h1>
        <p className="lead">Fill in all details as requested for your resume</p>
        </div>
        <hr />
       
      </div>
      <UserForm />
    </div>
  );
}
export default App;
