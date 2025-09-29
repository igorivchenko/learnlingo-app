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
                control={
                  <Radio
                    sx={{
                      color: 'var(--color-book-trial-form-border)',
                      '&.Mui-checked': { color: 'var(--color-border-accent)' },
                    }}
                  />
                }
                label="Career and business"
              />
              <FormControlLabel
                value="kids"
                control={
                  <Radio
                    sx={{
                      color: 'var(--color-book-trial-form-border)',
                      '&.Mui-checked': { color: 'var(--color-border-accent)' },
                    }}
                  />
                }
                label="Lesson for kids"
              />
              <FormControlLabel
                value="living_abroad"
                control={
                  <Radio
                    sx={{
                      color: 'var(--color-book-trial-form-border)',
                      '&.Mui-checked': { color: 'var(--color-border-accent)' },
                    }}
                  />
                }
                label="Living abroad"
              />
              <FormControlLabel
                value="exams"
                control={
                  <Radio
                    sx={{
                      color: 'var(--color-book-trial-form-border)',
                      '&.Mui-checked': { color: 'var(--color-border-accent)' },
                    }}
                  />
                }
                label="Exams and coursework"
              />
              <FormControlLabel
                value="culture_hobby"
                control={
                  <Radio
                    sx={{
                      color: 'var(--color-book-trial-form-border)',
                      '&.Mui-checked': { color: 'var(--color-border-accent)' },
                    }}
                  />
                }
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
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            height: '54px',
            borderColor: 'var(--color-border-input)',
            '& input': {
              color: 'var(--color-main)',
            },
            '& fieldset': {
              borderColor: 'var(--color-border-input)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-border-accent)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-border-accent)',
            },
            '&.Mui-error fieldset': {
              borderColor: 'var(--color-border-error)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--color-main)',
            '&.Mui-error': {
              color: 'var(--color-label-error)',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--color-label-accent)',
            '&.Mui-error': {
              color: 'var(--color-label-error)',
            },
          },
        }}
      />
      <TextField
        label="Email"
        fullWidth
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            height: '54px',
            borderColor: 'var(--color-border-input)',
            '& input': {
              color: 'var(--color-main)',
            },
            '& fieldset': {
              borderColor: 'var(--color-border-input)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-border-accent)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-border-accent)',
            },
            '&.Mui-error fieldset': {
              borderColor: 'var(--color-border-error)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--color-main)',
            '&.Mui-error': {
              color: 'var(--color-label-error)',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--color-label-accent)',
            '&.Mui-error': {
              color: 'var(--color-label-error)',
            },
          },
        }}
      />
      <TextField
        label="Phone number"
        fullWidth
        type="tel"
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        sx={{
          '& .MuiOutlinedInput-root': {
            position: 'relative',
            marginBottom: '20px',
            borderRadius: '12px',
            height: '54px',
            borderColor: 'var(--color-border-input)',
            '& input': {
              color: 'var(--color-main)',
            },
            '& fieldset': {
              borderColor: 'var(--color-border-input)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-border-accent)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-border-accent)',
            },
            '&.Mui-error fieldset': {
              borderColor: 'var(--color-border-error)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--color-main)',
            '&.Mui-error': {
              color: 'var(--color-label-error)',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--color-label-accent)',
            '&.Mui-error': {
              color: 'var(--color-label-error)',
            },
          },
          '& .MuiFormHelperText-root': {
            position: 'absolute',
            bottom: 0,
            left: 0,
            lineHeight: 1.2,
            pointerEvents: 'none',
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          height: '60px',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: 1.5,
          textTransform: 'capitalize',
          color: 'var(--color-secondary)',
          backgroundColor: 'var(--color-button)',
          borderRadius: '12px',
        }}
      >
        {isLoading && <Loader height={22} width={3} margin={1.5} />}
        Book
      </Button>
    </form>
  );
};

export default BookTrialForm;
