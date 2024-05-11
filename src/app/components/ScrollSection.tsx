"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { future, mantrasPara1, mantrasPara2, mantrasPara3 } from "../constants";

export default function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0,
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        return () => {
            pin.kill();
        }
    }, [])

    
    return (
        <section className="scroll-section-outer bg-white dark:bg-black">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <p>{mantrasPara1}</p>
                    </div>
                    <div className="scroll-section">
                        <p>{mantrasPara2}</p>
                    </div>
                    <div className="scroll-section">
                        <p>{mantrasPara3}</p>
                    </div>
                    <div className="scroll-section">\
                        <p>{future}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}