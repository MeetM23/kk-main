import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutUs from "./components/AboutUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <>
      <Navbar  />
<Hero />
<Stats />
<FeaturedProjects />
<AboutUs />
<Process />
<Testimonials />
<CTA />
<Footer />
    </>
  );
}