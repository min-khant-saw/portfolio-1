import React from "react";
import Container from "./Container";
import Card from "./Card";

const Project = () => {
  return (
    <Container id="project" classs="flex justify-center item-center flex-col">
      <div className="w-full mx-auto">
        <h1 className="text-center text-4xl text-slate-700 font-medium">
          Project
        </h1>
        <div className="w-full mx-auto px-4 my-4 mt-10 flex justify-center gap-x-4 max-md:flex-col max-md:items-center gap-y-4">
          <Card
            src="interior.png"
            title="Interior Website"
            description="Interior Design is an app by Min Khant Saw for interior design inspiration. It has sign-up/login, home, and room pages, and a React JS/Laravel admin panel for design creation, user management, and stats."
            link="https://github.com/min-khant-saw/interior-design"
          />
          <Card
            src="chat-app.png"
            title="chat app"
            description="MERN stack chat app with login/registration, online/offline indicators, emoji and image support, security, Node.js/Express.js server, React.js client, and Socket.IO for real-time communication."
            link="https://github.com/min-khant-saw/chat-app"
          />
        </div>
      </div>
    </Container>
  );
};

export default Project;
