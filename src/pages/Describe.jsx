import PropTypes from "prop-types";

export default function Describe({ nextPage, startPage }) {
  return (
    <div>
      <div>The 50-30-20 rule is a a simple budgeting method that allocates</div>
      <ul>
        <li>50%</li>
        <li>30%</li>
        <li>20%</li>
      </ul>
      <div>Do you want to try it?</div>
      <button onClick={nextPage}>Yes</button>
      <button onClick={startPage}>No</button>
    </div>
  );
}

Describe.propTypes = {
  nextPage: PropTypes.func.isRequired,
  startPage: PropTypes.func.isRequired,
};
