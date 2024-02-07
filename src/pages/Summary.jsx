import PropTypes from "prop-types";

export default function Summary({ dayData, resetPage }) {
  const allowanceTotal = dayData.reduce((sum, item) => sum + item.allowance, 0);
  const savingsTotal = dayData.reduce((sum, item) => sum + item.savings, 0);

  const savePercent = ((savingsTotal / allowanceTotal) * 100).toFixed(2);

  let message = "";
  if (savePercent < 15) {
    message = "You need to save more next time! 🥊";
  } else if (savePercent < 20) {
    message = "Keep working on it! You are close! 💪";
  } else if (savePercent < 25) {
    message = "You did well! You are on the target! 🎯";
  } else {
    message = "Amazing! You are so frugal! 💸";
  }

  return (
    <div>
      <div>Your Total Allowancce: {allowanceTotal}</div>
      <div>Your Total Save: {savingsTotal}</div>
      <div>
        <h2>You saved of {savePercent}% your allowance</h2>
        <h2>{message}</h2>
        <button onClick={resetPage}>Reset</button>
      </div>
    </div>
  );
}

Summary.propTypes = {
  dayData: PropTypes.array.isRequired,
  resetPage: PropTypes.func.isRequired,
};
