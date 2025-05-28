import React, { useContext, useState } from "react";
import "../index.css";
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
import { IoMdSend } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { Context } from "../context/context";
import geminilogo from "../assets/geminilogo.png";


const MainContant = () => {
  const handleMod = () => {
    if (dark === "dark") {
      setdark("light");
    } else {
      setdark("dark");
    }
  };
  const {
    input,
    setinput,
    recentPromot,
    setrecentPromot,
    resultdata,
    chathistory,
    showresult,
    loading,
    onSent,
    dark,
    setdark,
  } = useContext(Context);

  const handleSend = () => {
    if (input.trim()) {
      onSent(input);
    }
  };
  // console.log("dark : ", dark);

  return (
    <div
      className={`flex-1 min-h-screen pb-[15vh] relative ${
        dark === "dark" ? "bg-gray-900" : "bg-white"
      } transition-colors duration-1000`}
    >
      {/* Header */}
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p
          className={`font-[poppins] ${
            dark === "dark" ? "text-white" : "text-gray-900"
          } transition-colors duration-1000`}
        >
          Gemini
        </p>
        <div className="flex gap-5 text-3xl">
          {dark === "light" ? (
            <FaSun
              onClick={handleMod}
              className={` transition-colors duration-1000 ${
                dark === "dark" ? "text-white" : "text-gray-900"
              }`}
            />
          ) : (
            <FaMoon
              onClick={handleMod}
              className={` transition-colors duration-1000 ${
                dark === "dark" ? "text-white" : "text-gray-900"
              }`}
            />
          )}
          <FaUserCircle
            className={`${
              dark === "dark" ? "text-white" : "text-gray-900"
            }  transition-colors duration-1000`}
          />
        </div>
      </div>


      <div className="max-w-[900px] mx-auto">
        {(!showresult || chathistory.length === 0 )? (
          <>
            {/* Welcome Text */}
            <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
              <p>
                <span className="bg-gradient-to-r from-[#187eeb] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Tirth
                </span>
              </p>
              <p className="text-slate-300">How can I help you</p>
            </div>

            {/* Prompt Suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              {[
                { text: "Suggest top 10 web series", icon: <FaCompass /> },
                { text: "What is loop in JavaScript", icon: <FaLightbulb /> },
                {
                  text: "Who is known as the Mother of Dragons",
                  icon: <FaCompass />,
                },
                {
                  text: "Who sits on the Iron Throne at the end of the series?",
                  icon: <FaCode />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300"
                  onClick={() => onSent(item.text)}
                >
                  <p className="text-slate-700 text-lg">
                    {item.text}
                    <span className="absolute bottom-2 right-2 text-4xl p-1">
                      {item.icon}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Chat History and Current Response
          <div
            className={`py-0 px-[5%] max-h-[70vh] overflow-y-auto scrollbar-hide transition-colors duration-1000 ${
              dark === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {chathistory.map((chat, index) => (
              <div key={index}>
                {/* User Prompt */}
                <div className="my-10 flex items-center gap-5">
                  <FaUserCircle className="text-3xl" />
                  <p className="text-xl font-thin font-[poppins]">
                  {chat.user}
                  </p>
                </div>

                {/* Gemini Answer */}
                <div className="flex items-start gap-5">
                  <img
                    src={geminilogo}
                    alt="logo"
                    className="w-8 rounded-full"
                  />
                  <p className="text-lg font-[400] leading-[1.8]">
                  <ReactMarkdown>{chat.answer}</ReactMarkdown> 
                  </p>
                  
                </div>
              </div>
            ))}

            {/* Latest Prompt (if still loading) */}
            {loading && recentPromot && (
              <>
                <div className="my-10 flex items-center gap-5">
                  <FaUserCircle className="text-3xl" />
                  <p className="text-xl font-thin font-[poppins]">
                    {recentPromot}
                  </p>
                </div>
                <div className="flex items-start gap-5">
                  <img
                    src={geminilogo}
                    alt="logo"
                    className="w-8 rounded-full"
                  />
                  <div className="w-full flex flex-col gap-2">
                    <hr className="rounded-md border-none bg-gradient-to-r from-[#81cafe] via-[#fff] to-[#81cafe] p-4 animate-scroll-bg" />
                    <hr className="rounded-md border-none bg-gradient-to-r from-[#81cafe] via-[#fff] to-[#81cafe] p-4 animate-scroll-bg" />
                    <hr className="rounded-md border-none bg-gradient-to-r from-[#81cafe] via-[#fff] to-[#81cafe] p-4 animate-scroll-bg" />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Input Bar */}
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
          <div className="flex items-center justify-between gap-4 bg-gray-200 py-2 px-5 rounded-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="Enter a Prompt here..."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
            />
            <div className="flex items-center gap-4 ">
              {/* <MdAddPhotoAlternate className="text-2xl cursor-pointer" /> */}
              {/* <FaMicrophone className="text-2xl cursor-pointer" /> */}
              <IoMdSend
                className="text-2xl cursor-pointer"
                onClick={handleSend}
              />
            </div>
          </div>
          <p className="text-sm my-1 mx-auto text-center font-[500] text-slate-500">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContant;
