import React, { useState } from "react";
import Container from "./Container";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container classs="z-10 sticky top-0 left-0 max-md:flex-col flex justify-between item-center flex-row max-md:flex-col item-center gap-7 p-4 border-b bg-white bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="font-[Jost] text-3xl max-md:hidden">Min</div>
      <div className="flex justify-center flex-row gap-4 max-md:hidden">
        <div>
          <a
            href="#home"
            className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
          >
            <div>Home</div>
            <div>
              <HomeRoundedIcon fontSize="small" />
            </div>
          </a>
        </div>
        <div>
          <a
            href="#about"
            className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
          >
            <div>About</div>
            <div>
              <InfoRoundedIcon fontSize="small" />
            </div>
          </a>
        </div>
        <div>
          <a
            href="#skill"
            className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
          >
            <div>Skill</div>
            <div>
              <PsychologyRoundedIcon fontSize="small" />
            </div>
          </a>
        </div>
        <div>
          <a
            href="#project"
            className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
          >
            <div>Project</div>
            <div>
              <AccountTreeRoundedIcon fontSize="small" />
            </div>
          </a>
        </div>
      </div>
      <div className="hidden max-md:flex w-full justify-between items-center">
        <div className="font-[Jost] text-3xl">Min</div>

        <div
          className="cursor-pointer hidden max-md:block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuRoundedIcon />
        </div>
      </div>
      {isOpen && (
        <div className="hidden justify-center flex-col gap-4 max-md:flex">
          <div>
            <a
              href="#home"
              className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
            >
              <div>Home</div>
              <div>
                <HomeRoundedIcon fontSize="small" />
              </div>
            </a>
          </div>
          <div>
            <a
              href="#about"
              className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
            >
              <div>About</div>
              <div>
                <InfoRoundedIcon fontSize="small" />
              </div>
            </a>
          </div>
          <div>
            <a
              href="#skill"
              className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
            >
              <div>Skill</div>
              <div>
                <PsychologyRoundedIcon fontSize="small" />
              </div>
            </a>
          </div>
          <div>
            <a
              href="#project"
              className="text-lg text-cyan-800 font-medium flex justify-center items-center gap-x-2"
            >
              <div>Project</div>
              <div>
                <AccountTreeRoundedIcon fontSize="small" />
              </div>
            </a>
          </div>
        </div>
      )}
    </Container>
  );
};

export default NavBar;
