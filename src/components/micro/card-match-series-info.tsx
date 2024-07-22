interface MatchSeriesInfoProps {
    currentMatch: any;
}


export default function MatchSeriesInfo({currentMatch}: MatchSeriesInfoProps) {
  return (
    <>
        {/* <text className='text-red-600 ml-2'>🔴 {currentMatch?.sLiveGameStatusStr && currentMatch.sLiveGameStatusStr.charAt(0).toUpperCase() + currentMatch.sLiveGameStatusStr.slice(1)}</text>
        <text className='text-gray-500 ml-2'>⚪️ {currentMatch.sSubtitle}</text>
        <text className='text-gray-500 ml-2'>
        ⚪️ {currentMatch?.oSeries?.sTitle && 
            (currentMatch.oSeries.sTitle.length > 26 
                ? `${currentMatch.oSeries.sTitle.slice(0, 26)}..` 
                : currentMatch.oSeries.sTitle
            )
        }
        </text> */}
        <div className="flex">
            <text className=" bg-gradient-to-r from-blue-600 to-white text-transparent bg-clip-text inline-block dark:from-gray-600 dark:to-black">
                {currentMatch?.oSeries?.sTitle}
            </text>
        </div>
    </>
  )
}
