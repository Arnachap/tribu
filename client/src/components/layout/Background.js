import React, { Fragment } from 'react';
import Particles from 'react-particles-js';

const Background = () => {
  const particlesParams = {
    particles: {
      opacity: {
        random: true,
        anim: {
          enable: false
        }
      },
      number: {
        value: 100
      },
      size: {
        value: 2
      },
      move: {
        speed: 1
      },
      line_linked: {
        enable: false
      }
    }
  };

  return (
    <Fragment>
      <Particles style={{ position: 'absolute' }} params={particlesParams} />
    </Fragment>
  );
};

export default Background;
