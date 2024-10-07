 "use client"   



import Blog from "./blog/blog";

import Feature from "./feature/feature";
import Footer from "./footer/footer";

import HeaderThree from "./header/headerThree";
import Accommodations from "./home-three/accommodations";
import Bandarea from "./home-three/band-area";
import Banner from "./home-three/banner";
import Bookingarea from "./home-three/booking-area";
import Callarea from "./home-three/call-area";
import Deluxe from "./home-three/deluxe";
import Placearea from "./home-three/place-area";
import Teamarea from "./home-three/team-area";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import Services from "./services/services";
import Testimonial from "./testimonial/testimonial";
import Videoarea from "./videoarea/videoarea";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      {/* <SEO pageTitle="Home Default" />
        <HeaderThree />
        <Banner />
        <Accommodations />
        <Deluxe />
        <Videoarea />
        <Services />
        <Feature />
        <Testimonial />
        <Blog />
        <Footer />
        <ScrollToTopButton /> */}
        <SEO pageTitle='Home Three' />
        <HeaderThree />
        <Banner />
        <Deluxe />
        <Accommodations />
        <Callarea />
        <Services />
        {/* <Roomarea /> */}
        <Teamarea />
        <Bookingarea />
        <Placearea />
        <Bandarea />
        <Footer />
        <ScrollToTopButton />
    </>
  );
}
