import SlideAnimation from '@/animations/SlideAnimation';
import s from './HeroSection.module.css';
import Container from '@/components/Container';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import Section from '@/components/Section';

const HeroSection = () => {
  return (
    <Section className={s.heroSection} aria-label="Hero section">
      <Container>
        <div className={s.heroWrapper}>
          <SlideAnimation
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
          >
            <HeroContent />
          </SlideAnimation>{' '}
          <SlideAnimation
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
          >
            <HeroImage />
          </SlideAnimation>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
