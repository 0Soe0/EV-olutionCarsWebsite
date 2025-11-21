import './Home.css';
import { Background } from '../../components/Background/Background';
import { Navbar } from '../../components/Navbar/Navbar';
import { Hero } from '../../components/Hero/Hero';
import { useState, useEffect } from 'react';

export const Home = () => {

  let heroData = [
  {text1: "Dive into", text2: "what you love"},
  {text1: "Indulge", text2: "your passions"},
  {text1: "Give into", text2: "your dreams"}
];

const [heroCount, setHeroCount] = useState(2);
const [playStatus, setPlayStatus] = useState(false);

useEffect(() => {
 setInterval(() => {
  setHeroCount((count) => {return count === 2 ? 0 : count + 1;});
 }, 3000);
}, []);

  return (
    <div>
      <Background 
      playStatus={playStatus} 
      heroCount={heroCount}/>

      <Navbar />

      <Hero 
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
    </div>
  )
}