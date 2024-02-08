import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function RemainingDialog({
  stopDialog,
  currentExtra,
  handleSpendingRemain,
  setRemainingMoney,
}) {
  const [spend, setSpend] = useState("");

  useEffect(() => {
    if (currentExtra === 0) {
      setRemainingMoney(0);
      stopDialog();
    }
  }, [currentExtra, setRemainingMoney, stopDialog]);

  function handleButtonClick() {
    const valid = handleSpendingRemain(spend);
    if (valid) stopDialog();
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="remaining_box">
          <div>
            Your Remaining Money: <span>{currentExtra}</span>
          </div>
        </div>
        <label className="remaining_question">
          How much do you want to spend from your remaining money?
        </label>
        <div className="remaining_field-btn">
          <input
            type="text"
            name="spend"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
          />
          <div className="remaining_btn">
            <button onClick={handleButtonClick}>Spend it!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

RemainingDialog.propTypes = {
  stopDialog: PropTypes.func.isRequired,
  currentExtra: PropTypes.number.isRequired,
  handleSpendingRemain: PropTypes.func.isRequired,
  setRemainingMoney: PropTypes.func.isRequired,
};
