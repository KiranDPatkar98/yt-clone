import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearchedVideos } from '../redux/slices/serachVideoSlice';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchScreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.searchedVideos);

  useEffect(() => {
    dispatch(getSearchedVideos(query));
  }, [dispatch, query]);

  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={15} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;
