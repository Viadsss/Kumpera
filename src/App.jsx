import Simulator from "./Simulator";
import Describe from "./start/Describe";
import Kumpera from "./start/Kumpera";
import { useState } from "react";
import Prioritize from "./start/Prioritize";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [priority, setPriority] = useState("");

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handleStartpage() {
    setCurrentPage(1);
  }

  return (
    <div className="content">
      {currentPage === 1 && <Kumpera nextPage={handleNextPage} />}
      {currentPage === 2 && (
        <Describe nextPage={handleNextPage} startPage={handleStartpage} />
      )}
      {currentPage === 3 && (
        <Prioritize nextPage={handleNextPage} prioritize={setPriority} />
      )}
      {currentPage === 4 && <Simulator priority={priority} />}
    </div>
  );
}

export default App;
