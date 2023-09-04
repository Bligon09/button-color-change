import { useState } from 'react'

const Button = ( {position, onButtonClick} ) => {
  const [count, setCount] = useState(0);

  return (<button
    position={position}
    className="btn btn-default"
    onClick={() => onButtonClick(position)}
  >
    Position is {position[0] + ',' + position[1]} <br />
  </button>
  );
}

export default Button;