import React from 'react';
import './videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h5>Video title</h5>
        <div className="d-flex justify-content-between align-items-cente py-1">
          <span>
            {numeral(1000).format('0.a')} Views •{' '}
            {moment('2020-06-6').fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <button className="btn border-0 p-2 m-2">Subscribe</button>
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt="logo"
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>KDP</span>
            <span>{numeral(1000).format('0.a')} Subscribers</span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          blanditiis doloremque debitis totam. Quos iste recusandae doloremque
          laboriosam ipsam expedita fuga facere fugiat, enim quasi in libero!
          Quidem, cumque pariatur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit blanditiis doloremque debitis totam.
          Quos iste recusandae doloremque laboriosam ipsam expedita fuga facere
          fugiat, enim quasi in libero! Quidem, cumque pariatur? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis
          doloremque debitis totam. Quos iste recusandae doloremque laboriosam
          ipsam expedita fuga facere fugiat, enim quasi in libero! Quidem,
          cumque pariatur?
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
