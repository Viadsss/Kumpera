import PropTypes from "prop-types";

export default function BackDialog({ goBack }) {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="confirm_box">
          <div className="confirm_text">
            Sorry, this simulator is specifically designed to cater to
            students&apos; personal finance.
          </div>
          <div className="confirm_btn">
            <button onClick={goBack}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

BackDialog.propTypes = {
  goBack: PropTypes.func.isRequired,
};
