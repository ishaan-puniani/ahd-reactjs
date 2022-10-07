import React from 'react';
import { Steps, Hints } from 'intro.js-react';
import "../styles/ContextTour.css";
import "intro.js/introjs.css";

const steps = [
    {
        element: ".hello",
        intro: "Hello step"
    },
    {
        element: ".world",
        intro: "World step"
    }
];
const hints = [
      {
        element: ".hello",
        hint: "Hello hint",
        hintPosition: "middle-right"
      }
];

const ContextTour = () => {

    const onExit = ()=>{

    }

    return(
        <div>
        <Steps
          enabled={true}
          steps={steps}
          initialStep={0}
          onExit={onExit}
        />
        <Hints enabled={true} hints={hints} />

        <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive">It's alive!</h1>
      </div>
    )
}

export default ContextTour;