import { useEffect, useRef } from 'react';
import HeroButton from '../hero-button/HeroButton';
import s from './HeroContent.module.css';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const HeroContent = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const runAnimation = () => {
      if (!titleRef.current || !subtitleRef.current) return;

      titleRef.current.classList.remove(s.hiddenText);
      subtitleRef.current.classList.remove(s.hiddenText);

      const splitTitle = new SplitText(titleRef.current, {
        type: 'chars, words',
      });
      const splitSubtitle = new SplitText(subtitleRef.current, {
        type: 'chars, words',
      });

      gsap.from(splitTitle.chars, {
        x: 100,
        opacity: 0,
        duration: 0.6,
        ease: 'power4.out',
        stagger: 0.05,
      });

      gsap.from(splitSubtitle.chars, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: 'power4.out',
        stagger: 0.03,
        delay: 0.5,
      });

      return () => {
        splitTitle.revert();
        splitSubtitle.revert();
      };
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runAnimation);
    } else {
      runAnimation();
    }
  }, []);

  return (
    <div className={s.heroContentWrapper}>
      <h1 ref={titleRef} className={s.title}>
        Unlock your potential with the best <i className={s.italic}>language</i>{' '}
        tutors
      </h1>
      <p ref={subtitleRef} className={s.description}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <HeroButton />
    </div>
  );
};

export default HeroContent;
