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
  const { videos, activeCategory } = useSelector((state) => state.videos);

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
  const uniqueVideoIds = new Set();

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
          {videos.map((video) => {
            // Check if the video's ID is unique
            if (!uniqueVideoIds.has(video.id)) {
              // If it's unique, render the component and add the ID to the Set
              uniqueVideoIds.add(video.id);
              return (
                <Col lg={3} md={4} key={video.id}>
                  <Video video={video} />
                </Col>
              );
            }
            return null; // If it's a duplicate, don't render anything
          })}
          {/* {!loading
            ? 
            videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <Skeleton />
                </Col>
              ))} */}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
