import { useEffect, useState } from "react";

// const dayStartTime = 9.5; // 930am
const dayEndTime = 21; // 9pm

function App() {
  // Update every so often.
  const [, setFrame] = useState(0);

  useEffect(() => {
    const tick = () => {
      setFrame((i) => i + 1);
      requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  const currentTime = new Date();

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
    <div className="h-screen grid items-center content-center p-12">
      <h1 className="justify-center text-6xl grid grid-cols-[repeat(2,min-content)] lg:grid-cols-[repeat(6,min-content)] gap-4 items-center content-center">
        <span className="font-bold font-mono text-right">
          {hoursUntilEndTime}
        </span>
        <span className="font-light text-left">hours</span>{" "}
        <span className="font-bold font-mono text-right">
          {minutesUntilEndTime}
        </span>
        <span className="font-light text-left">minutes</span>{" "}
        <span className="font-bold font-mono text-right">
          {secondsUntilEndTime}
        </span>
        <span className="font-light text-left">seconds</span>
      </h1>
    </div>
  );
}

export default App;
