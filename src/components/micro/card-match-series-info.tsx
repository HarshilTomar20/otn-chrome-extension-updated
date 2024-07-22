import Live from "../../../assets/images/live.png"

interface MatchSeriesInfoProps {
    currentMatch: any;
}

export default function MatchSeriesInfo({ currentMatch }: MatchSeriesInfoProps) {
    return (
        <div className="flex justify-between items-center">
            <div className=" bg-gradient-to-r from-[#dad6f4] to-white p-2 dark:bg-gradient-to-r dark:from-slate-500 dark:to-[#121110]">
                <text className='text-[#252775] dark:text-[#ABABAB]'>
                    {currentMatch?.oSeries?.sTitle}
                </text>
            </div>
            <img src={Live} className="h-5" alt="live" />
        </div>
    );
}