import s from '@/components/auth-modal/AuthModal.module.css';
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInUser, signUpUser } from '@/redux/auth/operations';
import { useDispatch } from 'react-redux';

const AuthModal = ({ mode = 'login', open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    ...(mode === 'register' && {
      name: Yup.string()
        .required('Name is required')
        .max(50, 'Name must be at most 50 characters'),
    }),
    email: Yup.string()
      .trim()
      .required('Email is required')
      .email('Invalid email address')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please enter a valid email address'
      ),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = data => {
    const trimmedData = {
      ...data,
      name: data.name?.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    mode === 'login'
      ? dispatch(signInUser(trimmedData))
      : dispatch(signUpUser(trimmedData));
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={s.modal}>
        <Typography
          sx={{
            mb: '20px',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'var(--color-main)',
          }}
          className={s.title}
          id="modal-modal-title"
          component="h2"
        >
          {mode === 'login' ? 'Log In' : 'Registration'}
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{
            mb: '40px',
            lineHeight: 1.35,
            color: 'rgba(18, 20, 23, 0.8)',
          }}
        >
          {mode === 'login'
            ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'
            : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide following information'}
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          {mode === 'register' && (
            <TextField
              label="Name"
              fullWidth
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  height: '54px',
                },
              }}
              color="warning"
            />
          )}
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
              },
            }}
            color="warning"
          />
          <FormControl variant="outlined" fullWidth sx={{ mb: '22px' }}>
            <InputLabel
              htmlFor="password"
              color="warning"
              error={!!errors.password}
            >
              Password
            </InputLabel>
            <OutlinedInput
              color="warning"
              id="password"
              sx={{ height: '54px', borderRadius: '12px' }}
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={() => setShowPassword(show => !show)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={!!errors.password}
            />
            {errors.password && (
              <FormHelperText id="component-error-text" error>
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
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
              color: 'var(--color-main)',
              backgroundColor: 'var(--color-button)',
              borderRadius: '12px',
            }}
          >
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </Button>
        </form>
        <button
          type="button"
          className={s['close-button']}
          onClick={handleClose}
        >
          <svg width={32} height={32}>
            <use href="/icons.svg#icon-close"></use>
          </svg>
        </button>
      </Box>
    </Modal>
  );
};

export default AuthModal;
