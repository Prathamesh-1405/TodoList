import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please Enter Name!')
    .matches(/^[A-Za-z\s]+$/, 'Name should only contain alphabets and spaces'),

  username: Yup.string().required('Please Enter Username!'),

  password: Yup.string()
    .required('Please Enter Password!')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),

  confirmPassword: Yup.string()
    .required('Please Enter Confirm Password!')
    .oneOf([Yup.ref('password')], 'Password and Confirm Password must be same!')
});
