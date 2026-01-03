import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full h-[5vh] flex justify-center items-center m-2.5">
          <label className="cursor-pointer relative h-[1.5em] w-[3em] rounded-full bg-secondary-foreground shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
            <input
              className="peer h-[1em] w-[1em] opacity-0"
              id=""
              name=""
              type="checkbox"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            {theme === "light" ? (
              <span className="absolute left-[0.25em] top-1/2 flex h-[1.1em] w-[1.1em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(244, 244, 245)]  duration-300 peer-checked:left-[calc(100%-1.375em)]">
                <span className="relative h-full w-full rounded-full flex justify-center items-center">
                  <Moon size={15} className="text-sidebar-primary" />
                </span>
              </span>
            ) : (
              <span className="absolute left-[0.25em] top-1/2 flex h-[1.1em] w-[1.1em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(39, 39, 42)]  duration-300 peer-checked:left-[calc(100%-1.375em)]">
                <span className="relative h-full w-full rounded-full flex justify-center items-center">
                  <Sun size={15} className="text-primary" />
                </span>
              </span>
            )}
          </label>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
