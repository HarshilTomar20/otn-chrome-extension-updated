import RightDark from "../../../assets/icons/right_dark.png";
import RightLight from "../../../assets/icons/right_light.png";

interface ToggleProps {
  matches: any;
  goToNextMatch: any;
  theme: string;
}

export default function ScrollerRight({matches, goToNextMatch, theme}: ToggleProps) {
  return (
    <div className='flex justify-between'>
          <button 
            className="font-bold px-4 py-2 rounded-md text-[#252775] dark:text-orange-600 text-3xl leading-none"
            onClick={goToNextMatch}
            disabled={matches.length === 0}
          >
            <img className="h-5 w-5" src={theme === "light" ? RightLight : RightDark}/>
          </button>
      </div>
  )
}

