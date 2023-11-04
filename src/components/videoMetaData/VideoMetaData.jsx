import React, { useEffect } from 'react';
import './videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';
import { useDispatch, useSelector } from 'react-redux';
import {
  getChannelDetails,
  getSubscriptionStatus,
} from '../../redux/slices/getChannelDetailSlice';

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const dispatch = useDispatch();
  const { channelId, channelTitle, description, title, publishedAt } =
    snippet || {};
  const { viewCount, likeCount } = statistics || {};

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const { subscriptionStatus } = useSelector((state) => state.channelDetails);

  useEffect(() => {
    if (channelId) {
      dispatch(getChannelDetails(channelId));
      dispatch(getSubscriptionStatus(channelId));
    }
  }, [channelId, dispatch]);

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-cente py-1">
          <span>
            {numeral(viewCount).format('0.a')} Views •{' '}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="like-btn">
              <MdThumbUp size={26} />
              <span>{numeral(likeCount).format('0.a')}</span>
            </span>
            <span>
              <MdThumbDown size={26} />
              {/* {numeral(dislikeCount).format('0.a')} */}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="logo"
            className="rounded-circle mr-3 channelIcon"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format('0.a')}{' '}
              Subscribers
            </span>
          </div>
        </div>
        <button
          className={`btn border-0 p-2 m-2 ${subscriptionStatus && 'btn-grey'}`}
        >
          {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
