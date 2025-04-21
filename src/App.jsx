import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-pop">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 😎 <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
              I want to find all the things that you have to offer at this very
              instance without any delay!!!!
            </p>
          </div>
        </div>
        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default App;
