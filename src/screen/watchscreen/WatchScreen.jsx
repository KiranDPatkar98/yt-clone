import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './watchScreen.scss';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getvideoInformation } from '../../redux/slices/videoInformationSlice';
import { getRelatedVideos } from '../../redux/slices/getRelatedVideoSlice';

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getvideoInformation(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  const { relatedVideo: videos, loaing: relatedLoading } = useSelector(
    (state) => state.relatedVideos
  );

  console.log(videos, 'imhgfhgdjyt');
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen_player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder={0}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>

        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading</h6>
        )}
        {/* <VideoMetaData video={video} videoId={id} /> */}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {videos
          // ?.filter((video) => video.snippet)
          ?.map((video, idx) => (
            <VideoHorizontal video={video} />
          ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
