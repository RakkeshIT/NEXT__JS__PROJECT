import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import EventPage from "./event/page";
import EventSlide from "./eventslide/page";
import HomePage from "./home/page";

export default function Client() {
  return (
   <>
      <HomePage/>
      <AboutPage/>
      <EventPage/>
      <EventSlide/>
      <ContactPage/>
   </>
  );
}