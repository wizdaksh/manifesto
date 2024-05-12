'use client';

import {useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine} from '@tsparticles/react';
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import {loadSlim } from "@tsparticles/slim";

export default function Video () {
    
    const [darkMode, setDarkMode] = useState(false);
    const useDarkMode = () => {
    
      useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') setDarkMode(true);
      }, []);
    
      return { darkMode, setDarkMode };
    };

    useDarkMode();

    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, [])

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
      };
    
      const options: ISourceOptions = useMemo(
        () => ({
          pauseOnOutsideViewport: true,  
          pauseOnBlur: true,
          fullScreen: true,
          autoPlay: true,
          style: {
                position: "relative",
                width: "100vw",
                height: "100vh",
              },
            relativePosition: true,
            background: {
            color: {
              value: darkMode ? "#000" : "#fff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value:  darkMode ? "#000" : "#fff",
            },
            links: {
              color:  darkMode ? "#000" : "#fff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [darkMode],
      );

      if (init) {
        return (
          <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
          />
        )
      }
      return <></>
}