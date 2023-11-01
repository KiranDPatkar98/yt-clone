import React from 'react';
import './sidebar.scss';

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSideBarOpen, handleToggleSideBar }) => {
  const dispatch = useDispatch();
  return (
    <nav
      className={`sidebar ${isSideBarOpen && 'open'}`}
      onClick={() => handleToggleSideBar()}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscription</span>
        </li>
      </Link>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span> I don't know</span>
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
