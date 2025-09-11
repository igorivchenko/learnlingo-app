const Section = ({ title, className, children }) => {
  return (
    <section className={className}>
      {title && <h2 className="visually-hidden">{title}</h2>} {children}
    </section>
  );
};

export default Section;
