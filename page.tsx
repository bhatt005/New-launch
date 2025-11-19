import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import TechStack from '@/components/tech-stack';
import Community from '@/components/community';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Kailshians Web Services - Web & App Development in Dehradun',
  description: 'Professional web and app development services from Dehradun, Uttarakhand. Building innovative solutions with latest technologies. 2+ years experience, 10+ successful projects.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <Community />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
