import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home_screen.scss';
import Video from '../../components/video/Video';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from '../../redux/slices/getVideoSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
