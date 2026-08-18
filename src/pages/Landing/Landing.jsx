import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Science from "../../components/Science/Science";
import Pathway from "../../components/Pathway/Pathway";
import Testimonial from "../../components/Testimonial/Testimonial";
import Prices from "../../components/Prices/Prices";

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Science />
        <Pathway />
        <Testimonial />
        <Prices />
      </main>
    </>
  );
}

export default Landing;
