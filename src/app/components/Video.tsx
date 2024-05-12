'use client';

import {useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine} from '@tsparticles/react';
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import {loadSlim } from "@tsparticles/slim";

export default function Video () {
    
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
          style: {
                position: "relative",
                width: "100%",
                height: "100%",
              },
            relativePosition: true,
            background: {
            color: {
              value: "#000",
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
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 20,
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
        [],
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
}