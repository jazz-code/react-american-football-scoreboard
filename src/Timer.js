import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
};

return (
    <div className="timer">00:03</div>
    <div className="time">{seconds}s</div>
    <div className="row">
        <button className={`buttons button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="buttons" onClick={reset}>Reset</button>
    </div>
);
