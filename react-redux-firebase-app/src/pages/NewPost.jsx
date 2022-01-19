import React from 'react';
import { toast } from 'react-toastify';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CreatePost from '../layout/form/CreatePost';

const NewPost = () => {
  const firestore = useFirestore();
  const navigate = useNavigate();
  const { uid } = useSelector((state) => state.firebase.auth);
  const { username } = useSelector((state) => state.firebase.profile);

  const createPost = async (post) => {
    try {
      const timestamp = firestore.Timestamp.fromDate(new Date());
      await firestore
        .collection('events')
        .doc(uid)
        .collection('events')
        .add({ ...post, createdAt: timestamp, postedBy: username });
      toast.success('Post created');
      navigate('/');
    } catch (error) {
      const errorMsg = error.message
        .replace(')', '')
        .replace(/-/g, ' ')
        .split('/')
        .pop();
      toast.error(errorMsg);
    }
  };

  return <CreatePost createPost={createPost} />;
};

export default NewPost;
