import React from "react";
import Sidebar from "./ChatBotCompo/Sidebar";
import MainContant from "./ChatBotCompo/MainContant";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainContant />
      </div>
    </>
  );
};

export default App;

