import React from "react";
import Box from '@mui/material/Box';
import "./styles.css";

const SlidesBar = ({ slides, currentSlide, onClick }) => (
  <Box className={"slideLineWrapper"}>
    {slides.map((el, i) => (
      <Box
        onClick={onClick}
        data-slidenumber={i}
        key={i}
        className={currentSlide === i ? "chosenSlideCircle" : "slideCircle"}
      />
    ))}
  </Box>
);

export default SlidesBar;
