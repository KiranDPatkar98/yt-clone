import React from 'react';
import { useState } from 'react';
import './categories.scss';

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

  const handleClick = (value) => setActiveElement(value);

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
