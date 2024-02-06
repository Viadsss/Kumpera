import PropTypes from "prop-types";
import { useState } from "react";

export default function SaveDialog({
  nextDialog,
  currentExtra,
  handleSavingsData,
  remainingMoney,
}) {
  const [savings, setSavings] = useState("");

  function handleButtonClick() {
    const valid = handleSavingsData(savings);
    if (valid) nextDialog();
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div>
          <div>
            Current extra money: {currentExtra}{" "}
            {remainingMoney > 0 && <p>+ {remainingMoney} (from yesterday)</p>}
          </div>
          <div>Extra money total: {currentExtra + remainingMoney}</div>
          <label>
            How much do you want to save from your extra money?
            <input
              type="text"
              name="savings"
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
            />
          </label>
          <button onClick={handleButtonClick}>Save it!</button>
        </div>
      </div>
    </div>
  );
}

SaveDialog.propTypes = {
  nextDialog: PropTypes.func.isRequired,
  currentExtra: PropTypes.number.isRequired,
  handleSavingsData: PropTypes.func.isRequired,
  remainingMoney: PropTypes.number.isRequired,
};
