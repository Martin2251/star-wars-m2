import React from "react";
// pass in props to make it more dynamic
function Card(props) {
  return (
    <div>
      <h4>{props.character.name}</h4>
      <p>{props.character.height} </p>
      <p>{props.character.mass}</p>
    </div>
  );
}

export default Card;
