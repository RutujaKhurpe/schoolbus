import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <LandingPage />
      <AuthPage/>
    </>
  );
}

export default App;
