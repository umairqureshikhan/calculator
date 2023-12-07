const ButtonContainer = ({ onButtonClicked }: any) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="button-container">
      {buttonNames.map((buttonName) => (
        <button onClick={() => onButtonClicked(buttonName)} className="button">
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
