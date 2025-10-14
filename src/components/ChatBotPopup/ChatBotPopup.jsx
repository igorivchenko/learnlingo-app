import s from './ChatBotPopup.module.css';
import { useEffect, useRef, useState } from 'react';
import { companyInfo } from './companyInfo';
import ChatToggle from './ChatToggle';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { CHAT_ROLES } from '@/constants';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const ChatBotPopup = () => {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: CHAT_ROLES.MODEL, text: companyInfo },
  ]);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const chatBodyRef = useRef();
  const popupRef = useRef();

  const generateBotResponse = async history => {
    //Helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== 'Thinking...'),
        { role: CHAT_ROLES.MODEL, text, isError },
      ]);
    };

    //Format Chat history for API request
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: formattedHistory,
      }),
    };

    try {
      // Make the API call to get the bot's response
      const res = await fetch(`${API_URL}?key=${API_KEY}`, requestOptions);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error.message || 'Something went wrong!');
      }
      //Clean and update chat history with bot's response
      const apiResponseText = data.candidates[0].content.parts
        .map(p => p.text)
        .join('')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (err) {
      updateHistory(err.message, true);
    }
  };

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    setIsAutoScrolling(true);
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: 'smooth',
    });

    const timeout = setTimeout(() => setIsAutoScrolling(false), 300);
    return () => clearTimeout(timeout);
  }, [chatHistory]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowChatBot(false);
      }
    };

    const handleEscape = e => {
      if (e.key === 'Escape') {
        setShowChatBot(false);
      }
    };

    if (showChatBot) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showChatBot]);

  return (
    <div className={showChatBot ? s.showChatBot : ''} ref={popupRef}>
      <ChatToggle showChatBot={showChatBot} setShowChatBot={setShowChatBot} />
      <div className={s.chatbotPopup}>
        <ChatHeader setShowChatBot={setShowChatBot} />
        <ChatBody
          chatHistory={chatHistory}
          chatBodyRef={chatBodyRef}
          isAutoScrolling={isAutoScrolling}
        />
        <ChatFooter
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
        />
      </div>
    </div>
  );
};

export default ChatBotPopup;
