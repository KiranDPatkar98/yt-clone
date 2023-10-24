import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './watchScreen.scss';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreenPlayer">
          <iframe
            src=""
            frameBorder={0}
            title="video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
