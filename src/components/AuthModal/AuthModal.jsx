import { useState } from 'react';
import s from './AuthModal.module.css';
import { MODES } from '@/constants';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grow,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Slide,
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
import { useDispatch, useSelector } from 'react-redux';
import { errorToast, successToast } from '@/utils/toastUtils';
import Loader from '@/components/Loader';
import { selectIsLoading } from '@/redux/auth/selectors';
import { resetFavoritesTeachers } from '@/redux/favorite/slice';
import { authModalSx } from './AuthModal.sx';
import { useResponsive } from '@/hooks/useResponsive';

const AuthModal = ({ mode = MODES.LOGIN, open, handleClose }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const { isMobile } = useResponsive();

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
        successToast('Login successful');
      } else {
        await dispatch(signUpUser(trimmedData)).unwrap();
        successToast('Registration successful');
      }

      dispatch(resetFavoritesTeachers());
      handleClose();
    } catch (err) {
      errorToast(err);
    }
  };

  const ModalContent = (
    <Box className={s.modal}>
      <Typography
        sx={authModalSx.modalTitle}
        className={s.title}
        id="modal-modal-title"
        component="h2"
      >
        {mode === MODES.LOGIN ? 'Log In' : 'Registration'}
      </Typography>

      <Typography
        id="modal-modal-description"
        sx={authModalSx.modalDescription}
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
            sx={authModalSx.textField}
          />
        )}
        <TextField
          label="Email"
          fullWidth
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={authModalSx.textField}
        />
        <FormControl variant="outlined" fullWidth sx={{ mb: '22px' }}>
          <InputLabel
            htmlFor="password"
            color="warning"
            error={!!errors.password}
            sx={authModalSx.passwordLabel}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            sx={authModalSx.passwordInput}
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
                    sx={authModalSx.passwordIcon}
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
          sx={authModalSx.submitButton}
        >
          {isLoading ? (
            <Loader height={22} width={3} margin={1.5} />
          ) : mode === MODES.LOGIN ? (
            'Log In'
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>

      <button type="button" className={s['close-button']} onClick={handleClose}>
        <svg width="32" height="32">
          <use href="/icons.svg#icon-close"></use>
        </svg>
      </button>
    </Box>
  );

  return (
    <Modal open={open} onClose={handleClose} sx={authModalSx.modal}>
      {isMobile ? (
        <Slide direction="right" in={open} mountOnEnter unmountOnExit>
          <Box sx={authModalSx.modalBox}>{ModalContent}</Box>
        </Slide>
      ) : (
        <Grow in={open} timeout={200}>
          <Box sx={authModalSx.modalBox}>{ModalContent}</Box>
        </Grow>
      )}
    </Modal>
  );
};

export default AuthModal;
