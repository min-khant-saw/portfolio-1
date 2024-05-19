import React from 'react'
import Container from './Container'
import Card from './Card'

const Project = () => {
  return (
    <Container
      id="project"
      className="flex justify-center items-center flex-col"
    >
      <div className="w-full mx-auto">
        <h1 className="text-center text-4xl text-slate-700 font-medium">
          Projects
        </h1>
        <div className="w-full mx-auto px-4 my-4 mt-10 grid gap-4 max-w-screen-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <Card
            src="interior.png"
            title="Interior Website"
            description="Interior Design is an app by Min Khant Saw for interior design inspiration. It has sign-up/login, home, and room pages, and a React JS/Laravel admin panel for design creation, user management, and stats."
            link="https://github.com/min-khant-saw/interior-design"
          />
          <Card
            src="chat-app.png"
            title="Chat App"
            description="MERN stack chat app with login/registration, online/offline indicators, emoji and image support, security, Node.js/Express.js server, React.js client, and Socket.IO for real-time communication."
            link="https://github.com/min-khant-saw/chat-app"
          />
          <Card
            src="graphql.png"
            title="GraphQL Server"
            description="GraphQL Server is a backend using Node.js, Express.js, and Apollo Server. It offers user authentication, complex queries, MongoDB integration, and real-time updates with GraphQL subscriptions."
            link="https://github.com/min-khant-saw/graphql-server"
          />
          <Card
            src="musical.png"
            title="Music Player"
            description="Music App is a basic front-end using HTML, CSS, and JavaScript for music playback. It stores tracks locally and supports MP4 uploads if local storage is empty."
            link="https://github.com/min-khant-saw/Music_App"
          />
        </div>
      </div>
    </Container>
  )
}

export default Project
