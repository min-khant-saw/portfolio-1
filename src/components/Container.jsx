import React from "react";

const Container = ({ children, classs, id, img }) => {
  return (
    <div
      className={`w-full ${classs}`}
      id={id}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
};

export default Container;
