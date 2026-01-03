import { Delete } from "lucide-react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col">
        <main className="w-full h-screen flex flex-col items-center justify-center bg-foreground text-secondary-foreground">
          <ModeToggle />

          <div id="container" className="flex flex-row m-2.5  gap-10">
            <Buttons />
            <Display />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
