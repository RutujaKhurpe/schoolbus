import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch('http://localhost:3001/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`${response.status} ${response.statusText}`);
  //     }
  
  //     const result = await response.json();
  //     console.log('Sign Up successful', result);
  
  //     // Redirect or show success message after signup
  //   } catch (error) {
  //     setError(`Error: ${error.message}`);
  //   }
  // };

  //chatgpt signupcode
  const onSignupSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Sign Up successful', result);
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  //chatgpt loginsubmit code
  const onLoginSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Login successful', result);
      if (result.isAdmin) {
        // Redirect to admin page
        navigate('/admin/*');
      } else {
        setError('You are not authorized to access the admin page.');
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };
  
  // const onLoginSubmit = async (data) => {
  //   try {
  //     const response = await fetch('http://localhost:3001/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`${response.status} ${response.statusText}`);
  //     }
  
  //     const result = await response.json();
  //     console.log('Login successful', result);
  //     if (result.isAdmin) {
  //       // Redirect to admin page
  //     } else {
  //       setError('You are not authorized to access the admin page.');
  //     }
  //   } catch (error) {
  //     setError(`Error: ${error.message}`);
  //   }
  // };
  

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  

  const onSubmit = async (data) => {
    try {
      if (isSignUp) {
        await onSignupSubmit(data);
      } else {
        await onLoginSubmit(data);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        {isSignUp ? 'Sign Up' : 'Login'}
      </Typography>
      <TextField
        fullWidth
        label="Username"
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        })}
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
        sx={{ mt: 2 }}
      />
      {isSignUp && (
        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          {...register('confirmpassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === getValues('password') || 'The passwords do not match',
          })}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword?.message}
          margin="normal"
          sx={{ mt: 2 }}
        />
      )}
      {isSignUp && (
        <FormControlLabel
          control={<Checkbox {...register('isAdmin')} color="primary" />}
          label="Register as Admin"
          sx={{ mt: 1, textAlign: 'left' }}
        />
      )}
      <FormControlLabel
        control={<Checkbox {...register('rememberMe')} color="primary" />}
        label="Remember Me"
        sx={{ mt: 1, textAlign: 'left' }}
      />
      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        {isSignUp ? 'Sign Up' : 'Login'}
      </Button>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" variant="body2" onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Box>
  );
};

export default AuthPage;