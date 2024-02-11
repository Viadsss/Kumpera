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
import { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [priority, setPriority] = useState("");
  const [dayData, setDayData] = useState(data);
  const [day, setDay] = useState(1);
  const [currentDialog, setCurrentDialog] = useState(1);
  const [currentAllowance, setCurrentAllowance] = useState(0);
  const [currentExtra, setcurrentExtra] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDayData(parsedData.dayData);
      setPriority(parsedData.priority);
      setCurrentPage(5);

      if (
        parsedData.dayData[0].allowance !== null &&
        parsedData.day !== null &&
        parsedData.currentExtra !== null &&
        parsedData.remainingMoney !== null
      ) {
        setDay(parsedData.day);
        setcurrentExtra(parsedData.currentExtra);
        setRemainingMoney(parsedData.remainingMoney);
        setCurrentDialog(0);
      }
    }
  }, []);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handleStartPage() {
    setCurrentPage(1);
  }

  function handleResetPage() {
    localStorage.removeItem("userData");
    setCurrentPage(1);
    setPriority("");
    setDayData(data);
    setDay(1);
    setCurrentDialog(1);
    setCurrentAllowance(0);
    setcurrentExtra(0);
    setRemainingMoney(0);
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
          day={day}
          setDay={setDay}
          currentDialog={currentDialog}
          setCurrentDialog={setCurrentDialog}
          currentAllowance={currentAllowance}
          setCurrentAllowance={setCurrentAllowance}
          currentExtra={currentExtra}
          setcurrentExtra={setcurrentExtra}
          remainingMoney={remainingMoney}
          setRemainingMoney={setRemainingMoney}
        />
      )}
      {currentPage === 6 && (
        <Summary dayData={dayData} resetPage={handleResetPage} />
      )}
    </div>
  );
}

export default App;
