import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full h-[5vh] flex justify-center items-center m-2.5">
          <label className="cursor-pointer relative h-[1.5em] w-[3em] rounded-full bg-card shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
            <span className="absolute inset-[0.1em] rounded-full border-[1px] border-primary"></span>
            <div className="absolute left-[0.30em] top-1/2 flex h-[1em] w-[1em] -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[inset_0px_1px_1px_0px] shadow-ring">
              <div className="h-[0.75em] w-[0.75em] rounded-full bg-card shadow-[0px_1px_1px_0px] shadow-ring"></div>
            </div>
            <div className="absolute right-[0.5em] top-1/2 h-[0.125em] w-[0.75em] -translate-y-1/2 rounded-full bg-primary"></div>
            <input
              className="peer h-[1em] w-[1em] opacity-0"
              id=""
              name=""
              type="checkbox"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <span className="absolute left-[0.25em] top-1/2 flex h-[1.1em] w-[1.1em] -translate-y-1/2 items-center justify-center rounded-full bg-card  duration-300 peer-checked:left-[calc(100%-1.375em)]">
              <span className="relative h-full w-full rounded-full">
                <span className="absolute inset-[0.1em] rounded-full border-[1px] border-primary"></span>
              </span>
            </span>
          </label>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
