import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

import HeroImage from '../../assets/img/LandingPage/heroImage.svg';
import Navbar from '../Pages/Navabar'
import FooterComponent from '../Footer'
import OfferSectionPatients from './LandingPageComponent/OfferSectionPatients';
import OfferSectionDoctor from './LandingPageComponent/OfferSectionDoctor';
import WorkingFriska from './Friska Working/WorkingFriska'

// for authentication
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// importing images
import CommunityNumberImg from '../../assets/img/LandingPage/CommunityNumber.svg'
import TimeSaving from '../../assets/img/LandingPage/timeSaving.png'
import OrganisingRecods from '../../assets/img/LandingPage/OrganisingRecods.png'
import EasyAccess from '../../assets/img/LandingPage/EasyAccess.png'
import CostEffective from '../../assets/img/LandingPage/CostEffective.png'
import EasyCommunication from '../../assets/img/LandingPage/EasyCommunication.png'
import BrandPositioning from '../../assets/img/LandingPage/BrandPositioning.png'
import FeedbackSection from './Feedback Component/FeedbackSection';

// styles
import '../../assets/styles/LandingPage.css'
import '../../assets/styles/Common.css'

// animation css
// import "animate.css/animate.min.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import Caraousel from './Caraousel';
import Component from './LandingPageComponent/Component';
import HeroArea from './LandingPageComponent/HeroArea';
import AboutUs from './AboutUs';


function LandingPage() {

  // condition to check for login and signup 
  // const [user] = useAuthState(auth);



  return (
    <div className="OuterContainer">
      <Navbar />
      <HeroArea />

      <AboutUs />
      <br /><br /><br /><br />
      <OfferSectionPatients />
      <br /><br /><br /><br />
      <br /><br />
      {/* <WorkingFriska /> */}

      {/* offer section */}
      <Component />

      <OfferSectionDoctor />

      <br /><br /><br /><br />
      <div className="feedbackSection">
        <h1>Our Happy Customers</h1>
        <FeedbackSection />

      </div>

      <FooterComponent />
    </div>

  )
}

export default LandingPage