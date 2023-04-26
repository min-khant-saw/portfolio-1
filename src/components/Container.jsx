import React from "react";

const Container = ({ children, classs, id }) => {
  return (
    <div className={`w-full ${classs}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
