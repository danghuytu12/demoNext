import React, { memo } from "react";

const Main = ({onIncrease}:{onIncrease:any}) => {
  console.log('ndnasjdnjsa')
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10"
        onClick={onIncrease}
      >
        Click
      </button>
    </div>
  );
};

export default memo(Main);
