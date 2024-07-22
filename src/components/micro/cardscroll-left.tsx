interface ToggleProps {
    goToPreviousMatch: any;
    matches: any;
}

export default function ScrollerLeft({goToPreviousMatch, matches}: ToggleProps) {
  return (
    <div className='flex justify-between'>
          <button 
            className="px-4 py-2 rounded-md text-[#252775] dark:text-orange-600"
            onClick={goToPreviousMatch}
            disabled={matches.length === 0}
          >
            &larr;
          </button>
      </div>
  )
}

