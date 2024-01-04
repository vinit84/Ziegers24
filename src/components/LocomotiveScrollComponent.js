// LocomotiveScrollComponent.js
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollComponent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div data-scroll-container ref={scrollRef}></div>;
};

export default LocomotiveScrollComponent;
