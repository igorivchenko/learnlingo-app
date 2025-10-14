import clsx from 'clsx';
import s from './ChatMessage.module.css';
import { CHAT_ROLES } from '@/constants';

const ChatMessage = ({ chat }) => {
  const isUser = chat.role === CHAT_ROLES.USER;

  return (
    !chat.hideInChat && (
      <div
        className={clsx(
          s.message,
          isUser ? s.userMessage : s.botMessage,
          chat.isError ? s.errorMessage : ''
        )}
      >
        {chat.role === CHAT_ROLES.MODEL && (
          <svg width="35" height="35">
            <use href="/icons.svg#chat-icon"></use>
          </svg>
        )}
        <p className={clsx(s.messageText, isUser ? s.userText : s.botText)}>
          {chat.text}
        </p>
      </div>
    )
  );
};

export default ChatMessage;
