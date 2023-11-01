import React from 'react';
import './sidebar.scss';

import {
  MdMusicVideo,
  MdExitToApp,
  MdSportsEsports,
  MdOutlineLocalMovies,
  MdSportsCricket,
  MdTrendingUp,
  MdHome,
} from 'react-icons/md';

import { SiYoutubegaming } from 'react-icons/si';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isSideBarOpen, handleToggleSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav
      className={`sidebar ${isSideBarOpen && 'open'}`}
      onClick={() => handleToggleSideBar()}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <li onClick={() => navigate(`/search/music`)}>
        <MdMusicVideo size={23} />
        <span>Music</span>
      </li>
      <li onClick={() => navigate(`/search/gaming`)}>
        <MdSportsEsports size={23} />
        <span>Gaming</span>
      </li>
      <li onClick={() => navigate(`/search/movies`)}>
        <MdOutlineLocalMovies size={23} />
        <span>Movies</span>
      </li>

      <li onClick={() => navigate(`/search/sports`)}>
        <MdSportsCricket size={23} />
        <span>Sports</span>
      </li>

      <li onClick={() => navigate(`/search/trending`)}>
        <MdTrendingUp size={23} />
        <span>Trending</span>
      </li>

      <hr />

      <li onClick={() => dispatch(logout())}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
