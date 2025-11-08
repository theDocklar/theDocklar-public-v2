import {
  FAQ,
  Featured,
  Portfolio,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Contact,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FinancilaFreedom />
      {/* <Featured /> */}
      <OffersSection />
 
      <Portfolio />
      {/* <IntroSection /> */}
      {/* <JoinSection /> */}
      <Contact />
      <FAQ />
    </main>
  );
}
