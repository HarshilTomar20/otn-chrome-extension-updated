import Live from "../../../assets/images/live.png";
import DotLight from "../../../assets/icons/dotlight.png";
import DotDark from "../../../assets/icons/dotdark.png"

interface MatchSeriesInfoProps {
    currentMatch: any;
    theme: string;
}

export default function MatchSeriesInfo({ currentMatch, theme }: MatchSeriesInfoProps) {
    return (
        <div className="px-6 my-2 flex justify-between items-center">
            <div className="flex bg-gradient-to-r from-[#dad6f4] to-white p-1 dark:bg-gradient-to-r dark:from-slate-800 dark:to-[#121110] rounded-lg">
                <text className='flex text-[#252775] dark:text-[#ABABAB] items-center'>
                    <img src={theme === "light" ? DotLight : DotDark} className="ml-2 h-1.5 mr-1"/> {currentMatch?.oSeries?.sTitle}
                </text>
                <text className='flex ml-2 text-[#252775] dark:text-[#ABABAB] items-center'>
                    <img src={theme === "light" ? DotLight : DotDark} className="h-1.5 mr-1"/> {currentMatch.sSubtitle}
                </text>
            </div>
            <img src={Live} className="h-5" alt="live" />
        </div>
    );
}