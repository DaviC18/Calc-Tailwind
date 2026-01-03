import { Delete } from "lucide-react";
import "./App.css";

const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-background text-secondary-foreground">
      <div id="container" className="flex flex-row m-2.5 gap-10">
        <section
          id="buttons"
          className="w-1/2 border border-chart-5 rounded-md m-2.5 grid grid-cols-4 items-center justify-items-center"
        >
          <span className="bg-primary cursor-pointer">AC</span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            ( )
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            %
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            &#247;
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            7
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            8
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            9
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            x
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            4
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            5
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            6
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            &#45;
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            1
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            2
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            3
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            +
          </span>
          <span className="bg-accent-foreground text-card cursor-pointer">
            0
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            ,
          </span>
          <span className="bg-sidebar-accent text-primary cursor-pointer">
            <Delete size={45} />
          </span>
          <span className="bg-sidebar-accent text-foreground cursor-pointer">
            &#61;
          </span>
        </section>
        <section
          id="display"
          className="w-1/2 border border-chart-5 rounded-md m-2.5 "
        >
          <form
            action=""
            className="w-full h-1/2 flex flex-col items-end justify-center"
          >
            <input
              dir="rtl"
              type="text"
              name="display"
              id="display"
              placeholder="0"
              className=" m-0 w-11/12 h-1/2 text-9xl"
            />
            <div id="to" className="pr-2.5 text-5xl">
              0
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default App;
