import { useForm } from 'react-hook-form';
import s from './TeachersFilters.module.css';
import SelectField from './SelectField';
import SlideAnimation from '@/animations/SlideAnimation';

const TeachersFilters = ({ context }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const languageOptions = [
    { value: 'French', label: 'French' },
    { value: 'English', label: 'English' },
    { value: 'German', label: 'German' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Korean', label: 'Korean' },
    { value: 'Vietnamese', label: 'Vietnamese' },
    { value: 'Mandarin Chinese', label: 'Mandarin Chinese' },
  ];
  const priceOptions = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
  ];
  const knowledgeOptions = [
    { value: 'A1 Beginner', label: 'A1 Beginner' },
    { value: 'A2 Elementary', label: 'A2 Elementary' },
    { value: 'B1 Intermediate', label: 'B1 Intermediate' },
    { value: 'B2 Upper-Intermediate', label: 'B2 Upper-Intermediate' },
    { value: 'C1 Advanced', label: 'C1 Advanced' },
    { value: 'C2 Proficient', label: 'C2 Proficient' },
  ];

  return (
    <SlideAnimation
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
    >
      <header>
        <form className={s.form}>
          <SelectField
            label="Languages"
            name="languages"
            options={languageOptions}
            register={register}
            errors={errors}
            context={context}
            sxFormControl={{ minWidth: 221 }}
            sxSelect={{
              backgroundColor: 'var(--color-bg-select)',
              border: 'none',
            }}
          />
          <SelectField
            label="Level of knowledge"
            name="levels"
            options={knowledgeOptions}
            register={register}
            errors={errors}
            context={context}
            sxFormControl={{ minWidth: 198 }}
            sxSelect={{
              backgroundColor: 'var(--color-bg-select)',
              border: 'none',
            }}
          />
          <SelectField
            label="Price"
            name="price_per_hour"
            options={priceOptions}
            register={register}
            errors={errors}
            context={context}
            sxFormControl={{ minWidth: 124 }}
            sxSelect={{
              backgroundColor: 'var(--color-bg-select)',
              border: 'none',
            }}
            defaultValue={priceOptions[2].value}
            showDollar
          />
        </form>
      </header>
    </SlideAnimation>
  );
};

export default TeachersFilters;
