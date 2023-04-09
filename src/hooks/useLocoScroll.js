import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
    useEffect(() => {
        if(!start) return;

        const scrollEl = document.querySelector(".App");
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-revealed"
        });

        locoScroll.on("scroll", () => {
            ScrollTrigger.update();
        })

    }, [start]);
}