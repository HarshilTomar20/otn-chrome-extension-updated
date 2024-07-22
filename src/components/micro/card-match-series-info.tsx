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
            <div className="flex bg-gradient-to-r from-[#dad6f4] to-white p-2 dark:bg-gradient-to-r dark:from-slate-500 dark:to-[#121110]">
                <text className='text-[#252775] dark:text-[#ABABAB] ml-2'>
                    {currentMatch?.oSeries?.sTitle}
                </text>
            </div>
            <img src="/public/live.png" className="pl-auto mt-1 h-5" alt="live"/>
        </div>
    </>
  )
}
