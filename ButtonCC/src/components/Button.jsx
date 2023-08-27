import { useState } from 'react'

const Button = ( {position} ) => {
  const [count, setCount] = useState(0);
  const [bgc, setBackgroundColor] = useState('red');

  const colors = ['red', 'green', 'blue'];

  return (<button
    position={position}
    className="btn btn-default"
    style={{backgroundColor: bgc, backgroundImage: "none"}} 
    // removing background image since that is how we got the gradients working in App.css, and currently background-image takes precedence over background-color
    onClick={() => setBackgroundColor((bgc) => colors[colors.indexOf(bgc) + 1])}
  >
    Position is {position[0] + ',' + position[1]} <br />
  </button>
  );
}

export default Button;