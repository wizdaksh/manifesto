'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import {english, french, arabic, japanese, korean, hindi} from '../constants/marquee';

export default function Hero () {

    useGSAP(() => {
        gsap.from('#row_1', {
            x: 0,
        })
        gsap.to('#row_1', {
          x: -500,
          duration: 20,
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_2', {
            x: -500,
        })
        gsap.to('#row_2', {
          x: 600,
          duration: 20,
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
        gsap.from('#row_3', {
            x: 300,
        })
        gsap.to('#row_3', {
          x: -800,
          duration: 10,
          ease: 'linear',
          repeat: -1,
          yoyo: true,
        })
      }, []);
    

    return (
        <div id="container" className="h-screen overflow-hidden">
            <div id="row_1" className='flex flex-row space-x-10 w-max translate-y-80'>                
                <h1 className="life__headline">{english}</h1>
                <h1 className="life__headline">{french}</h1>
                <h1 className="life__headline">{arabic}</h1>
                <h1 className="life__headline">{japanese}</h1>
                <h1 className="life__headline">{korean}</h1>
                <h1 className="life__headline">{hindi}</h1>
                <h1 className="life__headline">{english}</h1>
                <h1 className="life__headline">{french}</h1>
                <h1 className="life__headline">{arabic}</h1>
                <h1 className="life__headline">{japanese}</h1>
                <h1 className="life__headline">{korean}</h1>
                <h1 className="life__headline">{hindi}</h1>
                <h1 className="life__headline">{english}</h1>
                <h1 className="life__headline">{french}</h1>
                <h1 className="life__headline">{arabic}</h1>
                <h1 className="life__headline">{japanese}</h1>
                <h1 className="life__headline">{korean}</h1>
                <h1 className="life__headline">{hindi}</h1>
            </div>
            <div id="row_2" className='flex flex-row space-x-10 w-max translate-y-80 '>                
                <h1 className="life__headline">{english}</h1>
                <h1 className="life__headline">{french}</h1>
                <h1 className="life__headline">{arabic}</h1>
                <h1 className="life__headline">{japanese}</h1>
                <h1 className="life__headline">{korean}</h1>
                <h1 className="life__headline">{hindi}</h1>
                <h1 className="life__headline">{english}</h1>
                <h1 className="life__headline">{french}</h1>
                <h1 className="life__headline">{arabic}</h1>
                <h1 className="life__headline">{japanese}</h1>
                <h1 className="life__headline">{korean}</h1>
                <h1 className="life__headline">{hindi}</h1>
                <h1 className="life__headline">{english}</h1>
                <h1 className="life__headline">{french}</h1>
                <h1 className="life__headline">{arabic}</h1>
                <h1 className="life__headline">{japanese}</h1>
                <h1 className="life__headline">{korean}</h1>
                <h1 className="life__headline">{hindi}</h1>
            </div>
            <div id="row_3" className='flex flex-row space-x-10 w-max translate-y-80 '>                
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
                <h1 className="life__headline">Add more rows</h1>
            </div>
            {/* Add more rows */}
        </div>
    )
}