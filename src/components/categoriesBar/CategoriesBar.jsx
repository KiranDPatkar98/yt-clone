import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './categories.scss';
import { getSearchedVideos } from '../../redux/slices/getVideoSlice';

const keywords = [
  'All',
  'React',
  'Kannada songs',
  'Virat kohli',
  'Python',
  'Arjith singh',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getSearchedVideos(value));
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value && 'active'}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
