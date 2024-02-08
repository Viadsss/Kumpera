import PropTypes from "prop-types";

export default function Describe({ nextPage, startPage }) {
  return (
    <div className="describe_container">
      <div className="describe_box">
        <div className="describe_title">What is 50/30/20 rule?</div>
        <div className="describe_info">
          <div>
            Originating from the 2005 book “All Your Worth: The Ultimate
            Lifetime Money Plan,” by US Senator Elizabeth Warren, 50/30/20 rule
            is an easy budgeting method that can help you to manage your money
            effectively, allocating 50% for needs/wants, 30% for needs/wants,
            and 20% for savings, depending on your desired goal.
          </div>
        </div>
        <div className="describe_question">Do you want to try it?</div>
        <div className="describe_btns">
          <button onClick={nextPage}>Yes</button>
          <button onClick={startPage}>No</button>
        </div>
      </div>
    </div>
  );
}

Describe.propTypes = {
  nextPage: PropTypes.func.isRequired,
  startPage: PropTypes.func.isRequired,
};
