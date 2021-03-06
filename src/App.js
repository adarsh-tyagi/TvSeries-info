import React, { useState } from "react";
import "./App.css";
import big_bang from "./images/big_bang.jpg";
import boys from "./images/boys.jpg";
import breaking_bad from "./images/breaking_bad.jpg";
import cobra from "./images/cobra.jpg";
import dark from "./images/dark.jpg";
import friends from "./images/friends.jpg";
import got from "./images/got.jpg";
import gullak from "./images/gullak.jpg";
import mandalorian from "./images/mandalorian.jpg";
import money from "./images/money.jpg";
import peaky from "./images/peaky.jpg";
import robot from "./images/robot.jpg";
import sherlock from "./images/sherlock.jpg";
import stranger from "./images/stranger.jpg";
import twoandhalfmen from "./images/twoandhalfmen.jpg";

var seriesList = {
  Drama: [
    {
      name: "Game of Thrones",
      rating: "9.3/10",
      image: got,
    },
    {
      name: "Cobra Kai",
      rating: "8.6/10",
      image: cobra,
    },
    {
      name: "Gullak",
      rating: "9.1/10",
      image: gullak,
    },
  ],
  Thriller: [
    {
      name: "Breaking Bad",
      rating: "9.5/10",
      image: breaking_bad,
    },
    {
      name: "Mr.Robot",
      rating: "8.6/10",
      image: robot,
    },
    {
      name: "Peaky Blinders",
      rating: "8.8/10",
      image: peaky,
    },
  ],
  Suspense: [
    {
      name: "Sherlock Holmes",
      rating: "9.1/10",
      image: sherlock,
    },
    {
      name: "Money Heist",
      rating: "8.3/10",
      image: money,
    },
    {
      name: "Dark",
      rating: "8.8/10",
      image: dark,
    },
  ],
  Comedy: [
    {
      name: "Friends",
      rating: "8.9/10",
      image: friends,
    },
    {
      name: "The Big Bang Theory",
      rating: "8.1/10",
      image: big_bang,
    },
    {
      name: "Two and a half men",
      rating: "7/10",
      image: twoandhalfmen,
    },
  ],
  Fiction: [
    {
      name: "Stranger Things",
      rating: "8.7/10",
      image: stranger,
    },
    {
      name: "The Mandalorian",
      rating: "8.8/10",
      image: mandalorian,
    },
    {
      name: "The Boys",
      rating: "8.7/10",
      image: boys,
    },
  ],
};

export default function App() {
  var [genre, setGenre] = useState("Drama");

  function clickHandler(genre) {
    setGenre(genre);
  }

  var genresList = Object.keys(seriesList);

  return (
    <div className="main">
      <div className="container">
        <h1>TV Series</h1>
        <p>List of best series from every genre</p>

        <div className="buttons">
          {genresList.map((genre) => (
            <button onClick={() => clickHandler(genre)}>{genre}</button>
          ))}
        </div>

        <div className="list-container">
          <ul>
            {seriesList[genre].map((series) => (
              <li>
                <div className="image">
                  <img src={series.image} alt="" />
                </div>
                <div className="name">{series.name}</div>
                <div className="rating">{series.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
