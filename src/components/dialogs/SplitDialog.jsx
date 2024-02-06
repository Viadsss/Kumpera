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
        <div>
          <div>Your Allowance: {currentAllowance}</div>
          <div>Your allowance split budget:</div>
          <div>Needs: {needs}</div>
          <div>Wants: {wants}</div>
          <div>Extra Money: {extra}</div>
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
