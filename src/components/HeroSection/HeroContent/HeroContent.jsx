import HeroButton from '@/components/HeroSection/HeroButton';
import s from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={s.heroContentWrapper}>
      <h1 className={s.title}>
        Unlock your potential with the best <i className={s.italic}>language</i>{' '}
        tutors
      </h1>
      <p className={s.description}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <HeroButton />
    </div>
  );
};

export default HeroContent;
