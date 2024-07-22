import React, { useEffect, useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import PersonCard from './components/PersonCard/PersonCard/PersonCard';

const App = () => {
  // State to store fetched data and currently selected timeframe
  const [data, setData] = useState([]);
  const [currentFrame, setCurrentFrame] = useState('weekly');

  // Fetch data on component mount
  useEffect(() => {
    fetch("https://maflacs.github.io/frontend-mentor-time-tracking-dashboard/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, []);

  return (
    <div className="app">
      {/* PersonCard component: displays user info and allows timeframe selection */}
      <PersonCard currentFrame={currentFrame} setCurrentFrame={setCurrentFrame} />
      {/* CardContainer component: displays cards based on fetched data and selected timeframe */}
      <CardContainer data={data} currentFrame={currentFrame} />
    </div>
  );
};

export default App;
