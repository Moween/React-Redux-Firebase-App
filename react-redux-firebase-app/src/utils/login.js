import * as yup from 'yup';
import { withFormik } from 'formik';
import LoginForm from '../layout/form/LoginForm';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: loginValidationSchema,
  handleSubmit: (values, { props }) => {
    props.dispatch((values));
  },
  displayName: 'Login'
})(LoginForm);

export default Login;
