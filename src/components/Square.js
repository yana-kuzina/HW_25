import PropTypes from "prop-types";

const Square = ({ value, onClick, isWinner }) => {
  const winnerClassName = isWinner ? "winner-square" : "";

  return (
    <button className={`square ${winnerClassName}`} onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]).isRequired,
  onClick: PropTypes.func.isRequired,
  isWinner: PropTypes.bool.isRequired,
};

export default Square;
