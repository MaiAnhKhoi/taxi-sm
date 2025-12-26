import { Header } from "../components/header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Pricing } from "../components/Pricing";
import { ServiceArea } from "../components/ServiceArea";
import { PopularRoutes } from "../components/PopularRoutes";
import { Introduction } from "../components/Introduction";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { FloatingContact } from "../components/FloatingContact";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <ServiceArea />
      <PopularRoutes />
      <Introduction />
      <FAQ />
      <Footer />
      <FloatingContact />
    </>
  );
};