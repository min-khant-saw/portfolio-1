import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Hire from "./components/Hire";
import About from "./components/About";
import Container from "./components/Container";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Content from "./components/Content";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  if (isLoading) {
    return (
      <Container classs="h-screen flex justify-center items-center flex-col bg-[#E3E4FF]">
        <ScaleLoader
          color="#00A08B"
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Container>
    );
  }
  return (
    <div className="w-full min-h-screen bg-[#E3E4FF]">
      <NavBar />
      <div className="flex justify-center flex-col gap-y-[150px]">
        <Home />
        <About />
        <Skill />
        <Project />
        <Content />
      </div>
      <Hire />
    </div>
  );
};

export default App;
