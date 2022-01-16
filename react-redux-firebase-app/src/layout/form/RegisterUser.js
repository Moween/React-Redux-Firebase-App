import * as yup from 'yup';
import { withFormik } from 'formik';
import RegisterForm from './RegisterForm';

const regValidationSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "UserName can't be a letter")
    .max(20, 'UserName is too long')
    .required('UserName is required'),
  email: yup.string().email('Invalid email').required('email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[^\s]/g, 'Password must not contain whitespace') // Number should not contain whitespace
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm Password'),
});

const Registration = withFormik({
  mapPropsToValues: () => ({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  validationSchema: regValidationSchema,
  handleSubmit: async (values, { props }) => {
    const { userName: username, email, password } = values;
    const { registerUser } = props;
    await registerUser({ username, email, password });
  },
  displayName: 'Register',
})(RegisterForm);

export default Registration;
