import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Root() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return <>
        <Navbar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
        <Outlet />
    </>;
}

export default Root;