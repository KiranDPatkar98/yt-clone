// import React, { useEffect, useState } from 'react';
// import './videoHorizontal.scss';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { AiFillEye } from 'react-icons/ai';
// import request from '../../api';
// import moment from 'moment';
// import numeral from 'numeral';
// import { Row, Col } from 'react-bootstrap';

// const VideoHorizontal = ({ video }) => {
//   const [views, setViews] = useState(null);
//   const [duration, setDuration] = useState(null);
//   const [channelIcon, setChannelIcon] = useState(null);

//   const seconds = moment.duration(duration).asSeconds();
//   const _duration = moment.utc(seconds * 100).format('mm:ss');
//   console.log(video, ';iam video in horizonatl');
//   const {
//     id,
//     snippet: {
//       channelId,
//       channelTitle,
//       description,
//       title,
//       publishedAt,
//       thumbnails: { medium },
//     },
//   } = video;

//   useEffect(() => {
//     const getVideoDetails = async () => {
//       const {
//         data: { items },
//       } = await request('/videos', {
//         params: {
//           part: 'contentDetails,statistics',
//           id: id.videoId,
//         },
//       });
//       setDuration(items[0].contentDetails.duration);
//       setViews(items[0].statistics.viewCount);
//     };
//     getVideoDetails();
//   }, [id]);

//   useEffect(() => {
//     const getChannelIcon = async () => {
//       const {
//         data: { items },
//       } = await request('/channels', {
//         params: {
//           part: 'snippet',
//           id: channelId,
//         },
//       });
//       setChannelIcon(items[0].snippet.thumbnails.default.url);
//     };
//     getChannelIcon();
//   }, [channelId]);

//   return (
//     <Row classNAme="videoHorizontal m-1 py-2 align align-items-center">
//       <Col xs={6} md={4} className="videoHorizontal_left">
//         <LazyLoadImage
//           src={medium?.url}
//           effect="blur"
//           className="videoHorizontal-thumbnail"
//           wrapperClassName="videoHorizontal_thumbnail-wrapper"
//         />
//         <span className="videoHorizontal_duration">{_duration}</span>
//       </Col>
//       <Col xs={6} md={4} className="videoHorizontal_right p-0">
//         <p className="videoHorizontal_title mb-1">{title}</p>
//         <div className="videoHorizontal_details">
//           <AiFillEye />
//           {numeral(views).format('0.a')} Views •{moment(publishedAt).fromNow()}
//         </div>
//         <div className="videoHorizontal_channel d-flex align-items-center my-1">
//           <p>{channelTitle}</p>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default VideoHorizontal;

import React, { useEffect, useState } from 'react';
import './videoHorizontal.scss';

import { AiFillEye } from 'react-icons/ai';
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VideoHorizontal = ({ video, searchScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const isVideo = id?.kind === 'youtube#video';

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  const navigate = useNavigate();

  const handleClick = () => {
    if (isVideo) {
      navigate(`/watch/${id.videoId}`);
    } else {
      navigate(`/channel/${id.channelId}`);
    }
  };

  const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel';

  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      {/* //TODO refractor grid */}
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className="p-0 videoHorizontal__right"
      >
        <p className="mb-1 videoHorizontal__title">{title}</p>
        {isVideo && (
          <div className="videoHorizontal__details">
            <AiFillEye /> {numeral(views).format('0.a')} Views •
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {isVideo && <p className="mt-1">{description}</p>}
        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          {/* //TODO show in search screen */}
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
