import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imageLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
    useEffect(() => {
        if(!start) return;

        const scrollEl = document.querySelector(".App");
        let locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-revealed",
        });

        /* imageLoaded(scrollEl, { background: true }, function() {
            locoScroll.update();
        })[1]; */

        locoScroll.on("scroll", () => {
            ScrollTrigger.update();
        })

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if(locoScroll) {
                    return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if(locoScroll) {
                    return arguments.length 
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.x;
                }
                return null;
            }
        });

        const scrollUpdate = () => {
            if(locoScroll) {
                locoScroll.update();
            }
        };

        ScrollTrigger.addEventListener('refresh', scrollUpdate);
        ScrollTrigger.refresh();

        return () => {
            if(locoScroll) {
                ScrollTrigger.removeEventListener('refresh', scrollUpdate);
                locoScroll.destroy();
                locoScroll = null;
            }
        }
    }, [start]);
}