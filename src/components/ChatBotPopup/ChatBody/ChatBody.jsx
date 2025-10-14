import ChatMessage from '@/components/ChatBotPopup/ChatMessage';
import s from './ChatBody.module.css';
import clsx from 'clsx';
import ScrollDownButton from '@/components/Buttons/ScrollDownButton';

const ChatBody = ({ chatHistory, chatBodyRef, isAutoScrolling }) => {
  return (
    <div className={s.chatBody} ref={chatBodyRef}>
      <div className={clsx(s.botMessage)}>
        <svg width="35" height="35">
          <use href="/icons.svg#chat-icon"></use>
        </svg>
        <p className={s.messageText}>
          Hi there! 👋 <br /> I'm your AI assistant. How can I help you today?
        </p>
      </div>
      {chatHistory.map((chat, idx) => (
        <ChatMessage key={idx} chat={chat} />
      ))}
      <ScrollDownButton
        containerRef={chatBodyRef}
        isAutoScrolling={isAutoScrolling}
      />
    </div>
  );
};

export default ChatBody;
