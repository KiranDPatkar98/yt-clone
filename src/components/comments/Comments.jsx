import React from 'react';
import './comments.scss';
import Comment from '../comment/comment';

const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1234 comments</p>
      <div className="comments_form d-flex w-100 my-2">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment"
          />
          <button className="border-0 p-2"></button>
        </form>
      </div>
      <div className="comments_list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
