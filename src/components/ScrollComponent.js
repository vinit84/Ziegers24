// ScrollComponent.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ScrollComponent = () => {
  useEffect(() => {
    // Set up GSAP timeline for smooth scroll
    const tl = gsap.timeline();

    // Add animations to the timeline (you can customize these animations)
    tl.to(window, { scrollTo: 0, duration: 1, ease: 'power2.out' });

    // Attach the timeline to the scroll trigger
    gsap.utils.scrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      animation: tl,
      scrub: 1, // Controls the smoothness of the scroll
    });
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollComponent;
