import PropTypes from "prop-types";

export default function SplitDialog({
  nextDialog,
  priority,
  currentAllowance,
  handleNeedsWantsExtraData,
}) {
  let needs, wants, extra;

  function handleButtonClick() {
    handleNeedsWantsExtraData(needs, wants, extra);
    nextDialog();
  }

  if (priority === "Needs") {
    needs = Math.round(currentAllowance * 0.5);
    wants = Math.round(currentAllowance * 0.3);
    extra = currentAllowance - (needs + wants);
  } else if (priority === "Wants") {
    wants = Math.round(currentAllowance * 0.5);
    needs = Math.round(currentAllowance * 0.3);
    extra = currentAllowance - (needs + wants);
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="split_box">
          <div>
            Your Allowance: <span>{currentAllowance}</span>
          </div>
          <br />
          <div>Your allowance split budget:</div>
          <div>
            Needs: <span>{needs}</span>
          </div>
          <div>
            Wants: <span>{wants}</span>
          </div>
          <div>
            Extra Money: <span>{extra}</span>
          </div>
        </div>
        <div className="split_btn">
          <button onClick={handleButtonClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

SplitDialog.propTypes = {
  nextDialog: PropTypes.func.isRequired,
  priority: PropTypes.string.isRequired,
  currentAllowance: PropTypes.number.isRequired,
  handleNeedsWantsExtraData: PropTypes.func.isRequired,
};
