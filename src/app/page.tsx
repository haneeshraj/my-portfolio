import AboutSection from "@/sections/home/AboutSection/AboutSection";
import ProjectSection from "@/sections/home/ProjectSection/ProjectSection";
import HomeIntro from "@/sections/homeIntro/HomeIntro";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <AboutSection />
      <ProjectSection />
    </>
  );
}
