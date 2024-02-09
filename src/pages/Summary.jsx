import PropTypes from "prop-types";

export default function Summary({ dayData, resetPage }) {
  const allowanceTotal = dayData.reduce((sum, item) => sum + item.allowance, 0);
  const savingsTotal = dayData.reduce((sum, item) => sum + item.savings, 0);

  const savePercent = ((savingsTotal / allowanceTotal) * 100).toFixed(2);

  let message = "";
  if (savePercent < 10) {
    message = "You need to save more next time! 🥊";
  } else if (savePercent < 15) {
    message = "Keep working on it! You are close! 💪";
  } else if (savePercent < 20) {
    message = "You did well! 🎯";
  } else {
    message = "Amazing! You are so frugal! 💸";
  }

  return (
    <div className="summary_container">
      <div className="summary_box">
        <div className="summary_info">
          <div>
            Your Total Allowance: <span>{allowanceTotal}</span>
          </div>
          <div>
            Your Total Save: <span>{savingsTotal}</span>
          </div>
        </div>
        <div className="summary_message">
          <div>
            You saved <span>{savePercent}%</span> of your allowance
          </div>
          <div>{message}</div>
        </div>
        <div className="summary_btn">
          <button onClick={resetPage}>Reset</button>
        </div>
      </div>
    </div>
  );
}

Summary.propTypes = {
  dayData: PropTypes.array.isRequired,
  resetPage: PropTypes.func.isRequired,
};
