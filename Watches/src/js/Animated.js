import React, { useState, useEffect } from 'react';

export const Animated = ({ seconds, classes }) => {
   const [scale, setScale] = useState(``);
   useEffect(() => {
      setTimeout(() => {
         setScale('block');
         console.log('1');
      },5000);
   }, [scale]);
   return (
      <div
         className={`block ${classes}`}
         style={{
            transform: `rotateZ(${seconds - 180}deg)`,
            width: 370
         }}
      >
         <div
            className={`animate`}
            style={{
               transition: '1s',
               transform: `scale(2.5)`,
               display: scale
            }}
         ></div>
      </div>
   );
};
