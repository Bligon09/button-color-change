import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  const [center, setCenter] = useState([2,2]);
  let buttonGrid = [];

  for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
      buttonGrid.push(<div key = {[i,j]} className="card">
      <Button position={[i,j]} onButtonClick={() => setCenter([i,j])} /* this is a prop */>, 
      </Button>
    </div>);
    }
  }
  
  return (
    <>
      <div className="buttonGrid">
        {buttonGrid}
      </div>
    </>
  )
}

export default App
