// components/AudioPlayer.js

import React from 'react';
import Controls from './control';
import ProgressBar from './progres';

const AudioPlayer = ({ src }) => {
  return (
    <div>
    <audio controls className='md:w-[500px] sm:w-[450px] w-[350px] '>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    
   
    </div>
  );
};

export default AudioPlayer;
