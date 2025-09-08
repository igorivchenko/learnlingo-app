import HeroWrapperAnimation from '@/animations/HeroWrapperAnimation';
import s from './HeroSection.module.css';
import Container from '@/components/Container';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

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
          </HeroWrapperAnimation>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
