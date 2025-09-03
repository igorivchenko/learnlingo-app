import HeroWrapperAnimation from '../animations/HeroWrapperAnimation';
import Container from '../container/Container';
import HeroContent from './hero-content/HeroContent';
import HeroImage from './hero-image/HeroImage';
import s from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={s.heroSection} aria-label="Hero section">
      <Container>
        <div className={s.heroWrapper}>
          <HeroWrapperAnimation
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 80 }}
          >
            <HeroContent />
          </HeroWrapperAnimation>{' '}
          <HeroWrapperAnimation
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -80 }}
          >
            <HeroImage />
          </HeroWrapperAnimation>{' '}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
