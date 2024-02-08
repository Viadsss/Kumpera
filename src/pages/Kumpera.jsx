import PropTypes from "prop-types";
import Img from "/assets/girl_money.jpg";
import Logo from "/assets/Kumpera-Logo.png";

export default function Kumpera({ nextPage }) {
  return (
    <div className="kumpera_container">
      <div className="kumpera_text-container">
        <div className="kumpera_icon">
          <img src={Logo} />
        </div>
        <h1 className="kumpera_title">Kumpera</h1>
        <h2 className="kumpera_subtitle">
          Rendering Tips, Fostering Healthy Financial Habits
        </h2>
        <h3 className="kumpera_headline">
          &quot;Ang Kumpare natin sa pera, Kumpera!&quot;
        </h3>
        <p className="kumpera_about">
          Introducing Kumpera, a student budget simulation tackling the
          complexities of personal finance. Navigate real-life scenarios,
          empowering students to make informed financial decisions and cultivate
          essential money management skills.
        </p>
        <div>
          <button className="kumpera_btn" onClick={nextPage}>
            Get Started
          </button>
        </div>
      </div>
      <div className="kumpera_img-container">
        <img src={Img} />
      </div>
    </div>
  );
}

Kumpera.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
