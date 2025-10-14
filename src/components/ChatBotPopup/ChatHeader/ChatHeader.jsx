import s from './ChatHeader.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ChatHeader = ({ setShowChatBot }) => {
  return (
    <div className={s.chatHeader}>
      <div className={s.headerInfo}>
        <svg width="35" height="35">
          <use href="/icons.svg#chat-icon"></use>
        </svg>
        <h2 className={s.logoText}>AI assistant</h2>
      </div>
      <button className={s.headerBtn} onClick={() => setShowChatBot(p => !p)}>
        <KeyboardArrowDownIcon />
      </button>
    </div>
  );
};

export default ChatHeader;
