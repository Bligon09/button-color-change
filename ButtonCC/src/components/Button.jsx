import { useState } from 'react'

const Button = ( {position} ) => {
  const [count, setCount] = useState(0);

  return (<button
    position={position}
    className="btn btn-default"
    style={{backgroundColor: "red", backgroundImage: "none"}} 
    // removing background image since that is how we got the gradients working in App.css, and currently background-image takes precedence over background-color
    onClick={() => setCount((count) => count + 1)}
  >
    Position is {position[0] + ','+position[1]} <br />
  </button>
  );
}

export default Button;