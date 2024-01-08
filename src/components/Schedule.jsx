import Teams from "./Teams";

const Schedule = () => {
  return (
    <>

    <Teams/>
      Hello from the schedule
      <div className="schedule-container">
        <div className="single-game">
          <p className="home-team">Arsenal</p>
          <img
            src="src/assets/logos/ARS.png"
            alt="Arsenal"
            className="home-team-logo"
          />
          <div className="score">
            {Math.floor(Math.random() * 5)} : {Math.floor(Math.random() * 5)}
          </div>
          <img
            src="src/assets/logos/LIV.png"
            alt="Liverpool"
            className="away-team-logo"
          />
          <p className="away-team">Liverpool</p>
        </div>
      </div>
    </>
  );
};

export default Schedule;
