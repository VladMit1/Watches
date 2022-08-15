import React, { useState, useEffect, useRef } from 'react';

export const HoursIteral = ({ size, seconds }) => {
   const [rotate, setRotate] = useState(seconds);
   const styleIteral = {
      width: `2em`,
      height: `2em`,
      position: `absolute`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      transform: `rotate(120deg)`
   };
   let arr = [];
   for (let index = 0; index < 12; index++) {
      const count = index + 1;
      const itt = <div className={`square`}>{count}</div>;
      const element = (
         <div
            className={`block`}
            key={index}
            style={{ transform: `rotate(${index * 30}deg)` }}
         >
            {itt}
         </div>
      );
      arr.push(element);
   }
   return <div style={styleIteral}>{arr}</div>;
};
