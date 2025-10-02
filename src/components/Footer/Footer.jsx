import s from './Footer.module.css';
import CounterAnimation from '@/animations/CounterAnimation';
import Container from '@/components/Container';

const Footer = () => {
  const items = [
    { label: 'Experienced tutors', value: 32_000, suffix: '+' },
    { label: '5-star tutor reviews', value: 300_000, suffix: '+' },
    { label: 'Subjects taught', value: 120, suffix: '+' },
    { label: 'Tutor nationalities', value: 200, suffix: '+' },
  ];

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          <ul className={s.list}>
            {items.map(({ label, value, suffix }) => (
              <li className={s.item} key={label}>
                <span className={s.integer}>
                  <CounterAnimation to={value} suffix={suffix} />
                </span>
                <span className={s.text}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
