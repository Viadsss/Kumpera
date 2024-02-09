// importing pages
import Kumpera from "./pages/Kumpera";
import Describe from "./pages/Describe";
import Student from "./pages/Student";
import Prioritize from "./pages/Prioritize";
import Simulator from "./pages/Simulator";
import Summary from "./pages/Summary";

// importing styles
import "./styles/App.css";
import "./styles/Pages.css";
import "./styles/Modal.css";
import "./styles/Simulator.css";

import data from "./models";
import { useState } from "react";

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
