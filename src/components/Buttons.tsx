import { Delete } from "lucide-react";

interface ButtonsProps {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  onCalculate: () => void;
}

const Buttons = ({ setDisplay, setResult, onCalculate }: ButtonsProps) => {
  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  return (
    <section
      id="buttons"
      className="w-1/2 rounded-md m-2.5 grid grid-cols-4 items-center justify-items-center bg-secondary-foreground shadow-[inset_0px_0px_20px_-7px_rgba(0,0,0,0.9)]"
    >
      <button
        type="button"
        onClick={() => {
          setDisplay("");
          setResult("0"); // limpa também o resultado
        }}
        className="bg-primary text-white border-0 cursor-pointer"
      >
        AC
      </button>
      <button
        type="button"
        onClick={() => handleClick("(")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        (
      </button>
      <button
        type="button"
        onClick={() => handleClick(")")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        )
      </button>
      <button
        type="button"
        onClick={() => handleClick("%")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        %
      </button>

      <button
        type="button"
        onClick={() => handleClick("7")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        7
      </button>
      <button
        type="button"
        onClick={() => handleClick("8")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        8
      </button>
      <button
        type="button"
        onClick={() => handleClick("9")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        9
      </button>
      <button
        type="button"
        onClick={() => handleClick("÷")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        &#247;
      </button>

      <button
        type="button"
        onClick={() => handleClick("4")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        4
      </button>
      <button
        type="button"
        onClick={() => handleClick("5")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        5
      </button>
      <button
        type="button"
        onClick={() => handleClick("6")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        6
      </button>
      <button
        type="button"
        onClick={() => handleClick("-")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        -
      </button>

      <button
        type="button"
        onClick={() => handleClick("1")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        1
      </button>
      <button
        type="button"
        onClick={() => handleClick("2")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        2
      </button>
      <button
        type="button"
        onClick={() => handleClick("3")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        3
      </button>
      <button
        type="button"
        onClick={() => handleClick("+")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        +
      </button>

      <button
        type="button"
        onClick={() => handleClick("0")}
        className="bg-accent text-card-foreground cursor-pointer"
      >
        0
      </button>
      <button
        type="button"
        onClick={() => handleClick(",")}
        className="bg-sidebar text-primary cursor-pointer"
      >
        ,
      </button>
      <button
        type="button"
        onClick={() => setDisplay((prev) => prev.slice(0, -1))}
        className="bg-sidebar text-primary cursor-pointer"
      >
        <Delete size={35} />
      </button>

      <button
        type="button"
        onClick={onCalculate}
        className="bg-primary text-white border-0 cursor-pointer"
      >
        =
      </button>
    </section>
  );
};

export default Buttons;
