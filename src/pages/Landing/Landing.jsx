import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Science from "../../components/Science/Science";
import Pathway from "../../components/Pathway/Pathway";
import Testimonial from "../../components/Testimonial/Testimonial";
import Prices from "../../components/Prices/Prices";
import Footer from "../../components/Footer/Footer";
import AuthModal from "../../components/auth/AuthModal";
import LoginForm from "../../components/auth/LoginForm";

function Landing() {
  const [authMode, setAuthMode] = useState(null);
  return (
    <>
      <Navbar
        onLogin={() => setAuthMode("login")}
        onRegister={() => setAuthMode("register")}
      />
      <main>
        <Hero />
        <Science />
        <Pathway />
        <Testimonial />
        <Prices />
      </main>
      <Footer />
      <AuthModal>
        <LoginForm />
      </AuthModal>
    </>
  );
}

export default Landing;
