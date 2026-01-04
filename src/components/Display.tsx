import { Github } from "lucide-react";

interface DisplayProps {
  display: string;
  result: string;
}

const Display = ({ display, result }: DisplayProps) => {
  return (
    <section
      id="display"
      className="w-1/2 h-[96.7%] rounded-md bg-secondary-foreground m-2.5 shadow-[inset_0px_0px_20px_-7px_rgba(0,0,0,0.5)] flex flex-col"
    >
      <form
        action=""
        className="w-full h-10/12 mx-auto flex flex-col items-end justify-"
      >
        <input
          dir="rtl"
          type="text"
          name="display"
          id="display"
          placeholder="0"
          value={display}
          className=" m-0 w-11/12 h-1/2 text-9xl text-black placeholder:text-card"
        />
        <div id="to" className="pr-2.5 text-5xl text-card">
          {result}
        </div>
      </form>
      <div className="github w-full h-2/12 flex justify-end items-center pb-2.5">
        <button>
          <a href="https://github.com/DaviC18">
            <Github
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              size={40}
              className="w-12 hover:scale-110 text-background duration-200 text-4xl hover:stroke-primary"
            />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Display;
