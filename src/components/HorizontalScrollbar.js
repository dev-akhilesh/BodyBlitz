import React, { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed.
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200; // Adjust scroll amount as needed.
    }
  };

  return (
    <div className="scroll-menu-container">
      <div className="scroll-buttons">
        <Typography onClick={handleScrollLeft} className="arrow-button">
          <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
        <Typography onClick={handleScrollRight} className="arrow-button">
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
      </div>
      <div className="scroll-menu" ref={scrollContainerRef}>
        <div className="scroll-content">
          {data.map((item) => (
            <Box
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
