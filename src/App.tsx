import { useState, useRef, useEffect, useMemo } from "react";
import sample1 from "../public/sample1.png";
import sample2 from "../public/sample2.png";
import sample3 from "../public/sample3.png";

//子コンポーネント
function Timer(props) {
  const { seconds, isActive, startTimer, stopTimer, resetTimer, imagePath } =
    props;
  const style = "border-red-700 border-2 border-solid";
  const centerImgStyle = "w-80 border-red-700 border-2 border-solid";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl font-bold">{seconds}</div>
      <div className="mt-5">
        <div className="flex animate-slide-left">
          <img src={imagePath[0]} className="w-80" />
          <img src={imagePath[1]} className="w-80" />
          <img src={imagePath[2]} className="w-80" />
        </div>
        <div className="flex">
          <button
            className={`px-4 py-2 font-bold text-white ${
              isActive ? "bg-red-600" : "bg-green-600"
            } mr-2`}
            onClick={isActive ? stopTimer : startTimer}
          >
            {isActive ? "ストップ" : "スタート"}
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-gray-600"
            onClick={resetTimer}
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}

//親コンポーネントでないとフックはうまく起動しない
function App() {
  const timerInfo = [3, 5, 10];
  const imagePath = [sample1, sample2, sample3];
  const [timerIndex, setTimerIndex] = useState(0);
  const [seconds, setSeconds] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [imagePathIndex, setImagePathIndex] = useState(0);
  const countRef = useRef(null);

  const initialTimer = useMemo(() => {
    return timerInfo[timerIndex];
  }, [timerInfo, timerIndex]);

  useEffect(() => {
    setSeconds(initialTimer);
  }, [initialTimer]);

  const startTimer = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds <= 0) {
          if (timerIndex === timerInfo.length) {
            resetTimer();
            return 0;
          } else {
            updateTimer();
            console.log("Before:" + timerIndex);
            setTimerIndex((prevIndex) => prevIndex + 1); //setInterval直下に移動する
            console.log("After:" + timerIndex);
            return timerInfo[timerIndex];
          }
        } else {
          return seconds - 1;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(countRef.current);
    setIsActive(false);
  };

  const updateTimer = () => {
    clearInterval(countRef.current);
    startTimer();
  };

  const resetTimer = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTimerIndex(0);
  };
  return (
    <div className="App">
      <h1 className="text-orange-400">タイマーアプリ</h1>
      <div>
        <Timer
          seconds={seconds}
          isActive={isActive}
          imagePath={imagePath}
          startTimer={() => startTimer()}
          stopTimer={() => stopTimer()}
          resetTimer={() => resetTimer()}
        />
      </div>
    </div>
  );
}

export default App;
