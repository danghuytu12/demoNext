import React from "react";

const Main = ({ count }: { count: number }) => {
  return (
      <div className="flex justify-center mt-10 ">Count:<p className="text-red-600 font-bold">{count}</p></div>
  );
};

export default Main;
