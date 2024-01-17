import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const TypewriterComponent = () => {

  return (
    <div>
      <h1 style={{ paddingTop: '2rem',fontSize:'70px', margin: 'auto 0' ,color:'white'}}>
        Let's{' '}
        <span style={{ color: 'red', fontWeight: 'normal' }}>
          <Typewriter
            words={['Sing', 'Dance', 'Vibe', 'Repeat!']}
            loop="false"
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterComponent;
