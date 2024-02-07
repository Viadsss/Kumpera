import PropTypes from "prop-types";

export default function Kumpera({ nextPage }) {
  return (
    <div>
      <div>
        <h1>Kumpera</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae numquam
          accusantium quod quam ex blanditiis magni iusto? Deleniti, recusandae.
          Laboriosam deleniti est accusamus animi in et suscipit, voluptatum
          fugit assumenda.
        </p>
        <button onClick={nextPage}>Proceed</button>
      </div>
    </div>
  );
}

Kumpera.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
