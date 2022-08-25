import React,{memo} from "react";

const Main = ({ count }: { count: number }) => {
    console.log('ndnasjdnjsa')
  return (
      <div className="flex justify-center mt-10 ">Count:<p className="text-red-600 font-bold">{count}</p></div>
  );
};

export default memo(Main);
