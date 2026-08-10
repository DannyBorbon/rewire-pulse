import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Science from "../../components/Science/Science";

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Science />
      </main>
    </>
  );
}

export default Landing;
