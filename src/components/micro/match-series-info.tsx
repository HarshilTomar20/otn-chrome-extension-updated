import Live from "../../../assets/images/live.png";

interface MatchSeriesInfoProps {
    currentMatch: any;
}

export default function MatchSeriesInfo({ currentMatch }: MatchSeriesInfoProps) {
    return (
        <div className="px-6 my-2 flex justify-between items-center">
            <div className="bg-gradient-to-r from-[#dad6f4] to-white p-1 dark:bg-gradient-to-r dark:from-slate-500 dark:to-[#121110]">
                <text className='text-[#252775] dark:text-[#ABABAB]'>
                    <span className="text-[#252775] dark:text-[#FF8C00] text-xs">●</span> {currentMatch?.oSeries?.sTitle}
                </text>
                <text className='ml-2 text-[#252775] dark:text-[#ABABAB]'>
                    <span className="text-[#252775] dark:text-white text-xs">●</span> {currentMatch.sSubtitle}
                </text>
            </div>
            <img src={Live} className="h-5" alt="live" />
        </div>
    );
}