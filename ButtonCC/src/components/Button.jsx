// React 16 Button Component

import { useState } from 'react'

const Button = ( {position, text} ) => {
  const [count, setCount] = useState(0);

  return (<button
    position={position}
    className="btn btn-default"
    style={{
      margin: '10px 5px', 
      width: '400px', 
      height: '200px'
    }}
    onClick={() => setCount((count) => count + 1)}
  >
    Count is {count}! <br />
    And position is {position}
  </button>
  );
}

export default Button;