import React from 'react';
import './comment.scss';
import moment from 'moment';

const comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img src="images/avatar.png" alt="" className="rounded-circle mr-3" />
      <div className="comment_body">
        <p className="comment_header mb-1">
          kdp • {moment('2020-05-05').fromNow()}
        </p>
        <p className="mb-0">Nice video DUDE!!!</p>
      </div>
    </div>
  );
};

export default comment;
