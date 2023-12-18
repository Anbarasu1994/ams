import React from "react";
import NumberCount from "../../components/numberCount/NumberCount";
import ChairmansMessage from "../../components/chairmansMessage/ChairmansMessage";
import Navbar from "../../components/navbar/Navbar"; // Update the import path for Navbar
import "./home.scss";
import Activities from "../../components/activities/Activities";
import Administration from "../../components/administration/Administration";
import CollegeGroup from "../../components/collegeGroup/CollegeGroup";
import Carousel from "../../components/carousel1/Carousel";
import ImageGallery from "../../components/imageGallery/ImageGallery";
import MileStone from "../../components/mileStone/MileStone";
import Footer from "../../components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TestimonialsCarousel from "../../components/topperPerformer/TestimonialsCarousel";
import CampusTour from "../../components/activities/CampusTour";
import UpcomingEvents from "../../components/upcomingEvents/UpcomingEvents";
import Video from "../../components/video/Video";
import AddEvent from "../../components/Events/AddEvent";
import RetrieveEvents from "../../components/Events/RetrieveEvents";
import AddChairmanMessage from "../../components/chairmansMessage/AddChairmanMessage";
import AddLinkForm from "../../components/linkWithThumbnail/AddLinkForm";
import LinkWithThumbnail from "../../components/linkWithThumbnail/LinkWithThumbnail";
import MarqueeForm from "../../components/marquee/MarqueeForm";
import StaffCarousel from "../../components/staffs/StaffCarousel";

const Home = () => {
  return (
    <div className="home-one">
      <Navbar />
      {/* <Video/> */}
      <Carousel />
      <CollegeGroup />
      {/* <AddChairmanMessage/> */}
      <NumberCount />

      <ChairmansMessage />
      <CampusTour />

      {/* <AddEvent/> */}
      {/* <RetrieveEvents/> */}
      {/* <AddLinkForm />  */}
      {/* <MarqueeForm/> */}
      {/* <LinkWithThumbnail /> */}

      <UpcomingEvents />

      {/* <Activities/> */}
      {/* <Administration/> */}
      {/* <TopperPerformer/> */}
      {/* <TopperCarousel/> */}
      <StaffCarousel/>
      <TestimonialsCarousel />
      {/* <ImageGallery/> */}
      <MileStone />
      <Footer />
    </div>
  );
};

export default Home;
