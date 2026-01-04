import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Calculator from "./lib/Calculator";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col">
        <main className="w-full h-screen flex flex-col items-center justify-center bg-foreground text-secondary-foreground select-none">
          <ModeToggle />

          <Calculator />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
