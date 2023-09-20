import { useEffect } from 'react';

const Button = ( {position, newCenter, onButtonClick, bgi} ) => {

  let transitionTime = 2000           // <-- 100 ms - time our animation will last
  let previousTime, start = 0;        // <-- stores data on animation
  let angle = 180;                    // <-- angle of gradient
  let animationDirection = 'forwards' // <-- stores the animation direction
  let intervalFrame;                          // <-- stores the interval frame
  let currentPct = 0;                         // <-- current percentage through the animation
  let elapsed = 0;                            // <-- number of frames which have ellapsed 

  const gradientStopOne = [
    { pct: 0,  color: { r: 0, g: 0, b: 255 } }, // The first color in your gradient
    { pct: 100, color: { r: 255, g: 0, b: 0 } }   // The color you want your first color to transition to
  ];
  const gradientStopTwo = [
    { pct: 0,  color: { r: 255, g: 0, b: 0 } }, // The second color in your gradient
    { pct: 100, color: { r: 0, g: 0, b: 255 } }  // The color you want your second color to transition to
  ]

  // This function transitions between two rgb colors
    const getColor = function(pct, colorSet) {
      for (var i = 1; i < colorSet.length - 1; i++) {
          if (pct < colorSet[i].pct) {
              break;
          }
      }

      // This conversion figures out the transition between two rgb values
      let lower = colorSet[i - 1];
      let upper = colorSet[i];
      let range = upper.pct - lower.pct;
      let rangePct = (pct - lower.pct) / range;
      let pctLower = 1 - rangePct;
      let pctUpper = rangePct;
      let color = {
          r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
          g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
          b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
      };
      // And returns the rgb code
      return `rgb(${color.r}, ${color.g}, ${color.b})`;
  }

  // This is our animation which we run on hover
  const animateGradient = function() {
      if(intervalFrame === undefined) {
          intervalFrame = setInterval(() => {
              let time = transitionTime / 1000; // time in seconds
              let numberOfFrames = time * 60; // 60 frames per second -> 1 second = 60 frames
              
              // If the animation is going forward
              if(animationDirection === 'forwards') {
                  // Add 1 to elapsed
                  elapsed += 1;
                  // The elapsed frames out of max frames
                  currentPct = Math.min(elapsed / numberOfFrames, 1) * 100;
              }
              else {
                  // Otherwise we're going back - subtract 1 from ellapsed
                  elapsed -= 1;
                  // The elapsed frames out of max frames
                  currentPct = Math.max(elapsed / numberOfFrames, 0) * 100;
              }
              
              // Calculate current color in this time for each gradient color
              let colorOne = getColor(currentPct, gradientStopOne);
              let colorTwo = getColor(currentPct, gradientStopTwo);

              // Generate CSS string
              let generateGradient = `linear-gradient(${colorOne}, ${colorTwo})`;
              
              // Add it to our background.
              bgi = generateGradient;
              console.log(newCenter);

              // End the interval when we're done
              if(currentPct === 100 || currentPct === 0) {
                  clearInterval(intervalFrame);
                  intervalFrame = undefined;
              }
          }, 16.667); // 60 frames per second
      }
  };

  const updateBackgroundImage = (center, pos) => {
    if(center.toString() == pos.toString()){
      bgi="radial-gradient(green,black)";
      animateGradient();
    } else {
      bgi="radial-gradient(red, black)";
    }
  }
 
  useEffect(() => {
    updateBackgroundImage(newCenter, position);
  }, [bgi, newCenter, position, intervalFrame])

  return (<button
    position={position}
    style={{background: bgi, transition: 'background-image 3s ease 3s'}}
    className="btn btn-default"
    onClick={() => onButtonClick(position)}
  >
    Position is {position[0] + ',' + position[1]} <br />
    newCenter is {newCenter[0] + ', ' + newCenter[1]}
  </button>
  );
}

export default Button;