import * as yup from 'yup';
import { withFormik } from 'formik';
import LoginForm from './LoginForm';

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
  handleSubmit: async (values, { props }) => {
    const { loginUser } = props;
    await loginUser(values);
  },
  displayName: 'Login'
})(LoginForm);

export default Login;
