import theme from "./Theme";
import "bootstrap/dist/css/bootstrap.css";

function Button({ num, status, onClick }) {
  return (
    <button
      type="text"
      className="number"
      style={{
        fontSize: "4rem",
        backgroundColor: theme[status],
        height: "6rem",
        width: "6rem",
        margin: "auto",
        padding: "auto",
        border: "1px solid grey",
      }}
      onClick={() => onClick(num, status)}
    >
      {num}
    </button>
  );
}

export default Button;
