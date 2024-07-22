import { useEffect, useState } from 'react';
import './App.css';
import { Match } from './types/common';
import { getMatchData } from './utils/getMatchData';
import BrandLogo from './components/shared/brand-logo';
import ThemeToggle from './components/shared/theme-toggle';
import TeamScores from './components/MatchCard/team-scores';
import TossResult from './components/MatchCard/toss-result';
import ScrollerLeft from './components/micro/card-scroll-left';
import ScrollerRight from './components/micro/card-scroll-right';
import MatchSeriesInfo from './components/micro/card-match-series-info';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [theme, setTheme]= useState("light");
  const Bat="Yet to Bat";
  const url = 'https://match-management.api.oneturf.news/api/fetchMiniScorecardData';

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMatchData(url);
      setMatches(data);
      console.log(data);
    };

    // Fetch data immediately on mount
    fetchData();

    // Set interval to fetch data every 3 seconds
    const interval = setInterval(fetchData, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [url]);

  useEffect(()=> {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const HandleThemeSwitch= ()=> {
    setTheme( theme === "dark" ? "light" : "dark")
  }

  const goToNextMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const goToPreviousMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  const currentMatch = matches[currentMatchIndex] || {};

  return (
    <div className='container w-[500px] bg-[#FFFFFF] text-black dark:bg-[#121110] dark:text-white pb-2'>

      {/* Navbar */}
      <div className='flex bg-[#252775] dark:bg-[#2E2E2E] py-2'>
        <BrandLogo/>
        <ThemeToggle HandleThemeSwitch={HandleThemeSwitch} theme={theme} />
      </div>


      <div className='flex'>
        <ScrollerLeft goToPreviousMatch={goToPreviousMatch} matches={matches}/>
        <div className='border-black dark:border-zinc-600 w-11/12 rounded-t-lg text-center m-4'>
          <div className='px-4 pt-4'>
            <div className='flex text-xs'>
              <MatchSeriesInfo currentMatch={currentMatch}/>
            </div>
            <TeamScores currentMatch={currentMatch} Bat={Bat}/>
          </div>
        </div>
        <ScrollerRight matches={matches} goToNextMatch={goToNextMatch}/>
      </div>

      <div className='w-11/12 mx-auto'>
        <TossResult currentMatch={currentMatch}/>
      </div>
    </div>
  );
}

export default App;
