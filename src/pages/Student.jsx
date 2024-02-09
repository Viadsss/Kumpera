import PropTypes from "prop-types";
import { useState } from "react";

import BackDialog from "../components/dialogs/BackDialog";

export default function Student({ nextPage, startPage }) {
  const [showBackDialog, setShowBackDialog] = useState(false);

  function showDialog() {
    setShowBackDialog(true);
  }

  function handleGoBackDialog() {
    startPage();
    setShowBackDialog(false);
  }

  return (
    <>
      <div className="describe_container">
        <div className="describe_box">
          <div className="describe_question">Are you a student?</div>
          <div className="describe_btns">
            <button onClick={nextPage}>Yes, I am</button>
            <button onClick={showDialog}>No, I&apos;m not</button>
          </div>
        </div>
      </div>
      {showBackDialog && <BackDialog goBack={handleGoBackDialog} />}
    </>
  );
}

Student.propTypes = {
  nextPage: PropTypes.func.isRequired,
  startPage: PropTypes.func.isRequired,
};
