import SmoothScroll from "@/components/common/SmoothScroll";
import Preloader from "@/components/common/Preloader";
import Hero from "@/components/sections/Home/Hero";
import StoryBanner from "@/components/sections/Home/StoryBanner";
import FeaturedMenu from "@/components/sections/Home/FeaturedMenu";
import About from "@/components/sections/Home/About";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Hero />
      <StoryBanner />
      <FeaturedMenu />
      <About />
    </SmoothScroll>
  );
}