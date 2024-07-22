interface ToggleProps {
    matches: any;
    goToNextMatch: any;
}

export default function ScrollerRight({matches, goToNextMatch}: ToggleProps) {
  return (
    <div className='flex justify-between'>
          <button 
            className="px-4 py-2 rounded-md text-[#252775] dark:text-orange-600"
            onClick={goToNextMatch}
            disabled={matches.length === 0}
          >
            &rarr;
          </button>
      </div>
  )
}

