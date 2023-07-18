import React, { useState, useEffect } from 'react';
function App() {

  const styleBackground = {
    background: "linear-gradient(to right, #00d2fe, #3a7bd5)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const styleText = {
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "0 0 10px black"
  }

  const styleTimer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "0 0 10px black"
  }
  // style to display text and timer on different rows
  const styleRow = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }

  const styleColumn = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }

  const countDownDate = new Date("Jul 28, 2023 21:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(distance % (1000 * 60) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const style={
    margin: 20,
  }

  const body=()=>{
    // I need to render a page with title "Hours till you we meet again" and with gradiet background full screen
    // and after title to show a clock with hours, minutes and seconds till next Friday 9 pm

    return (
      <div style={styleBackground}>
        <div style={styleColumn}>
        <div style={styleRow}>
          <div style={styleText}>Till you meet Puiut again </div>
          </div>
          <div style={styleRow}>
            <div style={styleTimer}>
              <div style={style}> {time.days} days</div>
              <div style={style}>{time.hours} hours</div>
              <div style={style}>{time.minutes} minutes</div>
              <div style={style}>{time.seconds} seconds</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  


  return body();
}

export default App;
