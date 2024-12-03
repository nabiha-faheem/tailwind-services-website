import HeroSection from "./hero/page";
import ServiceSection from "./services/page";
import AboutSection from "./about/page";
import ContactSection from "./contact/page";

export default function Home() {
  return (
 <div>
<HeroSection/>
<ServiceSection />
<AboutSection/>
<ContactSection/>
 </div>
  );
}
