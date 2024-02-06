import PropTypes from "prop-types";

export default function Prioritize({ nextPage, prioritize }) {
  function handleButtonClick(priority) {
    prioritize(priority);
    nextPage();
  }

  return (
    <div>
      <div>What do you want to prioritize?</div>
      <button onClick={() => handleButtonClick("Needs")}>Needs</button>
      <button onClick={() => handleButtonClick("Wants")}>Wants</button>
    </div>
  );
}

Prioritize.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prioritize: PropTypes.func.isRequired,
};
