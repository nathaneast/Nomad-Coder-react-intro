import React from 'react';
import PropTypes from "prop-types";

const pokeball = [
  {
    id: 1,
    name: "bugi",
    image: "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  },
  {
    id: 2,
    name: "isang",
    image: "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  },
  {
    id: 3,
    name: "pairl",
    image: "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  }
];

function Pokemon({ name, pic, rating }) {
  return (
    <div>
      <h3>나와라 {name}</h3>
      <h4>{rating} / 5</h4>
      <img src={pic} alt={name} width="100px"></img>
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {pokeball.map(mon => (
        <Pokemon key={mon.id} name={mon.name} pic={mon.image} rating={mon.rating} />
      ))}
    </div>
  );
}

export default App;
