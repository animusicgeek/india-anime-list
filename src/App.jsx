import { useState, useEffect, useMemo } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';

function App() {

  const [animeList, setAnimeList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  const years = ['No Date', ...Array.from({ length: 2013 - 2004 + 1 }, (_, i) => (2004 + i).toString())];

  function extractYear(airdate) {
    if (!airdate) return null;
    const match = airdate.match(/\b(20[0-1][0-9]|2004)\b/); // matches years 2004–2019
    return match ? match[0] : null;
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/hungama_tv_anime.json");
        const data = await response.json();
        console.log("Fetched JSON:", data); // optional but helpful
        setAnimeList(data); // assuming your JSON has a top-level `data` key
      } catch (error) {
        console.error("Failed to fetch anime list:", error);
      }
    };
    fetchData();
  }, []);

  const filteredAnime = useMemo(() => {
    if (!selectedYear) return animeList;
    if (selectedYear === 'No Date') {
      return animeList.filter(anime => !extractYear(anime.airdate));
    }
    return animeList.filter(anime => extractYear(anime.airdate) === selectedYear);
  }, [selectedYear, animeList]);

  return (
    <div className='bg-base-200'>
      <Navbar />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Welcome to a one-of-a-kind archive that celebrates the history of anime broadcasts in India. This site is a personal passion project built to document and preserve the shows that once lit up Indian screens — from nostalgic classics to lesser-known gems that quietly made their mark.
              <br /><br />
              This evolving database was lovingly compiled by <a href="https://x.com/banana_sethhh" target="_blank" className="link text-yellow-300 font-semibold">Ichigo A Panchal 👁⃤</a>, whose deep-rooted love for anime and meticulous research powers this collection. The site's layout was made by a bum called <a href="https://x.com/thefakeleaker" target="_blank" className="link text-secondary font-semibold">The Fake Leaker</a>
              <br /><br />
              Whether you're here to relive childhood favorites or discover what aired across Indian networks over the years, we hope this space gives you that spark of familiarity and wonder that anime always delivers.
            </p>
            <a href="#anime-grid" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <div id="anime-grid" className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-amber-50 text-blue-950"> {selectedYear || 'Sort'}</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
           {years.map((year) => (
              <li key={year}>
                <a onClick={() => setSelectedYear(year)}>{year}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-auto p-4 mx-auto">
        {filteredAnime.map((anime, index) => (
          <Card key={index} shows={anime.shows} airdate={anime.airdate} img={anime.img} />
        ))}
      </div>


    </div>
  )
}

export default App
