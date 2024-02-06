import PropTypes from "prop-types";
import { useState } from "react";

export default function AllowanceDialog({ nextDialog, handleAllowanceData }) {
  const [allowance, setAllowance] = useState("");

  function handleButtonClick() {
    const valid = handleAllowanceData(allowance);
    if (valid) nextDialog();
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div>
          <label>
            Allowance for today:
            <input
              type="text"
              name="allowance"
              value={allowance}
              onChange={(e) => setAllowance(e.target.value)}
            />
          </label>
          <button onClick={handleButtonClick}>Add Allowance</button>
        </div>
      </div>
    </div>
  );
}

AllowanceDialog.propTypes = {
  nextDialog: PropTypes.func.isRequired,
  handleAllowanceData: PropTypes.func.isRequired,
};
