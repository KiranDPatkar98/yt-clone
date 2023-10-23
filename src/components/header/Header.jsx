import React from 'react';
import './header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

const Header = ({ handleToggleSideBar }) => {
  return (
    <div className="header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSideBar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="logo"
        className="header_logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <dic className="header_icon">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img alt="avatar" src="images/avatar.png" />
      </dic>
    </div>
  );
};

export default Header;
