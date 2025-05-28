import { createContext, useState } from "react";
import run from "../config/gemini";
// import { load } from "mime";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [input, setinput] = useState("");
  const [recentPromot, setrecentPromot] = useState("");
  const [prevePromot, setprevePromot] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [chathistory , setchathistory] = useState([])
  const [resultdata, setresultdata] = useState("");
  const [dark , setdark] = useState('dark')


// console.log(chathistory)
  const onSent = async (prompt) => {
    setresultdata("");
    setloading(true);
    setshowresult(true);
    setrecentPromot(input);
    setprevePromot((prev) => [...prev , input])
    const response = await run(prompt);
    setchathistory((prev) => [...prev,{user:input , answer:response}])
    setresultdata(response);

    setinput("");
    setloading(false);
  };

  const contextvalue = {
    input,
    setinput,
    recentPromot,
    setrecentPromot,
    prevePromot,
    setprevePromot,
    showresult,
    loading,
    resultdata,
    chathistory,
    setchathistory,
    onSent,
    dark,
    setdark,
 };

  return <Context.Provider value={contextvalue}>{children}</Context.Provider>;
};
