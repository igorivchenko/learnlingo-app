import s from './ChatToggle.module.css';
import AssistantIcon from '@mui/icons-material/Assistant';
import CloseIcon from '@mui/icons-material/Close';
import clsx from 'clsx';

const ChatToggle = ({ showChatBot, setShowChatBot }) => {
  return (
    <button
      className={clsx(s.chatbotToggler, showChatBot ? s.active : '')}
      onClick={() => setShowChatBot(prev => !prev)}
    >
      <AssistantIcon className={s.icon} fontSize="28" />
      <CloseIcon className={s.iconClose} fontSize="28" />
    </button>
  );
};

export default ChatToggle;
