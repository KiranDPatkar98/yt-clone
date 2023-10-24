import React from 'react';
import './videoHorizontal.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import { Row, Col } from 'react-bootstrap';

const VideoHorizontal = () => {
  const seconds = moment.duration('100').asSeconds();
  const duration = moment.utc(seconds * 100).format('mm:ss');
  return (
    <Row classNAme="videoHorizontal m-1 py-2 align align-items-center">
      <Col xs={6} md={4} className="videoHorizontal_left">
        <LazyLoadImage
          src="images/avatar.png"
          effect="blur"
          className="videoHorizontal-thumbnail"
          wrapperClassName="videoHorizontal_thumbnail-rapper"
        />
        <span className="video_top_duration">{duration}</span>
      </Col>
      <Col xs={6} md={4} className="videoHorizontal_right p-0">
        <p className="videoHorizontal_title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div className="videoHorizontal_details">
          <AiFillEye />
          {numeral(100000).format('0.a')} Views •
          {moment('2020-06-09').fromNow()}
        </div>
        <div className="videoHorizontal_channel d-flex align-items-center my-1">
          <p>KDP</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
