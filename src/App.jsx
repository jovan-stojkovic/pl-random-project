import { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  let teamsObject = [
    {
      fullName: "Arsenal",
      threeLetterName: "ARS",
      stadium: "Emirates Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/ARS.png",
      }),
      coefficient: 1.75 - 0.5,
    },
    {
      fullName: "Aston Villa",
      threeLetterName: "AVL",
      stadium: "Villa Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/AVL.png",
      }),
      coefficient: 1.6 - 0.5,
    },
    {
      fullName: "Bournemouth",
      threeLetterName: "BOU",
      stadium: "Dean Court",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BOU.png",
      }),
      coefficient: 1.3 - 0.5,
    },
    {
      fullName: "Brentford",
      threeLetterName: "BRE",
      stadium: "Brentford Community Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BRE.png",
      }),
      coefficient: 1.1 - 0.5,
    },
    {
      fullName: "Brighton",
      threeLetterName: "BRI",
      stadium: "Falmer Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BRI.png",
      }),
      coefficient: 1.5 - 0.5,
    },
    {
      fullName: "Burnley",
      threeLetterName: "BUR",
      stadium: "Turf Moor",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BUR.png",
      }),
      coefficient: 1.08 - 0.5,
    },
    {
      fullName: "Chelsea",
      threeLetterName: "CHE",
      stadium: "Stamford Bridge",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/CHE.png",
      }),
      coefficient: 1.5 - 0.5,
    },
    {
      fullName: "Crystal Palace",
      threeLetterName: "CRY",
      stadium: "Selhurst Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/CRY.png",
      }),
      coefficient: 1.3 - 0.5,
    },
    {
      fullName: "Everton",
      threeLetterName: "EVE",
      stadium: "Goodison Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/EVE.png",
      }),
      coefficient: 1.3 - 0.5,
    },
    {
      fullName: "Fulham",
      threeLetterName: "FUL",
      stadium: "Craven Cottage",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/FUL.png",
      }),
      coefficient: 1.25 - 0.5,
    },
    {
      fullName: "Liverpool",
      threeLetterName: "LIV",
      stadium: "Anfield",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/LIV.png",
      }),
      coefficient: 1.8 - 0.5,
    },
    {
      fullName: "Luton",
      threeLetterName: "LUT",
      stadium: "Kenilworth Road",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/LUT.png",
      }),
      coefficient: 1.05 - 0.5,
    },
    {
      fullName: "Man City",
      threeLetterName: "MCI",
      stadium: "Etihad",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/MCI.png",
      }),
      coefficient: 1.85 - 0.5,
    },
    {
      fullName: "Man Utd",
      threeLetterName: "MUN",
      stadium: "Old Trafford",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/MUN.png",
      }),
      coefficient: 1.6 - 0.5,
    },
    {
      fullName: "Newcastle",
      threeLetterName: "NEW",
      stadium: "St James' Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/NEW.png",
      }),
      coefficient: 1.6 - 0.5,
    },
    {
      fullName: "Nottingham Forest",
      threeLetterName: "NFO",
      stadium: "City Ground",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/NFO.png",
      }),
      coefficient: 1.25 - 0.5,
    },
    {
      fullName: "Sheffield United",
      threeLetterName: "SHU",
      stadium: "Bramall Lane",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/SHU.png",
      }),
      coefficient: 1.05 - 0.5,
    },
    {
      fullName: "Tottenham",
      threeLetterName: "TOT",
      stadium: "Tottenham Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/TOT.png",
      }),
      coefficient: 1.6 - 0.5,
    },
    {
      fullName: "West Ham",
      threeLetterName: "WHU",
      stadium: "London Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/WHU.png",
      }),
      coefficient: 1.5 - 0.5,
    },
    {
      fullName: "Wolverhampton",
      threeLetterName: "WOL",
      stadium: "Molineux Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/WOL.png",
      }),
      coefficient: 1.05 - 0.5,
    },
  ];

  let randomNumber = Math.floor(Math.random() * 10000);

  let homeGoals;

  if (randomNumber <= 2146) {
    homeGoals = 0;
  } else if (randomNumber <= 5454) {
    homeGoals = 1;
  } else if (randomNumber <= 7904) {
    homeGoals = 2;
  } else if (randomNumber <= 9318) {
    homeGoals = 3;
  } else if (randomNumber <= 9747) {
    homeGoals = 4;
  } else if (randomNumber <= 9884) {
    homeGoals = 5;
  } else if (randomNumber <= 9954) {
    homeGoals = 6;
  } else if (randomNumber <= 9995) {
    homeGoals = 7;
  } else if (randomNumber < 9999) {
    homeGoals = 8;
  } else if ((randomNumber = 9999)) {
    homeGoals = 9;
  }

  let awayGoals;

  if (randomNumber <= 2146 * 1.2) {
    awayGoals = 0;
  } else if (randomNumber <= 5454 * 1.2) {
    awayGoals = 1;
  } else if (randomNumber <= 7904 * 1.2) {
    awayGoals = 2;
  } else if (randomNumber <= 9318 * 1.2) {
    awayGoals = 3;
  } else if (randomNumber <= 9747 * 1.2) {
    awayGoals = 4;
  } else if (randomNumber <= 9884 * 1.2) {
    awayGoals = 5;
  } else if (randomNumber <= 9954 * 1.2) {
    awayGoals = 6;
  } else if (randomNumber <= 9995 * 1.2) {
    awayGoals = 7;
  } else if (randomNumber < 9999 * 1.2) {
    awayGoals = 8;
  } else if ((randomNumber = 9999 * 1.2)) {
    awayGoals = 9;
  }

  console.log(randomNumber);
  console.log(awayGoals);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  shuffle(teamsObject);
  console.log(teamsObject);

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[0].fullName}</h2>
              <img
                src={teamsObject[0].logo.src}
                alt={teamsObject[0].threeLetterName}
              />
            </div>
            <div className="score">
              <h1 className="home-score">3</h1>
              <h1 className="separator">-</h1>
              <h1 className="away score">2</h1>
            </div>
            <div className="away-team">
              <img
                src={teamsObject[1].logo.src}
                alt={teamsObject[1].threeLetterName}
              />
              <h2>{teamsObject[1].fullName}</h2>
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[2].fullName}</h2>
              <img
                src={teamsObject[2].logo.src}
                alt={teamsObject[2].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[3].fullName}</h2>
              <img
                src={teamsObject[3].logo.src}
                alt={teamsObject[3].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[4].fullName}</h2>
              <img
                src={teamsObject[4].logo.src}
                alt={teamsObject[4].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[5].fullName}</h2>
              <img
                src={teamsObject[5].logo.src}
                alt={teamsObject[5].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[6].fullName}</h2>
              <img
                src={teamsObject[6].logo.src}
                alt={teamsObject[6].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[7].fullName}</h2>
              <img
                src={teamsObject[7].logo.src}
                alt={teamsObject[7].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[8].fullName}</h2>
              <img
                src={teamsObject[8].logo.src}
                alt={teamsObject[8].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[9].fullName}</h2>
              <img
                src={teamsObject[9].logo.src}
                alt={teamsObject[9].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[10].fullName}</h2>
              <img
                src={teamsObject[10].logo.src}
                alt={teamsObject[10].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[11].fullName}</h2>
              <img
                src={teamsObject[11].logo.src}
                alt={teamsObject[11].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[12].fullName}</h2>
              <img
                src={teamsObject[12].logo.src}
                alt={teamsObject[12].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[13].fullName}</h2>
              <img
                src={teamsObject[13].logo.src}
                alt={teamsObject[13].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[14].fullName}</h2>
              <img
                src={teamsObject[14].logo.src}
                alt={teamsObject[14].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[15].fullName}</h2>
              <img
                src={teamsObject[15].logo.src}
                alt={teamsObject[15].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[16].fullName}</h2>
              <img
                src={teamsObject[16].logo.src}
                alt={teamsObject[16].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[17].fullName}</h2>
              <img
                src={teamsObject[17].logo.src}
                alt={teamsObject[17].threeLetterName}
              />
            </div>
          </div>
          <div className="single-game">
            <div className="home-team">
              <h2>{teamsObject[18].fullName}</h2>
              <img
                src={teamsObject[18].logo.src}
                alt={teamsObject[18].threeLetterName}
              />
            </div>
            <div className="away-team">
              <h2>{teamsObject[19].fullName}</h2>
              <img
                src={teamsObject[19].logo.src}
                alt={teamsObject[19].threeLetterName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
