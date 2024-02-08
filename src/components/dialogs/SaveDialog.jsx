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
        <div className="save_box">
          <div>
            Current extra money: <span>{currentExtra} </span>
            {remainingMoney > 0 && (
              <span className="yesterday">
                + {remainingMoney} (from yesterday)
              </span>
            )}
          </div>
          <div>
            Extra money total: <span>{currentExtra + remainingMoney}</span>
          </div>
        </div>
        <label className="save_question">
          How much do you want to save from your extra money?
        </label>
        <div className="save_field-btn">
          <input
            type="text"
            name="savings"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
          />
          <div className="save_btn">
            <button onClick={handleButtonClick}>Save it!</button>
          </div>
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
