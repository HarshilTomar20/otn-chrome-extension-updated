import FlagTeam from "../../assets/team-placeholder.svg";

export const S3_PREFIX = 'https://media.oneturf.news/';

interface TeamScoresProps {
    currentMatch: any;
    Bat: any;
}

export default function TeamScores({ currentMatch, Bat }: TeamScoresProps) {
    // Extract and format the start time
    const startTime = new Date(currentMatch.dStartDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="flex space-x-14 mt-2">
            {/* Team A */}
            <div className="flex flex-col">
                <span className='font-bold'>{currentMatch.oTeamScoreA?.oTeam?.sAbbr}</span>
                <img 
                    className="w-20 mr-2 mt-1 mx-auto my-2"
                    src={currentMatch.oTeamScoreA?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreA?.oTeam?.oImg?.sUrl}` : 
                    FlagTeam}
                />
                <span className='text-lg'>
                    {currentMatch.oTeamScoreA?.sScoresFull ? (
                        <>
                            {currentMatch.oTeamScoreA.sScoresFull.split(' (')[0]}
                            <span className='text-sm text-gray-500'> 
                                ({currentMatch.oTeamScoreA.sScoresFull.split(' (')[1]?.replace(' ov)', '')})
                            </span>
                        </>
                    ) : (
                        Bat
                    )}
                </span>      
            </div>

            <div className="text-[#252775] dark:text-white my-auto">
              <text className="my-auto py-4 text-sm">
                {startTime}
              </text>
              <div className="my-auto px-6 py-2 border border-[#252775] dark:border-[#5E5E5E] rounded-lg">
                  VS
              </div>
            </div>

            {/* Team B */}
            <div className="flex flex-col">
                <span className='font-bold'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
                <img 
                    className="w-20 ml-2 mt-1 mx-auto my-2"
                    src={currentMatch.oTeamScoreB?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreB?.oTeam?.oImg?.sUrl}` : 
                    FlagTeam}
                />
                <span className='text-lg'>
                    {currentMatch.oTeamScoreB?.sScoresFull ? (
                        <>
                            {currentMatch.oTeamScoreB.sScoresFull.split(' (')[0]}
                            <span className='text-sm text-gray-500'> 
                                ({currentMatch.oTeamScoreB.sScoresFull.split(' (')[1]?.replace(' ov)', '')})
                            </span>
                        </>
                    ) : (
                        Bat
                    )}
                </span>  
            </div>
        </div>
    );
}