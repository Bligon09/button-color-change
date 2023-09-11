const Button = ( {position, newCenter, onButtonClick} ) => {

  const updateBackgroundImage = (center, pos) => {
    console.log(center);
    if(center.toString() == pos.toString()){
      return "radial-gradient(blue, black)";
    }
    return "linear-gradient(75deg, red, black)";
  }

  const bgi=updateBackgroundImage(newCenter, position);

  return (<button
    position={position}
    style={{backgroundImage: bgi}}
    className="btn btn-default"
    onClick={() => onButtonClick(position)}
  >
    Position is {position[0] + ',' + position[1]} <br />
    newCenter is {newCenter[0] + ', ' + newCenter[1]}
  </button>
  );
}

export default Button;