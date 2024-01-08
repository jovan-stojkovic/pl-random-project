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
      coefficient: 1.75-0.5,
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
  let goals;

  if (randomNumber <= 2146) {
    goals = 0
  } else if (randomNumber <= 5454) {
    goals = 1
  } else if (randomNumber <= 7904) {
    goals = 2
  } else if (randomNumber <= 9318) {
    goals = 3
  } else if (randomNumber <= 9747) {
    goals = 4
  } else if (randomNumber <= 9884) {
    goals = 5
  } else if (randomNumber <= 9954) {
    goals = 6
  } else if (randomNumber <= 9995) {
    goals = 7
  } else if (randomNumber <9999) {
    goals = 8
  } else if (randomNumber = 9999) {
    goals = 9
  }

  console.log(randomNumber)
  console.log(goals)

  let homeGoals = goals + (0.435/2)
  let awayGoals = goals - (0.435/2)

  let homeAwayDifference = 0.435;

  return <>Hello from the app component, the only component</>;
};

export default App;
