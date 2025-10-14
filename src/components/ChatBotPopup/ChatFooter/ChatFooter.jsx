import ChatForm from '@/components/ChatBotPopup/ChatForm';
import s from './ChatFooter.module.css';

const ChatFooter = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  return (
    <div className={s.chatFooter}>
      <ChatForm
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        generateBotResponse={generateBotResponse}
      />
    </div>
  );
};

export default ChatFooter;
