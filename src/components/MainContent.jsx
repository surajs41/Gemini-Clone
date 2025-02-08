import React, { useContext } from 'react'
import { FaUserCircle } from "react-icons/fa";  // Only import once
import { FaRegCompass } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { MdHelpOutline } from 'react-icons/md';
import { FaReact } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Context } from '../context/Context';
import geminiLogo from "../assets/geminiLogo.png";


const MainContent = () => {
  const{
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context)

  return <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-x1 p-5 text-slate-700">
        <p>Gemini</p>
        <FaUserCircle />
      </div>

      <div className="max-w-[900px] mx-auto">

        {!showResult ? (
          <>
          <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
          <p>
            <span className="bg-gradient-to-r from-[#368add] to-[#ff5546] bg-clip-text text-transparent">Hello, Suraj.</span>
          </p>
          <p className="text-gray-400">
            How can I help you today?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">What are the best tips to improve my public speaking skills?</p>
            <FaRegCompass className="text-4xl p-1 absolute bottom-2 right-2"/>
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">Which came first: the chicken or the egg?</p>
            <FaRegLightbulb className="text-4xl p-1 absolute bottom-2 right-2"/>
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">What is the capital of India?</p>
            <MdHelpOutline className="text-4xl p-1 absolute bottom-2 right-2"/>
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">What is ReactJs?</p>
            <FaReact className="text-4xl p-1 absolute bottom-2 right-2"/>
          </div>
        </div> 
        </> 
        ): (
        <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
          <div className="my-10 mx-0 flex items-center gap-5">
          <FaUserCircle className="text-3xl"/>

          <p>{recentPrompt}</p>
          </div>
          <div className="flex items- gap-5">
            <img src={geminlogo} alt="" className="w-8 rounded-[50%]"/>
            <p>{resultData}</p>
          </div>
        </div>
        )}
        
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
          <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
            <input type="text" placeholder="Enter prompt here..." className="flex-1 bg-transparent border-none outline-none p-2 text-lg" value={input}
            onChange={(e) => setInput(e.target.value)}/>
            <div className="flex gap-4 items-center">
            <MdAddPhotoAlternate className="text-2xl cursor-pointer" />
            <FaMicrophone className="text-2xl cursor-pointer"  />
            <IoMdSend onClick={() => onSent(input)} className="text-2xl cursor-pointer"  />
            </div>
          </div>
          <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
              Gemini may display inaccurate info, including about people, so double-check its responses.
            </p>
        </div>
      </div>
    </div>
  
}

export default MainContent;
