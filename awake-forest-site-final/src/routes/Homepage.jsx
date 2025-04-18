import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Video from '../components/Video'; 
import Gallery from '../components/Gallery';
import IntroductionBlock from '../components/IntroductionBlock';
import useScrollToTop from '../hooks/useScrollToTop';


function Homepage() {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <Video/>
      <IntroductionBlock/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Homepage;