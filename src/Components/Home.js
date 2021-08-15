import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="home">
      <div className="home-row">
        <div className="typing">
          <div className="static-text">I'm Saish Gadekar</div>
          <div className="loop">
            <Typewriter
              words={["An Engineer", "A Gamer", "A Web Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => console.log(`Done after 5 loops!`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
