import * as yup from 'yup';
import { withFormik } from 'formik';
import RegisterForm from '../layout/form/RegisterForm';

const regValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "FirstName can't be a letter")
    .max(10, 'FirstName is too long')
    .required('FirstName is required'),
  lastName: yup
    .string()
    .min(2, "LastName can't be a letter")
    .max(10, 'LastName is too long')
    .required('LastName is required'),
  email: yup.string().email('Invalid email').required('email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[^a-zA-Z\d\W]/g, 'Password must alphanumeric')
    .matches(/[^\s]/g, 'Password must not contain whitespace') // Number should not contain whitespace
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm Password'),
  age: yup.number().required().positive().integer(),
  gender: yup.boolean().required(),
});

const Registration = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  validationSchema: regValidationSchema,
  onSubmit: (values) => {
    alert(JSON.stringify(values));
  },
  displayName: 'Register',
})(RegisterForm);

export default Registration;
