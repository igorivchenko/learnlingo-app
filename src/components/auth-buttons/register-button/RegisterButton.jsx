import s from '@/components/auth-buttons/register-button/RegisterButton.module.css';

const RegisterButton = () => {
  return (
    <button type="button" className={s.button}>
      <span>Registration</span>
    </button>
  );
};

export default RegisterButton;
