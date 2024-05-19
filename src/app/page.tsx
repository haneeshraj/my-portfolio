import Footer from "@/components/footer/Footer";
import AboutSection from "@/sections/home/AboutSection/AboutSection";
import ContactSection from "@/sections/home/ContactSection/ContactSection";
import ProjectSection from "@/sections/home/ProjectSection/ProjectSection";
import HomeIntro from "@/sections/homeIntro/HomeIntro";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
