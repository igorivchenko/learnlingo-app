import s from './TeacherHeaderList.module.css';

const TeacherHeaderList = ({ value }) => {
  const items = [
    {
      icon: (
        <svg width="16" height="16" style={{ fill: 'none', stroke: 'black' }}>
          <use href="/icons.svg#icon-book-open"></use>
        </svg>
      ),
      label: 'Lessons online',
    },
    {
      label: 'Lessons done:',
    },
    {
      icon: (
        <svg width="16" height="16">
          <use href="/icons.svg#icon-rating"></use>
        </svg>
      ),
      label: 'Rating:',
    },
    {
      label: 'Price / 1 hour:',
    },
  ];

  return (
    <ul className={s.headerList}>
      {items.map(({ icon, label }, idx) => (
        <li className={s.headerItem} key={idx}>
          {icon}
          <span className={s.label}>{label}</span>
          <span className={s.value}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default TeacherHeaderList;
