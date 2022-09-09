import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  username: yup.string().required('User name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
