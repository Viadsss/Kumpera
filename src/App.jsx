import Simulator from "./pages/Simulator";
import Describe from "./pages/Describe";
import Kumpera from "./pages/Kumpera";
import { useState } from "react";
import Prioritize from "./pages/Prioritize";
import "./styles/App.css";
import "./styles/Pages.css";
import "./styles/Modal.css";
import "./styles/Simulator.css";
import Summary from "./pages/Summary";
import data from "./models";
import Student from "./pages/Student";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [priority, setPriority] = useState("");
  const [dayData, setDayData] = useState(data);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handleStartPage() {
    setCurrentPage(1);
  }

  function handleResetPage() {
    setCurrentPage(1);
    setDayData(data);
  }

  return (
    <div className="content">
      {currentPage === 1 && <Kumpera nextPage={handleNextPage} />}
      {currentPage === 2 && (
        <Student nextPage={handleNextPage} startPage={handleStartPage} />
      )}
      {currentPage === 3 && (
        <Describe nextPage={handleNextPage} startPage={handleStartPage} />
      )}
      {currentPage === 4 && (
        <Prioritize nextPage={handleNextPage} prioritize={setPriority} />
      )}
      {currentPage === 5 && (
        <Simulator
          priority={priority}
          dayData={dayData}
          setDayData={setDayData}
          nextPage={handleNextPage}
        />
      )}
      {currentPage === 6 && (
        <Summary dayData={dayData} resetPage={handleResetPage} />
      )}
    </div>
  );
}

export default App;
