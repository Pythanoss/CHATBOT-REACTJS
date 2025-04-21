import { useRef } from "react";

const ChatForm = ({setChatHistory}) => {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        setChatHistory((prev) => [...prev,{role:'user',text:userMessage}]);
        console.log(userMessage);
    }

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
      ref={inputRef}
        type="text"
        className="message-input"
        placeholder="Message..."
        required
      />
      <button className="material-symbols-rounded">keyboard_arrow_up</button>
    </form>
  );
};

export default ChatForm;
