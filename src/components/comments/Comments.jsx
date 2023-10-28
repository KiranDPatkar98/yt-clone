import React, { useEffect } from 'react';
import './comments.scss';
import Comment from '../comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import {
  // addComment,
  getCommentsById,
} from '../../redux/slices/getCommentsSlice';

const Comments = ({ videoId, totalComments }) => {
  // const [text, setText] = useState('');
  const dispatch = useDispatch();
  // const handleComment = (e) => {
  //   e.preventDefault();
  //   if (text) {
  //     dispatch(addComment(videoId, text));
  //   }
  // };

  const { comments } = useSelector((state) => state.commentList);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  useEffect(() => {
    dispatch(getCommentsById(videoId));
  }, [dispatch, videoId]);

  return (
    <div className="comments">
      <p>{totalComments} comments</p>
      {/* <div className="comments_form d-flex w-100 my-2">
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2"></button>
        </form>
      </div> */}
      <div className="comments_list">
        {_comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
