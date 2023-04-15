import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from '../assets/utils/scrollToTop';

function Root() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return <>
        <AnimatedCursor 
          outerStyle={{
          borderRadius: "1000px",
          border: "1px solid #ffffff"
        }}
        outerAlpha={0.3} 
        outerScale={3}
          innerStyle={{
            backgroundColor: "#ffffff"
          }}
          hasBlendMode={true}
        />
        <Navbar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </>;
}

export default Root;