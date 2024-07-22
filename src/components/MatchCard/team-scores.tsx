import { S3_PREFIX } from "../../utils/contants";
import FlagTeam from "../../assets/team-placeholder.svg"

interface TeamScoresProps {
    currentMatch: any;
    Bat: any;
  }
  
  export default function TeamScores({ currentMatch, Bat }: TeamScoresProps) {
    return (
      // <div>
      //   <div className='flex mx-4 mt-2 text-lg text-black dark:text-white'>
      //     <div className="mr-auto flex">
      //       <img 
      //         className="h-5 mr-2 mt-1"
      //         src={currentMatch.oTeamScoreA?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreA?.oTeam?.oImg?.sUrl}` : 
      //         FlagTeam}
      //       />
      //       <span className='font-bold '>{currentMatch.oTeamScoreA?.oTeam?.sAbbr} 🏏</span>
      //     </div>
      //     <span className='text-lg'>{currentMatch.oTeamScoreA?.sScoresFull || Bat}</span>
      //   </div>

      //   <div className='flex mt-1 mx-4 text-lg text-black dark:text-white'>
      //     <div className="mr-auto flex">
      //       <img 
      //         className="h-5 mr-2 mt-1"
      //         src={currentMatch.oTeamScoreB?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreB?.oTeam?.oImg?.sUrl}` : 
      //         FlagTeam}
      //       />
      //       <span className='font-bold'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
      //     </div>
      //     <span className='text-lg'>{currentMatch.oTeamScoreB?.sScoresFull || Bat}</span>
      //   </div>
      // </div>

      <div className="flex space-x-14 mt-2">

      <div className="flex flex-col">
        <span className='font-bold '>{currentMatch.oTeamScoreA?.oTeam?.sAbbr}</span>
        <img 
          className="w-20 mr-2 mt-1 mx-auto my-2"
          src={currentMatch.oTeamScoreA?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreA?.oTeam?.oImg?.sUrl}` : 
          FlagTeam}
        />
        <span className='text-lg'>
          {currentMatch.oTeamScoreA?.sScoresFull ? (
            <>
              {currentMatch.oTeamScoreA.sScoresFull.split(' (')[0]}
              <span className='text-sm text-gray-500 ml-1'> 
                ( {currentMatch.oTeamScoreA.sScoresFull.split(' (')[1]?.replace(' ov)', '')} )
              </span>
            </>
          ) : (
            Bat
          )}
        </span>      
      </div>

      <div className="my-auto p-2 border-gray-300">
        VS
      </div>

      <div className="flex flex-col">
        <span className='font-bold '>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
        <img 
          className="w-20 mr-2 mt-1 mx-auto my-2"
          src={currentMatch.oTeamScoreB?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreB?.oTeam?.oImg?.sUrl}` : 
          FlagTeam}
        />
        <span className='text-lg'>
          {currentMatch.oTeamScoreB?.sScoresFull ? (
            <>
              {currentMatch.oTeamScoreB.sScoresFull.split(' (')[0]}
              <span className='text-sm text-gray-500 ml-1'> 
                ( {currentMatch.oTeamScoreB.sScoresFull.split(' (')[1]?.replace(' ov)', '')} )
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
  