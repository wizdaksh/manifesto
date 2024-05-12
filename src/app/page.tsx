import Menu from './components/Menu';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Journey2 from './components/Journey2';
import Journey3 from './components/Journey3';
import Mantra from './components/Mantra';
import ScrollSection from './components/ScrollSection';
import Thanks from './components/Thanks';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="">
      <Menu />
      <Hero />
      <Journey />
      <Journey2 />
      <Journey3 />
      <Mantra />
      <ScrollSection />
      <Thanks />
      <Footer />
    </main>
  );
}
