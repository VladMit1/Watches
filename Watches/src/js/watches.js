import React, { useState, useEffect } from 'react';
import { ArrowHours } from './Arrows/ArrowHours';
import { ArrowMinutes } from './Arrows/ArrowMinutes';
import { ArrowSeconds } from './Arrows/ArrowSeconds';
import { HoursIteral } from './Arrows/HoursIteral';
const watchStyles = {
   height: 500,
   width: 500,
   backgroundColor: 'yellow',
   border: '2em solid green',
   borderRadius: '50%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   position: 'relative'
};
export const Watches = () => {
   const [time, setTime] = useState({
      date: new Date()
   });
   useEffect(() => {
      setTimeout(() => {
         setTime({ date: new Date() });
      }, 1000);
   }, [time]);

   const DivSeconds = <div>{time.date.getSeconds().toString()}</div>;
   const DivMinutes = <div>{time.date.getMinutes().toString()}</div>;
   const DivHours = <div>{time.date.getHours().toString()}</div>;

   //----------------------------------------------------------------
   const size = 10;

   return (
      <>
         <div style={watchStyles}>
            <HoursIteral size={size} seconds={DivSeconds.props.children} />
            <ArrowSeconds size={size} seconds={DivSeconds.props.children} />
            <ArrowMinutes size={size} minutes={DivMinutes.props.children} />
            <ArrowHours size={size} hours={DivHours.props.children} />
            <div
               style={{
                  height: 20,
                  width: 20,
                  backgroundColor: 'green',
                  zIndex: 2,
                  borderRadius: '50%'
               }}
            ></div>
         </div>
      </>
   );
};
