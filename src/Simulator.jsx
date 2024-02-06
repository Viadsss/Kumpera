import PropTypes from "prop-types";
import { useState } from "react";
import AllowanceDialog from "./components/dialogs/AllowanceDialog";
import SplitDialog from "./components/dialogs/SplitDialog";
import SaveDialog from "./components/dialogs/SaveDialog";
import "./styles/Modal.css";
import RemainingDialog from "./components/dialogs/RemainingDialog";
import data from "./models";
import BarChart from "./components/charts/BarChart";
import PieChart from "./components/charts/PieChart";
import "./styles/Simulator.css";

export default function Simulator({ priority }) {
  const [currentDialog, setCurrentDialog] = useState(1);
  const [dayData, setDayData] = useState(data);
  const [day, setDay] = useState(1);
  const [currentAllowance, setCurrentAllowance] = useState(0);
  const [currentExtra, setcurrentExtra] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);

  function nextDialog() {
    setCurrentDialog(currentDialog + 1);
  }

  function stopDialog() {
    setCurrentDialog(0);
  }

  function startDialog() {
    setDay(day + 1);
    setCurrentDialog(1);
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

    const newDayData = [...dayData];
    newDayData[day - 1].allowance = amount;
    setCurrentAllowance(amount);
    setDayData(newDayData);
    return true;
  }

  function handleNeedsWantsExtraData(needs, wants, extra) {
    const newDayData = [...dayData];
    newDayData[day - 1].needs = needs;
    newDayData[day - 1].wants = wants;
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
    newDayData[day - 1].savings = amount;
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
        />
      )}
      <div className="simulatorBox">
        <div>
          <div>Day {day}</div>
          <div>Remaining money: {remainingMoney}</div>
        </div>
        <div className="chartBox">
          <BarChart chartData={dayData} />
          <PieChart chartData={dayData} remainingMoney={remainingMoney} />
        </div>
        <div>
          <button onClick={startDialog}>Next Day</button>
        </div>
      </div>
    </>
  );
}

Simulator.propTypes = {
  priority: PropTypes.string.isRequired,
};
