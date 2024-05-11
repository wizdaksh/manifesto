'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import React, { useState, useEffect } from "react";

import * as Constants from '../constants/marquee';

export default function Hero () {
    const [width, setWidth ] = useState(() => {
        if (typeof window === 'undefined') {return 0;}
        return window.innerWidth;
    });
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    
    let windowWidth = width;
    let factor = Math.floor(width*3/windowWidth);
    
    if (width <= 480) {
        windowWidth = 480;    
        factor = Math.floor(width*3/windowWidth);
    } else if (width <= 768) {
        windowWidth = 768;
        factor = Math.floor(width*3/windowWidth);
    } else if (width <= 1024) {
        windowWidth = 1024;
        factor = Math.floor(width*3/windowWidth);
    } else {
        windowWidth = 1440;
        factor = Math.floor(width*3/windowWidth);
    }
    console.log(windowWidth)
    console.log(factor)
    
    const durations = [
        factor*64, 
        factor*49,
        factor*36, 
        factor*25, 
        factor*16, 
        factor*81, 
    ]
    const deltaDistance = windowWidth*factor;

    useGSAP(() => {
        gsap.from('#row_1', {
            x: -deltaDistance,
        })
        gsap.to('#row_1', {
          x: 0,
          duration: durations[0],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_2', {
            x: 0,
        })
        gsap.to('#row_2', {
          x: -deltaDistance,
          duration: durations[1],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_3', {
            x: -deltaDistance,
        })
        gsap.to('#row_3', {
          x: 0,
          duration: durations[2],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_4', {
            x: 0,
        })
        gsap.to('#row_4', {
          x: -deltaDistance,
          duration: durations[3],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_5', {
            x: -deltaDistance,
        })
        gsap.to('#row_5', {
          x: 0,
          duration: durations[4],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_6', {
            x: 0,
        })
        gsap.to('#row_6', {
          x: -deltaDistance,
          duration: durations[5],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
      }, []);
    
    const languages = [Constants.russian, Constants.french, Constants.arabic, Constants.japanese, Constants.korean, Constants.hindi, Constants.english, Constants.spanish, Constants.portuguese, Constants.german, Constants.italian, Constants.polish, Constants.turkish, Constants.vietnamese, Constants.thai, Constants.swedish, Constants.tamil, Constants.telugu]
    const rows = ['row_1', 'row_2', 'row_3', 'row_4','row_5', 'row_6']
    const mathSymbols = ['+', '-', 'x', '∫', '÷', '∑']


    return (
        <div id="container" className="h-screen overflow-hidden dark:bg-black">
            <div id="section"  className="translate-y-3/4 md:translate-y-32 space-y-0 md:space-y-3">
                {rows.map((row, index) => (
                    <React.Fragment key={index}>
                        <div id={row} key={index} className="marqueeRow">
                            {languages.map((language, index) => (
                                <React.Fragment key={index}>
                                    <p className="life__headline" key={index}>{language}</p>
                                    <p className="life__headline mathLatex">{mathSymbols[index % mathSymbols.length]}</p>
                                </React.Fragment>
                            ))}    
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}