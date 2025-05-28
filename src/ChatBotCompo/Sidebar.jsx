import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { IoMenuSharp, IoSettings } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { Context } from "../context/context";
const Sidebar = () => {
  const { onSent, prevePromot, setprevePromot,setchathistory,setrecentPromot, dark } =
    useContext(Context);
  const [extended, setextended] = useState(false);
  const ClearHistory = () => {
    setprevePromot([]);
    setchathistory([])
  };
  // console.log(typeof prevePromot);
  return (
    <>
      <div
        className={`min-h-screen inline-flex flex-col justify-between bg-[#e4e7eb] py-[25px] px-[15px] ${
          dark === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } transition-colors duration-1000`}
      >
        <div>
          <IoMenuSharp
            className="block cursor-pointer text-2xl "
            onClick={() => setextended(!extended)}
          />

          {extended && (
            <div className="flex flex-col">
              <p className="mt-7 mb-5">Recent</p>
              {prevePromot.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 items-center p-2 rounded-lg"
                  >
                    <FiMessageSquare
                      className={`text-2xl ${
                        dark === "dark"
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-900"
                      } transition-colors duration-1000`}
                    />

                    {item.length > 15 ? (
                      <p> {item.slice(0, 15)} ...</p>
                    ) : (
                      <p
                        className={`${
                          dark === "dark"
                            ? "bg-gray-900 text-white"
                            : "bg-white text-gray-900"
                        } transition-colors duration-1000`}
                      >
                        {item}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => ClearHistory()}
            className={`flex gap-2 items-center p-2 rounded-lg cursor-pointer ${
              dark === "dark"
                ? "bg-gray-900 text-white hover:bg-slate-700 "
                : "bg-white text-gray-900 hover:bg-gray-300 "
            }  transition-colors duration-1000`}
          >
            <FaPlus className="text-2xl" />
            {extended && <p>New Chat</p>}
          </div>
          <div
            className={`flex gap-2 items-center p-2 rounded-lg cursor-pointer ${
              dark === "dark"
                ? "bg-gray-900 text-white hover:bg-slate-700 "
                : "bg-white text-gray-900 hover:bg-gray-300 "
            } transition-colors duration-1000`}
          >
            <FaQuestion className="text-2xl" />
            {extended && <p>Help</p>}
          </div>
          <div
            className={`flex gap-2 items-center p-2 rounded-lg cursor-pointer ${
              dark === "dark"
                ? "bg-gray-900 text-white hover:bg-slate-700 "
                : "bg-white text-gray-900 hover:bg-gray-300 "
            } transition-colors duration-1000`}
          >
            <MdHistory className="text-2xl" />
            {extended && <p>Activity</p>}
          </div>
          <div
            className={`flex gap-2 items-center p-2 rounded-lg cursor-pointer ${
              dark === "dark"
                ? "bg-gray-900 text-white hover:bg-slate-700 "
                : "bg-white text-gray-900 hover:bg-gray-300 "
            } transition-colors duration-1000`}
          >
            <IoSettings className="text-2xl" />
            {extended && <p>Settings</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
