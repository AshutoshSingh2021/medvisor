import { useState } from "react";
import Chatlog from "./Chatlog";
import ChatlogAI from "./ChatlogAI";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "You",
      message: "How are you?",
    },
    {
      user: "Medvisor",
      message: "Hello welcome to Medvisor. How may I help you?",
    },
  ]);
  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "You", message: `${input}` }]);
    setInput("");
  }
  return (
    <div className="w-full h-screen bg-[#E1F0DA] flex justify-center relative">
      <div className="w-[100%] md:w-[55%] chatbox overflow-auto h-[85%] mt-[8px]">
        {chatLog.map((message, index) =>
          message.user == "Medvisor" ? (
            <ChatlogAI key={index} message={message}></ChatlogAI>
          ) : (
            <Chatlog key={index} message={message} />
          )
        )}
      </div>
      {/* chat input holder */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center p-[12px] absolute inset-x-0 bottom-0 mb-[40px]"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={"1"}
          className="w-[100%] md:w-[60%] bg-[#507554]  placeholder-[#F5EFE6] outline-none rounded-xl shadow-white shadow margin-[12px] px-[30px] py-[10px] pt-[7px] text-lg text-white border-[#dbdbda] border-spacing-10 border-4"
          placeholder="Enter your message here"
        ></input>
      </form>
      {/* warning message */}

      <div className="text-xs md:text-sm flex justify-center absolute inset-x-0 bottom-0 mb-[20px] ">
        <p>
          Note: Medvisor can make mistakes. Consult doctors for critical
          information.
        </p>
      </div>
    </div>
  );
};
export default ChatBot;
