import React, { useState, useEffect } from 'react';

export const ArrowHours = ({ hours, size }) => {
   const styleHours = {
      width: 110,
      height: `${size}px`,
      position: 'absolute',
      background: `blue`,
      borderRadius: `${size}px`,
      left: '50%'
   };
   const hour =  hours*30 - 90;
   const classes = hour === 0 * 6 - 90 ? '' : 'rotate';

   return (
      <div
         className={classes}
         style={{
            ...styleHours,
            transform: `rotateZ(${hour}deg)`,
            transformOrigin: 'left'
         }}
      ></div>
   );
};
