import { useState } from 'react';
import s from './AuthModal.module.css';
import { MODES } from '@/constants';
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
  Tooltip,
  tooltipClasses,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInUser, signUpUser } from '@/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { errorToast, successToast } from '@/utils/toastUtils';

const AuthModal = ({ mode = MODES.LOGIN, open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    ...(mode === MODES.REGISTER && {
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

  const onSubmit = async data => {
    const trimmedData = {
      ...data,
      name: data.name?.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    try {
      if (mode === MODES.LOGIN) {
        await dispatch(signInUser(trimmedData)).unwrap();
        successToast('Вхід успішний');
      } else {
        await dispatch(signUpUser(trimmedData)).unwrap();
        successToast('Реєстрація успішна');
      }
      handleClose();
    } catch (err) {
      errorToast(err);
    }
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
          {mode === MODES.LOGIN ? 'Log In' : 'Registration'}
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{
            mb: '40px',
            lineHeight: 1.35,
            color: 'var(--color-description)',
          }}
        >
          {mode === MODES.LOGIN
            ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'
            : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide following information'}
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          {mode === MODES.REGISTER && (
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
                  borderColor: 'var(--color-main)',
                  '& input': {
                    color: 'var(--color-main)',
                  },
                  '& fieldset': {
                    borderColor: 'var(--color-main)',
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
                borderColor: 'var(--color-main)',
                '& input': {
                  color: 'var(--color-main)',
                },
                '& fieldset': {
                  borderColor: 'var(--color-main)',
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
          <FormControl variant="outlined" fullWidth sx={{ mb: '22px' }}>
            <InputLabel
              htmlFor="password"
              color="warning"
              error={!!errors.password}
              sx={{
                color: 'var(--color-main)',
                '&.Mui-focused': { color: 'var(--color-label-accent)' },
                '&.Mui-error': { color: 'var(--color-border-error)' },
              }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              sx={{
                borderRadius: '12px',
                height: '54px',

                // текст інпуту
                '& input': {
                  color: 'var(--color-main) !important',
                },

                // бордери
                '& fieldset': {
                  borderColor: 'var(--color-main)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-border-accent)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-border-accent)',
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-border-error)',
                },
              }}
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              endAdornment={
                <Tooltip
                  title={showPassword ? 'Hide' : 'Show'}
                  placement="top"
                  slotProps={{
                    popper: {
                      sx: {
                        [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                          {
                            marginBottom: '4px',
                          },
                      },
                    },
                  }}
                >
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
                      sx={{
                        color: 'var(--color-main)',
                      }}
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                </Tooltip>
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
              color: 'var(--color-secondary)',
              backgroundColor: 'var(--color-button)',
              borderRadius: '12px',
            }}
          >
            {mode === MODES.LOGIN ? 'Log In' : 'Sign Up'}
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
