import PropTypes from "prop-types";

export default function Prioritize({ nextPage, prioritize }) {
  function handleButtonClick(priority) {
    prioritize(priority);
    nextPage();
  }

  return (
    <div className="prioritize_container">
      <div className="prioritize_box">
        <div>What do you want to prioritize?</div>
        <div className="prioritize_btns">
          <button onClick={() => handleButtonClick("Needs")}>Needs</button>
          <button onClick={() => handleButtonClick("Wants")}>Wants</button>
        </div>
      </div>
    </div>
  );
}

Prioritize.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prioritize: PropTypes.func.isRequired,
};
