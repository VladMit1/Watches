import React, { useState, useEffect } from 'react';

export const ArrowMinutes = ({ minutes, size }) => {
   const styleHours = {
      width: 135,
      height: `${size}px`,
      position: 'absolute',
      background: `orange`,
      borderRadius: `${size}px`,
      left: '50%'
   };
   const minut = minutes * 6 - 90;
   const classes = minut === 0 * 6 - 90 ? '' : 'rotate';

   return (
      <div
         className={classes}
         style={{
            ...styleHours,
            transform: `rotateZ(${minut}deg)`,
            transformOrigin: 'left'
         }}
      ></div>
   );
};
