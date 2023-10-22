import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import './video.scss';

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img src="images/youtube.jpg" alt="" />
        <span>05:43</span>
      </div>
      <div className="video_title">Create app in 5 minutes #made by Chintu</div>
      <div className="video_details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span> 5 days ago</span>
      </div>
      <div className="video_channel">
        <img src="images/avatar.png" alt="" />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
};

export default Video;
