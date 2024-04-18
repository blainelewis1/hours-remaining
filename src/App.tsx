import { useEffect, useState } from "react";

const dayStartTime = 9.5; // 930am
const dayEndTime = 21; // 9pm

function App() {
  // Update every so often.
  let [currentTime, setCurrentTime] = useState(new Date());
  currentTime = new Date();

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date());
      requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  const endTime = new Date();
  const endHours = Math.floor(dayEndTime);
  const endMinutes = (dayEndTime - endHours) * 60;
  endTime.setHours(endHours, endMinutes);
  endTime.setSeconds(0);

  const totalSecondsUntilEndTime = Math.floor(
    (endTime.getTime() - currentTime.getTime()) / 1000
  );
  const hoursUntilEndTime = Math.floor(totalSecondsUntilEndTime / 3600);
  const minutesUntilEndTime = Math.floor(
    (totalSecondsUntilEndTime % 3600) / 60
  );
  const secondsUntilEndTime = totalSecondsUntilEndTime % 60;

  return (
    <div className="h-screen grid items-center content-center">
      <h1 className="text-center text-6xl">
        <span className="font-bold font-mono">{hoursUntilEndTime}</span>&nbsp;
        <span className="font-light">hours</span>{" "}
        <span className="font-bold font-mono">{minutesUntilEndTime}</span>&nbsp;
        <span className="font-light">minutes</span>{" "}
        <span className="font-bold font-mono">{secondsUntilEndTime}</span>&nbsp;
        <span className="font-light">seconds</span>
      </h1>
    </div>
  );
}

export default App;
