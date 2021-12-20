import * as yup from 'yup';
import { withFormik } from 'formik';
import CreatePost from '../layout/form/CreatePost';

const postValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  details: yup.string().required('Details is required'),
  eventType: yup.string().required('Event type is required'),
});

const PostValidation = withFormik({
  mapPropsToValues: () => ({
    title: '',
    details: '',
    eventType: '',
  }),
  validationSchema: postValidationSchema,
  onSubmit: (values) => {
    alert(JSON.stringify(values));
  },
  displayName: 'Create Post',
})(CreatePost);

export default PostValidation;
