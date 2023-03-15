import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Foter";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Video from "./components/Pages/Video";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/videos/:videoId" element={<Video/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
