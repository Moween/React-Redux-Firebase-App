import * as yup from 'yup';
import { withFormik } from 'formik';
import RegisterForm from '../layout/form/RegisterForm';

const regValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "FullName can't be a letter")
    .required('FullName is required'),
  userName: yup
    .string()
    .min(2, "UserName can't be a letter")
    .max(10, 'UserName is too long')
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
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  validationSchema: regValidationSchema,
  handleSubmit: (values, { props }) => {
    const {userName, email, password} = values;
    const { dispatch, registerUser } = props;
    dispatch(registerUser({ userName, email, password }));
  },
  displayName: 'Register',
})(RegisterForm);

export default Registration;
