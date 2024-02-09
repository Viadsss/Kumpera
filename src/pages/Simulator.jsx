import PropTypes from "prop-types";
import { useState } from "react";

// import dialogs
import AllowanceDialog from "../components/dialogs/AllowanceDialog";
import SplitDialog from "../components/dialogs/SplitDialog";
import SaveDialog from "../components/dialogs/SaveDialog";
import RemainingDialog from "../components/dialogs/RemainingDialog";

// import charts
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";

export default function Simulator({ priority, dayData, setDayData, nextPage }) {
  const [day, setDay] = useState(1);
  const [currentDialog, setCurrentDialog] = useState(1);
  const [currentAllowance, setCurrentAllowance] = useState(0);
  const [currentExtra, setcurrentExtra] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);

  function nextDialog() {
    setCurrentDialog(currentDialog + 1);
  }

  function stopDialog() {
    setCurrentDialog(0);
  }

  function nextDay() {
    if (day < 30) {
      setDay(day + 1);
      setCurrentDialog(1);
    } else {
      nextPage();
      setDay(1);
    }
  }

  function handleAllowanceData(allowance) {
    const amount = parseInt(allowance);

    if (Number.isNaN(amount)) {
      alert("⚠️ Invalid Allowance:\n❗ Characters are not allowed");
      return false;
    }

    if (amount < 0) {
      alert("⚠️ Invalid Allowance:\n❗ Value should not be less than 0");
      return false;
    }

    // cloning / copy of dayData (shallow copy to avoid mutating the original array directly)
    const newDayData = [...dayData];
    newDayData[day - 1] = {
      ...newDayData[day - 1],
      allowance: amount,
    };
    setCurrentAllowance(amount);
    setDayData(newDayData);
    return true;
  }

  function handleNeedsWantsExtraData(needs, wants, extra) {
    const newDayData = [...dayData];
    newDayData[day - 1] = {
      ...newDayData[day - 1],
      needs,
      wants,
    };
    setcurrentExtra(extra);
    setDayData(newDayData);
  }

  function handleSavingsData(savings) {
    let amount = parseInt(savings);

    if (Number.isNaN(amount)) {
      alert("⚠️ Invalid Savings:\n❗ Characters are not allowed");
      return false;
    }

    if (amount < 0) {
      alert("⚠️ Invalid Savings:\n❗ Value should not be less than 0");
      return false;
    }

    if (amount > currentExtra + remainingMoney) {
      alert(
        "⚠️ Invalid Savings:\n❗ Desired amount to save from your extra money should not be bigger than your extra money"
      );
      return false;
    }

    const newDayData = [...dayData];
    newDayData[day - 1] = {
      ...newDayData[day - 1],
      savings: amount,
    };
    setcurrentExtra(currentExtra + remainingMoney - amount);
    setDayData(newDayData);
    return true;
  }

  function handleSpendingRemain(spend) {
    const amount = parseInt(spend);

    if (Number.isNaN(amount)) {
      alert("⚠️ Invalid Spending:\n❗ Characters are not allowed");
      return false;
    }

    if (amount < 0) {
      alert("⚠️ Invalid Spending:\n❗ Value should not be less than 0");
      return false;
    }

    if (amount > currentExtra) {
      alert(
        "⚠️ Invalid Savings:\n❗ Desired amount to spend from your remaining money should not be bigger than your remaining money"
      );
      return false;
    }

    setRemainingMoney(currentExtra - amount);
    return true;
  }

  return (
    <>
      {currentDialog === 1 && (
        <AllowanceDialog
          nextDialog={nextDialog}
          handleAllowanceData={handleAllowanceData}
        />
      )}
      {currentDialog === 2 && (
        <SplitDialog
          nextDialog={nextDialog}
          priority={priority}
          currentAllowance={currentAllowance}
          handleNeedsWantsExtraData={handleNeedsWantsExtraData}
        />
      )}
      {currentDialog === 3 && (
        <SaveDialog
          nextDialog={nextDialog}
          currentExtra={currentExtra}
          handleSavingsData={handleSavingsData}
          remainingMoney={remainingMoney}
        />
      )}
      {currentDialog === 4 && (
        <RemainingDialog
          stopDialog={stopDialog}
          currentExtra={currentExtra}
          handleSpendingRemain={handleSpendingRemain}
          setRemainingMoney={setRemainingMoney}
        />
      )}
      <div className="simulatorBox simulator_container">
        <div className="simulator_box">
          <div className="simulator_top">
            <div className="simulator_info">
              <h1 className="simulator_day">Day {day}</h1>
              <div>
                Remaining money: <span>{remainingMoney}</span>
              </div>
            </div>
            <div className="circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="chartBox">
            <BarChart chartData={dayData} />
            <PieChart chartData={dayData} remainingMoney={remainingMoney} />
          </div>
        </div>
        <div className="simulator_btn">
          <button onClick={nextDay}>Next Day</button>
        </div>
      </div>
    </>
  );
}

Simulator.propTypes = {
  priority: PropTypes.string.isRequired,
  dayData: PropTypes.array.isRequired,
  setDayData: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};
