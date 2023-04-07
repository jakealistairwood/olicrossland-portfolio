import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll";
import { useEffect } from "react";

export default function useLocoScroll(start) {
    useEffect(() => {
        if(!start) return;

        const locoScroll = new LocomotiveScroll({

        })
    }, [start]);
}