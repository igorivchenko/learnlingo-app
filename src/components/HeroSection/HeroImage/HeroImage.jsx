import s from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <img
      className={s.image}
      src="/images/hero-img.png"
      width={568}
      height={493}
      alt="Hero section illustration"
    />
  );
};

export default HeroImage;
