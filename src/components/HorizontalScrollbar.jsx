import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import Loader from "./Loader";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()}  className='right-arrow'>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, bodyPart, setBodyPart }) => {

  if(!data.length) return <Loader />
  
  return (
    // TODO: not scroll in the phone view
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data?.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          sx={{m: {lg: '40px', xs: '20px'}}}
          m='0 40px'
        >
          {/* why should load exercise card in here? */}
            {bodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}  /> : <ExerciseCard exercise={item} />} 
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
