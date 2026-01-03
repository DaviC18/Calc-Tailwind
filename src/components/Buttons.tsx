import { Delete } from "lucide-react";

const Buttons = () => {
  return (
    <section
      id="buttons"
      className="w-1/2 rounded-md m-2.5 grid grid-cols-4 items-center justify-items-center bg-secondary-foreground shadow-[inset_0px_0px_20px_-7px_rgba(0,0,0,0.9)]"
    >
      <span className="bg-primary cursor-pointer">AC</span>
      <span className="bg-sidebar text-primary cursor-pointer">( )</span>
      <span className="bg-sidebar text-primary cursor-pointer">%</span>
      <span className="bg-sidebar text-primary cursor-pointer">&#247;</span>
      <span className="bg-accent text-card-foreground cursor-pointer">7</span>
      <span className="bg-accent text-card-foreground cursor-pointer">8</span>
      <span className="bg-accent text-card-foreground cursor-pointer">9</span>
      <span className="bg-sidebar text-primary cursor-pointer">x</span>
      <span className="bg-accent text-card-foreground cursor-pointer">4</span>
      <span className="bg-accent text-card-foreground cursor-pointer">5</span>
      <span className="bg-accent text-card-foreground cursor-pointer">6</span>
      <span className="bg-sidebar text-primary cursor-pointer">&#45;</span>
      <span className="bg-accent text-card-foreground cursor-pointer">1</span>
      <span className="bg-accent text-card-foreground cursor-pointer">2</span>
      <span className="bg-accent text-card-foreground cursor-pointer">3</span>
      <span className="bg-sidebar text-primary cursor-pointer">+</span>
      <span className="bg-accent text-card-foreground cursor-pointer">0</span>
      <span className="bg-sidebar text-primary cursor-pointer">,</span>
      <span className="bg-sidebar text-primary cursor-pointer">
        <Delete size={45} />
      </span>
      <span className="bg-primary cursor-pointer">&#61;</span>
    </section>
  );
};

export default Buttons;
