import Container from '../container/Container';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          <ul className={s.list}>
            <li className={s.item}>
              <span className={s.integer}>32 000 +</span>
              <span className={s.text}>Experienced tutors</span>
            </li>
            <li className={s.item}>
              <span className={s.integer}>300,000 +</span>
              <span className={s.text}>5-star tutor reviews</span>
            </li>
            <li className={s.item}>
              <span className={s.integer}>120 +</span>
              <span className={s.text}>Subjects taught</span>
            </li>
            <li className={s.item}>
              <span className={s.integer}>200 +</span>
              <span className={s.text}>Tutor nationalities</span>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
