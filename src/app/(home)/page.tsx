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
      {/* <Featured /> */}
      <OffersSection />
      <FinancilaFreedom />
      <Portfolio />
      {/* <IntroSection /> */}
      {/* <JoinSection /> */}
      <Contact />
      <FAQ />
    </main>
  );
}
