// This is everything with the teams

import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
// import chiefs from "../public/nflLogos/chiefs.png";

let nflTeams = [
  {
    name: "NFL",
    city: "NFL HQ New York",
  },

  {
    name: "Patriots",
    city: "New England",
  },

  {
    name: "Packers",
    city: "Green Bay, Wisconsin",
  },

  {
    name: "Rams",
    city: "Los Angeles, California",
  },

  {
    name: "Chiefs",
    city: "Kansas City, Missouri",
  },

  {
    name: "Giants",
    city: "New York",
  },

  {
    name: "Chargers",
    city: "Los Angeles, California",
  },

  {
    name: "Buccaneers",
    city: "Tampa Bay, Florida",
  },

  {
    name: "Bears",
    city: "Chicago, Illinois",
  },

  {
    name: "Bengals",
    city: "Cincinnati, Ohio",
  },

  {
    name: "Cardinals",
    city: "Phoenix, Arizona",
  },

  {
    name: "Raiders",
    city: "Las Vegas, Nevada",
  },

  {
    name: "Steelers",
    city: "Pittsburgh, Pennsylvania",
  },

  {
    name: "Bills",
    city: "Buffalo, New York",
  },

  {
    name: "Jets",
    city: "New York",
  },

  {
    name: "Lions",
    city: "Detroit, Michigan",
  },

  {
    name: "Dolphins",
    city: "Miami, Florida",
  },

  {
    name: "49ers",
    city: "San Francisco, California",
  },

  {
    name: "Seahawks",
    city: "Seattle, Washington",
  },

  {
    name: "Browns",
    city: "Cleveland, Ohio",
  },

  {
    name: "Colts",
    city: "Indianapolis, Indiana",
  },

  {
    name: "Panthers",
    city: "Charlotte, North Carolina",
  },

  {
    name: "Redskins",
    city: "Washington DC",
  },

  {
    name: "Ravens",
    city: "Baltimore, Maryland",
  },

  {
    name: "Cowboys",
    city: "Dallas, Texas",
  },

  {
    name: "Titans",
    city: "Nashville, Tennessee",
  },

  {
    name: "Falcons",
    city: "Atlanta, Georgia",
  },

  {
    name: "Texans",
    city: "Houston, Texans",
  },

  {
    name: "Eagles",
    city: "Philadelphia, Eagles",
  },

  {
    name: "Jaguars",
    city: "Jacksonville, Florida",
  },

  {
    name: "Vikings",
    city: "Broncos",
  },

  {
    name: "Broncos",
    city: "Denver, Colorado",
  },

  {
    name: "Saints",
    city: "New Orleans, Louisiana",
  },
];

export default function Teams() {
  // Set the state of the current team
  let [currentTeam, setCurrentTeam] = useState(nflTeams[0]);

  let random = () => {
    let randomNum = Math.floor(Math.random() * 33);
    return randomNum;
  };

  let handleTeam = () => {
    // Get the index of the NFL Team
    let teamIndex = random();
    setCurrentTeam(nflTeams[teamIndex]);
  };

  let imageLink = `/nflLogos/${currentTeam.name}.png`;

  console.log(imageLink);

  return (
    <div class="main-content">
      <h1 id="team-header">NFL Team Generator</h1>
      <p>
        {" "}
        This is a random NFL Team generator. Just click on "GO!" and a random
        NFL team will appear!
      </p>
      <button id="pick-a-team" onClick={handleTeam}>
        {" "}
        Pick a team{" "}
      </button>

      <div id="the-team">
        <h1 className="team-name"> {currentTeam.name}</h1>
        <img className="team-image" src={imageLink} alt="" />
        <h2 className="team-city"> {currentTeam.city} </h2>
      </div>
    </div>
  );
}
