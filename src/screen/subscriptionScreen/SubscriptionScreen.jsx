import React, { useEffect } from 'react';
import './subscriptionScreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionList } from '../../redux/slices/getSubscriptionListSlice';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SubscriptionScreen = () => {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.subscriptionList);

  useEffect(() => {
    dispatch(getSubscriptionList());
  }, [dispatch]);
  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={15} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionScreen;
