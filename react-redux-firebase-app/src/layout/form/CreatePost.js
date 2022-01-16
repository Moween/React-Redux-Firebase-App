import * as yup from 'yup';
import { withFormik } from 'formik';
import CreatePostForm from './CreatePostForm';

const postValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  details: yup.string().required('Details is required'),
  venue: yup.string().required('Venue is required'),
  eventType: yup.string().required('Event type is required'),
  date: yup.date().required('Event Date is required'),
});

const PostValidation = withFormik({
  mapPropsToValues: () => ({
    title: '',
    details: '',
    venue: '',
    eventType: '',
    date: null,
  }),
  validationSchema: postValidationSchema,
  handleSubmit: async (values, { props, resetForm }) => {
    const { createPost } = props;
    await createPost(values);
    resetForm({ values: '' })
  },
  displayName: 'Create Post',
})(CreatePostForm);

export default PostValidation;
