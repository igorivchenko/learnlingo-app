import { useForm } from 'react-hook-form';
import s from './TeachersFilters.module.css';
import SelectField from './SelectField';
import SlideAnimation from '@/animations/SlideAnimation';

const TeachersFilters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      language: 'english',
      knowledge: 'A1 Beginner',
      price: '30',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  const languageOptions = [
    { value: 'french', label: 'French' },
    { value: 'english', label: 'English' },
    { value: 'german', label: 'German' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'italian', label: 'Italian' },
    { value: 'korean', label: 'Korean' },
    { value: 'vietnamese', label: 'Vietnamese' },
    { value: 'chinese', label: 'Mandarin Chinese' },
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
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <SelectField
            label="Languages"
            name="language"
            options={languageOptions}
            register={register}
            errors={errors}
            placeholder="French"
            sxFormControl={{ minWidth: 221 }}
            sxSelect={{
              backgroundColor: 'var(--color-bg-select)',
              border: 'none',
            }}
          />
          <SelectField
            label="Level of knowledge"
            name="knowledge"
            options={knowledgeOptions}
            register={register}
            errors={errors}
            sxFormControl={{ minWidth: 198 }}
            sxSelect={{
              backgroundColor: 'var(--color-bg-select)',
              border: 'none',
            }}
          />
          <SelectField
            label="Price"
            name="price"
            options={priceOptions}
            register={register}
            errors={errors}
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
