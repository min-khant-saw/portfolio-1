import React from "react";
import Container from "./Container";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Home = () => {
  return (
    <Container
      id="home"
      classs="flex justify-center item-center flex-col h-screen bg-cover bg-no-repeat bg-left-top max-md:bg-right-top"
      style={{ backhroundImage: "url(bg.png)" }}
    >
      <div className="w-full mx-auto flex justify-center gap-x-16 items-center max-md:flex-col max-md:gap-y-5">
        <div className="max-md:order-2 text-center">
          <h1 className="text-4xl font-semibold text-slate-700 max-md:text-2xl">
            I'm Min Khant Saw
          </h1>
          <p className="text-md mt-1 text-gray-600">
            I'm full stack web developer
          </p>
          <div className="flex justify-center items-center my-2">
            <a
              className="bg-blue-600 p-2 py-2.5 text-stone-100 rounded-md text-center text-sm"
              href="https://export-download.canva.com/437263a3-427e-4fae-a5be-098c8b2bb117/0-3367143822.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230425%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20230425T000933Z&amp;X-Amz-Expires=19094&amp;X-Amz-Signature=846164db121af20e89d655a4b4a52047f47c82b9771be79bc5abb481cafb4993&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Creative%2520Resume%2520Web%2520Developer.pdf&amp;response-expires=Tue%2C%2025%20Apr%202023%2005%3A27%3A47%20GMT"
            >
              Download Resume
            </a>
          </div>
          <a
            href="#about"
            className="flex justify-center items-center w-full mt-2 ml-1 text-gray-800 text-xs text-center"
          >
            Scroll Down
            <KeyboardArrowDownRoundedIcon color="info" />
          </a>
        </div>
        <div>
          <img
            src="mks3.jpg"
            alt="profile"
            className="w-60 h-60 object-cover object-top rounded-full max-md:w-48 max-md:h-48"
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
