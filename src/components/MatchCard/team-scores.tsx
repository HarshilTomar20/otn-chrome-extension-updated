import FlagTeam from "../../assets/team-placeholder.svg";

export const S3_PREFIX = 'https://media.oneturf.news/';

interface TeamScoresProps {
    currentMatch: any;
    Bat: any;
}

export default function TeamScores({ currentMatch, Bat }: TeamScoresProps) {
    // Extract and format the start time
    const startTime = new Date(currentMatch.dStartDate).toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="flex mt-2 text-center space-x-4">
            {/* Team A */}
            <div className="flex flex-col w-1/3 text-[#252775] dark:text-white">
                <span className='font-bold text-lg'>{currentMatch.oTeamScoreA?.oTeam?.sAbbr}</span>
                <img 
                    className="w-20 p-1 mr-6 mt-1 mx-auto my-2 rounded-full border-2 border-[#252775] dark:border-orange-600"
                    src={currentMatch.oTeamScoreA?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreA?.oTeam?.oImg?.sUrl}` : 
                    FlagTeam}
                />
                <span className='text-lg'>
                    {currentMatch.oTeamScoreA?.sScoresFull ? (
                        <>
                            {currentMatch.oTeamScoreA.sScoresFull.split(' (')[0]}
                            {currentMatch.oTeamScoreA.sScoresFull.split(' (')[1]?.trim() && (
                                <span className='text-sm text-gray-500'> 
                                    {` (${currentMatch.oTeamScoreA.sScoresFull.split(' (')[1]?.replace(' ov)', '')} ov)`}
                                </span>
                            )}
                        </>
                    ) : (
                        <>
                            {Bat}
                        </>
                    )}
                </span>       
            </div>

            <div className="text-[#252775] dark:text-white my-auto w-1/5">
              <text className="my-auto py-4 text-sm uppercase">
                {startTime}
              </text>
              <div className="py-2 mt-2 border border-[#252775] dark:border-[#5E5E5E] rounded-lg">
                  VS
              </div>
            </div>

            {/* Team B */}
            <div className="flex flex-col w-1/3 text-[#252775] dark:text-white">
                <span className='font-bold text-lg pl-2'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
                <img 
                    className="w-20 p-1 ml-8 mt-1 mx-auto my-2 rounded-full border-2 border-[#252775] dark:border-orange-600"
                    src={currentMatch.oTeamScoreB?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreB?.oTeam?.oImg?.sUrl}` : 
                    FlagTeam}
                />
                <span className='text-lg'>
                    {currentMatch.oTeamScoreB?.sScoresFull ? (
                        <>
                            {currentMatch.oTeamScoreB.sScoresFull.split(' (')[0]}
                            {currentMatch.oTeamScoreB.sScoresFull.split(' (')[1]?.trim() && (
                                <span className='text-sm text-gray-500'> 
                                    {` (${currentMatch.oTeamScoreB.sScoresFull.split(' (')[1]?.replace(' ov)', '')} ov)`}
                                </span>
                            )}
                        </>
                    ) : (
                        <>
                            {Bat}
                        </>
                    )}
                </span> 
            </div>
        </div>
    );
}