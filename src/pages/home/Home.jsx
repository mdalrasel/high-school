import AboutSection from "../../components/AboutSection";
import HeroSection from "../../components/HeroSection";
import HomepageCarousel from "../../components/HomepageCarousel";
import NoticesSection from "../../components/NoticesSection";


const Home = () => {
    return (
        <div>
            <HomepageCarousel />
            <HeroSection />
            <AboutSection />
            <NoticesSection />
        </div>
    );
};

export default Home;