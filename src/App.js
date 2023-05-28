import React, { useEffect, useState } from "react";

function App() {

  const [ totalTimeInSeconds, setTotalTimeInSeconds ] = useState( 3 );

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60

  useEffect(() => {
    if(totalTimeInSeconds === 0) {
      return
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1)
      }, 1000)
    }
  }, [totalTimeInSeconds]);

  return (
    <main>
      <div>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
    </main>
  );
}

export default App;