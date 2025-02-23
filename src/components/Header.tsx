import React from 'react';
import { isMobile } from 'react-device-detect';
// import Carousel from 'react-multi-carousel';
// import CountdownTimer from './CountDown/CountdownTimer';

const Header = () => {
  return (
    <>
      <div
        className="home__container grid"
        style={{
          backgroundImage: `${
            isMobile
              ? `url("/assets/img/bg-mobile-header.png")`
              : `url("/assets/img/bg-header.png")`
          }`
        }}
      ></div>
    </>
  );
};

export default Header;
