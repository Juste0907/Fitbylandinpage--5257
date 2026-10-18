import { SiteHeader } from "../components/lp/site-header";
import { Hero } from "../components/lp/hero";
import { WhyMe } from "../components/lp/why-me";
import { Program } from "../components/lp/program";
import { Testimonials } from "../components/lp/testimonials";
import { FinalCta } from "../components/lp/final-cta";
import { SiteFooter } from "../components/lp/site-footer";
import { Faq, Method, Stats } from "../components/lp/extra-sections";
import { Equipment, GymTour, Shop } from "../components/lp/gym-sections";
import { About, Blog, Gallery, Newsletter, Partners, Pricing } from "../components/lp/more-sections";
import { useScrollReveal } from "../components/lp/reveal";

export default function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <WhyMe />
        <Program />
        <Method />
        <Stats />
        <About />
        <Gallery />
        <GymTour />
        <Equipment />
        <Partners />
        <Testimonials />
        <Shop />
        <Pricing />
        <Blog />
        <Faq />
        <Newsletter />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
