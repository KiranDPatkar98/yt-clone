import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import './home_screen.scss';
import Video from '../../components/video/Video';
import Skeleton from '../../components/skeleton/skeleton';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesVideos,
  getPopularVideos,
} from '../../redux/slices/getVideoSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === 'All') {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoriesVideos(activeCategory));
    }
  };
  console.log(videos, 'iam videos');

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <Row>
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <Skeleton />
                </Col>
              ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
