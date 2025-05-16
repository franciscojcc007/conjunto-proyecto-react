import "./button.css"

interface buttonProps{
  label: string;
  parentMethod: ()=> void
}

export const Button = ({ label, parentMethod }: buttonProps) => {
  return (
    <button onClick={parentMethod} className="btn">
      {label}
    </button>
  );
};

