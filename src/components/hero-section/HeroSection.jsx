import Container from '../container/Container';
import HeroContent from './hero-content/HeroContent';
import HeroImage from './hero-image/HeroImage';
import s from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={s.heroSection} aria-label="Hero section">
      <Container>
        <div className={s.heroWrapper}>
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
