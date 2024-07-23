import LeftDark from "../../../assets/icons/left_dark.png";
import LeftLight from "../../../assets/icons/left_light.png";

interface ToggleProps {
  goToPreviousMatch: any;
  matches: any;
  theme: string;
}

export default function ScrollerLeft({goToPreviousMatch, matches, theme}: ToggleProps) {
  return (
    <div className='flex justify-between'>
          <button 
            className="font-bold px-4 py-2 rounded-md text-[#252775] dark:text-orange-600 text-3xl leading-none"
            onClick={goToPreviousMatch}
            disabled={matches.length === 0}
          >
            <img className="h-5 w-5" src={theme === "light" ? LeftLight : LeftDark}/>
          </button>
      </div>
  )
}

