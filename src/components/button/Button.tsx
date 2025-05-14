import "./button.css"

export const Button = ({ label, parentMethod }) => {
  return (
    <button onClick={parentMethod} className="btn">
      {label}
    </button>
  );
};
