import React from "react";
// import Home from "./pages/Home";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CandidateFile from "./pages/CandidateFile";
// import { Container } from "@mui/material";
import SplitPage from "./components/SplitPage";

const App = () => {

  return (
    <SplitPage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/form" element={<CandidateFile />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
