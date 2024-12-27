import React, { useState } from "react";

const Home = () => {
  const [progress, setProgress] = useState(87);

  const handleProgressChange = (change) => {
    setProgress((prev) => Math.min(100, Math.max(0, prev + change)));
  };

  return (
    <div className="outer">
      <div className="card">
        <div className="team">
          <div className="logo-bg">
            <img src="../logo.png" className="logo" alt="Logo" />
          </div>
          <div className="team-text">
            <div className="head">Team Up Planning</div>
            <div className="subhead">Slack - Team Agenda</div>
          </div>
        </div>
        <div className="middle-bar">
          <div className="bar-text">{progress}% complete</div>
          <div className="bar">
            <div
              className="progress"
              style={{
                width: `${progress}%`,
                transition:
                  "width 0.5s ease-in-out, box-shadow 0.3s ease-in-out",
                boxShadow:
                  progress === 0
                    ? "none"
                    : `0 0 30px 10px rgba(51, 255, 226, ${progress / 100})`,
              }}
            ></div>
          </div>
        </div>
        <div className="buttons">
          <div className="button1">
            <button onClick={() => handleProgressChange(-20)}>-20%</button>
          </div>
          <div className="button2">
            <button onClick={() => handleProgressChange(20)}>+20%</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
