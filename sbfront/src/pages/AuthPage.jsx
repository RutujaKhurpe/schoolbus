import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to track whether to show login or sign up form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

//   const onSubmit = (data) => {
//     // Add your login or sign-up logic here using the data object
//     if (isSignUp) {
//       console.log('Sign Up successful', data);
//     } else {
//       console.log('Login successful', data);
//     }
//   };

//chatgpt code
const onSubmit = (data) => {
    // Add your login or sign-up logic here using the data object
    if (isSignUp) {
      console.log('Sign Up successful', data);
      axios.post('http://localhost:3001/signup', data)
        .then(response => {
          console.log(response.data);
          // Handle success response
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error response
        });
    } else {
      console.log('Login successful', data);
      // You can make a login request here if needed
    }
  };
  

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between login and sign up forms
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
          {...register('confirmPassword', {
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
      <FormControlLabel
        control={<Checkbox {...register('rememberMe')} color="primary" />}
        label="Remember Me"
        sx={{ mt: 1, textAlign: 'left' }}
      />
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