import React from 'react';
import './header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
// import { MdNotifications, MdApps } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleToggleSideBar }) => {
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    setInput('');
  };
  const photoUrl =
    JSON.parse(sessionStorage.getItem('yt-user'))?.photoURL || '';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header_icon">
        {/* <MdNotifications size={28} />
        <MdApps size={28} /> */}
        <img alt="avatar" src={photoUrl} />
      </div>
    </div>
  );
};

export default Header;
