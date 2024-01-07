const Matches = () => {
  let teams = [
    {
      fullName: "Arsenal",
      threeLetterName: "ARS",
      stadium: "Emirates Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/ARS.png",
      }),
      coefficient: 1.75,
    },
    {
      fullName: "Aston Villa",
      threeLetterName: "AVL",
      stadium: "Villa Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/AVL.png",
      }),
      coefficient: 1.6,
    },
    {
      fullName: "Bournemouth",
      threeLetterName: "BOU",
      stadium: "Dean Court",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BOU.png",
      }),
      coefficient: 1.3,
    },
    {
      fullName: "Brentford",
      threeLetterName: "BRE",
      stadium: "Brentford Community Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BRE.png",
      }),
      coefficient: 1.1,
    },
    {
      fullName: "Brighton",
      threeLetterName: "BRI",
      stadium: "Falmer Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BRI.png",
      }),
      coefficient: 1.5,
    },
    {
      fullName: "Burnley",
      threeLetterName: "BUR",
      stadium: "Turf Moor",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/BUR.png",
      }),
      coefficient: 1.08,
    },
    {
      fullName: "Chelsea",
      threeLetterName: "CHE",
      stadium: "Stamford Bridge",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/CHE.png",
      }),
      coefficient: 1.5,
    },
    {
      fullName: "Crystal Palace",
      threeLetterName: "CRY",
      stadium: "Selhurst Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/CRY.png",
      }),
      coefficient: 1.3,
    },
    {
      fullName: "Everton",
      threeLetterName: "EVE",
      stadium: "Goodison Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/EVE.png",
      }),
      coefficient: 1.3,
    },
    {
      fullName: "Fulham",
      threeLetterName: "FUL",
      stadium: "Craven Cottage",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/FUL.png",
      }),
      coefficient: 1.25,
    },
    {
      fullName: "Liverpool",
      threeLetterName: "LIV",
      stadium: "Anfield",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/LIV.png",
      }),
      coefficient: 1.80,
    },
    {
      fullName: "Luton",
      threeLetterName: "LUT",
      stadium: "Kenilworth Road",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/LUT.png",
      }),
      coefficient: 1.05,
    },
    {
      fullName: "Man City",
      threeLetterName: "MCI",
      stadium: "Etihad",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/MCI.png",
      }),
      coefficient: 1.85,
    },
    {
      fullName: "Man Utd",
      threeLetterName: "MUN",
      stadium: "Old Trafford",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/MUN.png",
      }),
      coefficient: 1.6,
    },
    {
      fullName: "Newcastle",
      threeLetterName: "NEW",
      stadium: "St James' Park",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/NEW.png",
      }),
      coefficient: 1.6,
    },
    {
      fullName: "Nottingham Forest",
      threeLetterName: "NFO",
      stadium: "City Ground",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/NFO.png",
      }),
      coefficient: 1.25,
    },
    {
      fullName: "Sheffield United",
      threeLetterName: "SHU",
      stadium: "Bramall Lane",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/SHU.png",
      }),
      coefficient: 1.05,
    },
    {
      fullName: "Tottenham",
      threeLetterName: "TOT",
      stadium: "Tottenham Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/TOT.png",
      }),
      coefficient: 1.6,
    },
    {
      fullName: "West Ham",
      threeLetterName: "WHU",
      stadium: "London Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/WHU.png",
      }),
      coefficient: 1.5,
    },
    {
      fullName: "Wolverhampton",
      threeLetterName: "WOL",
      stadium: "Molineux Stadium",
      logo: Object.assign(new Image(), {
        src: "/src/assets/logos/WOL.png",
      }),
      coefficient: 1.05,
    },
  ];

  return (
    <>
      <div>
      {teams.map((team, index) => (
              <div
                id={team.threeLetterName}
                key={index}
              >
                <h1>{team.fullName}</h1>
                <p>Stadium: {team.stadium}</p>
                <img src={team.logo.src} alt={team.threeLetterName} />
              </div>
            ))}
      </div>
    </>
  );
};

export default Matches;
