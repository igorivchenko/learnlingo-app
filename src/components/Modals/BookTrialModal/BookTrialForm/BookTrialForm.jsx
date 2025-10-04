import s from './BookTrialForm.module.css';
import {
  Button,
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorToast, successToast } from '@/utils/toastUtils';
import Loader from '@/components/Loader';
import { selectIsLoading } from '@/redux/auth/selectors';
import { bookTrialFormSx } from './BookTrialForm.sx';

const BookTrialForm = ({ handleClose }) => {
  const isLoading = useSelector(selectIsLoading);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(50, 'Name must be at most 50 characters'),
    email: Yup.string()
      .trim()
      .required('Email is required')
      .email('Invalid email address')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please enter a valid email address'
      ),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\+1\d{10}$/, 'Phone must be in format +1XXXXXXXXXX'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    try {
      console.log(data);
      successToast('Your trial lesson has been successfully booked!');
      handleClose();
    } catch (err) {
      errorToast(err);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.title}>
        What is your main reason for learning English?
      </h3>
      <Controller
        name="reason"
        control={control}
        defaultValue="career"
        rules={{ required: 'Please select a reason' }}
        render={({ field }) => (
          <FormControl component="fieldset" sx={{ width: 'max-content' }}>
            <RadioGroup {...field}>
              <FormControlLabel
                value="career"
                control={<Radio sx={bookTrialFormSx.radio} />}
                label="Career and business"
              />
              <FormControlLabel
                value="kids"
                control={<Radio sx={bookTrialFormSx.radio} />}
                label="Lesson for kids"
              />
              <FormControlLabel
                value="living_abroad"
                control={<Radio sx={bookTrialFormSx.radio} />}
                label="Living abroad"
              />
              <FormControlLabel
                value="exams"
                control={<Radio sx={bookTrialFormSx.radio} />}
                label="Exams and coursework"
              />
              <FormControlLabel
                value="culture_hobby"
                control={<Radio sx={bookTrialFormSx.radio} />}
                label="Culture, travel or hobby"
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <TextField
        label="Full Name"
        fullWidth
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
        sx={bookTrialFormSx.textField}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={bookTrialFormSx.textField}
      />
      <TextField
        label="Phone number"
        fullWidth
        type="tel"
        placeholder="+1XXXXXXXXXX"
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        sx={bookTrialFormSx.textFieldPhone}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={bookTrialFormSx.submitButton}
      >
        {isLoading && <Loader height={22} width={3} margin={1.5} />}
        Book
      </Button>
    </form>
  );
};

export default BookTrialForm;
