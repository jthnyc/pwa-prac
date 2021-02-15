// import React, {useState, useEffect} from "react";
// import styled from "styled-components";

// const CountDown = () => {
//   const [count, setCount] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     setInterval(() => {
//       getTimeUntil("November 20, 2021");
//     }, 1000);
//   });

//   const leadingZero = (num) => {
//     return num < 10 ? "0" + num : num;
//   };

//   const getTimeUntil = (event) => {
//     const time = Date.parse(event) - Date.parse(new Date());
//     if (time < 0) {
//       // do something here
//     } else {
//       const seconds = Math.floor((time / 1000) % 60);
//       const minutes = Math.floor((time / 1000 / 60) % 60);
//       const hours = Math.floor(((time / 1000) * 60 * 60) % 24);
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));
//       setCount({days, hours, minutes, seconds});
//     }
//   };

//   return (
//     <CountDownContainer>
//       <div>{leadingZero(count.days)} Days </div>
//       <div>{leadingZero(count.hours)} Hours</div>
//       <div>{leadingZero(count.minutes)} Minutes</div>
//       <div>{leadingZero(count.seconds)} Seconds</div>
//     </CountDownContainer>
//   );
// };

// export default CountDown;

// const CountDownContainer = styled.div`
//   border: 1px solid black;
//   display: inline-flex;
//   text-align: center;
// `;
