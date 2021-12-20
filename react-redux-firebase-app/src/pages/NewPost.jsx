import React from 'react'
import PostValidation from '../utils/createPost';
import { useDispatch } from 'react-redux';

const NewPost = () => {
  const dispatch = useDispatch();
  return <PostValidation dispatch={dispatch} />;
}

export default NewPost;
