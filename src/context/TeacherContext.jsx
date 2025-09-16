import { createContext, useContext } from 'react';

const TeacherContext = createContext(null);

export const TeacherProvider = ({ teacher, children }) => (
  <TeacherContext.Provider value={teacher}>{children}</TeacherContext.Provider>
);

export const useTeacher = () => {
  const ctx = useContext(TeacherContext);
  if (!ctx) throw new Error('useTeacher must be used inside TeacherProvider');
  return ctx;
};
