'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import React from "react";


import * as Constants from '../constants/marquee';

export default function Hero () {

    const durations = [420, 250, 150, 500, 450, 400]

    useGSAP(() => {
        gsap.from('#row_1', {
            x: -10000,
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
          x: -9000,
          duration: durations[1],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_3', {
            x: -9000,
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
          x: -10000,
          duration: durations[3],
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_5', {
            x: -10000,
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
          x: -10000,
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
            <div id="section" className="translate-y-3/4 md:translate-y-5 space-y-0 md:space-y-16">
                {rows.map((row, index) => (
                    <React.Fragment key={index}>
                        <div id={row} key={index} className="marqueeRow">
                            {languages.map((language, index) => (
                                <React.Fragment key={index}>
                                    <p className="life__headline" key={index}>{language}</p>
                                    <p className="life__headline">{mathSymbols[index % mathSymbols.length]}</p>
                                </React.Fragment>
                            ))}    
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}