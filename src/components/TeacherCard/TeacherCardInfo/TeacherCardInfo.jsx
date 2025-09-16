import { useTeacher } from '@/context/TeacherContext';
import s from './TeacherCardInfo.module.css';
import { motion } from 'motion/react';

const TeacherCardInfo = () => {
  const { languages, lesson_info, conditions } = useTeacher();

  const formatValue = value => {
    if (Array.isArray(value)) return value.join(', ');
    return value || '';
  };

  const items = [
    { label: 'Speaks: ', value: formatValue(languages) },
    { label: 'Lesson Info: ', value: formatValue(lesson_info) },
    { label: 'Conditions: ', value: formatValue(conditions) },
  ];

  return (
    <ul className={s.list}>
      {items.map(({ label, value }, idx) => (
        <motion.li
          className={s.item}
          key={idx}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.3 }}
          viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.value}>{value}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default TeacherCardInfo;
