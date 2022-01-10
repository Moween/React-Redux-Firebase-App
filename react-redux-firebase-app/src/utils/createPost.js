import * as yup from 'yup';
import { withFormik } from 'formik';
import CreatePost from '../layout/form/CreatePost';
import { createPost } from '../reducers/createPostSlice';

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
  handleSubmit: (values, { props }) => {
    // pass in dispatch as props
    props.dispatch(createPost(values));
  },
  displayName: 'Create Post',
})(CreatePost);

export default PostValidation;
