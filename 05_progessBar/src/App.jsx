import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/progressBar.jsx";

function App() {
  let [progress, setProgress] = useState(0); // ✅ Initialize with a number

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100)); // ✅ Correct update
    }, 1000);
    return () => clearInterval(interval); // ✅ Cleanup on unmount
  }, []); // ✅ Run only once on mount

  return (
    <>
      <ProgressBar progress={progress} /> {/* ✅ Pass as number */}
    </>
  );
}

export default App;
