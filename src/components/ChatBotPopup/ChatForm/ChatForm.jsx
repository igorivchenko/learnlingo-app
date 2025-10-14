import { useForm } from 'react-hook-form';
import s from './ChatForm.module.css';
import { CHAT_ROLES } from '@/constants';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const userMessage = data.message.trim();
    if (!userMessage) return;

    reset();

    setChatHistory(history => [
      ...history,
      { role: CHAT_ROLES.USER, text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory(history => [
        ...history,
        { role: CHAT_ROLES.MODEL, text: 'Thinking...' },
      ]);

      generateBotResponse([
        ...chatHistory,
        {
          role: CHAT_ROLES.USER,
          text: `Using the details provided above, please address this query: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form className={s.chatForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('message', { required: true })}
        className={s.messageInput}
        type="text"
        placeholder="Message..."
        autoComplete="off"
        required
      />
      <button type="submit" className={s.footerBtn}>
        <svg width="25" height="25">
          <use href="/icons.svg#send-icon"></use>
        </svg>
      </button>
    </form>
  );
};

export default ChatForm;
