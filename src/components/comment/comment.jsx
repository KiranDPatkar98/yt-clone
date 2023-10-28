import React from 'react';
import './comment.scss';
import moment from 'moment';

const comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
  return (
    <div className="comment p-2 d-flex">
      <img
        src={authorProfileImageUrl}
        alt="user-profile"
        className="rounded-circle mr-3"
      />
      <div className="comment_body">
        <p className="comment_header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default comment;
