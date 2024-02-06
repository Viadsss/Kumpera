import PropTypes from "prop-types";
import { useState } from "react";

export default function RemainingDialog({
  stopDialog,
  currentExtra,
  handleSpendingRemain,
}) {
  const [spend, setSpend] = useState("");

  function handleButtonClick() {
    const valid = handleSpendingRemain(spend);
    if (valid) stopDialog();
  }

  if (currentExtra === 0) stopDialog();

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div>
          <div>Your Remaining Money: {currentExtra}</div>
          <label>
            How much do you want to spend from your remaining money?
            <input
              type="text"
              name="spend"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
            />
          </label>
          <button onClick={handleButtonClick}>Spend it!</button>
        </div>
      </div>
    </div>
  );
}

RemainingDialog.propTypes = {
  stopDialog: PropTypes.func.isRequired,
  currentExtra: PropTypes.number.isRequired,
  handleSpendingRemain: PropTypes.func.isRequired,
};
