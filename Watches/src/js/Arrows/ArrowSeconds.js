import React, { useState, useEffect } from 'react';
import { Animated } from '../Animated';

export const ArrowSeconds = ({ seconds,size }) => {
   const sec = seconds * 6 - 90;
   const classes = sec === 0 * 6 - 90 ? '' : 'rotate';
   const styleHours = {
      width: 150,
      height: `${size}px`,
      position: 'absolute',
      background: `violet`,
      borderRadius: `${size}px`,
      left: '50%'
   };
   return (
      <>
      <div
         className={classes}
         style={{
            ...styleHours,
            transform: `rotateZ(${sec}deg)`,
            transformOrigin: 'left'
         }}
         ></div>
         {/*<Animated seconds={sec} classes={classes}/>*/}
         </>
   );
};
