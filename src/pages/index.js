import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PointsFortsSection from "../components/PointsFortsSection/PointsFortsSection";
import WhySection from "../components/WhySection/WhySection";
import RealSection from "../components/RealSection/RealSection";
import SolutionSection from "../components/SolutionSection/SolutionSection";
import PackSection from "../components/PackSection/PackSection";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <PointsFortsSection />
            <SolutionSection />
            <PackSection />
            <WhySection />
            <RealSection />
            <Footer />
        </>
    );
};

export default Home;