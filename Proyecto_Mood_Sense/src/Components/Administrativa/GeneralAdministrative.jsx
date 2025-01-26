import { useState, useEffect } from 'react';
import "../Administrativa/GeneralAdministrative.css";
import { getEmotions } from '../service/service'; 

const GeneralAdministrative = () => {
  const [stats, setStats] = useState({
    happy: 0,
    sad: 0,
    scared: 0,
    angry: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const emotionsData = await getEmotions();
      calculateStats(emotionsData);
    };
    fetchData();
  }, []);

  const calculateStats = (emotions) => {
    const newStats = {
      happy: 0,
      sad: 0,
      scared: 0,
      angry: 0
    };

    emotions.forEach(emotion => {
      const score = parseFloat(emotion.main_emotion);
      console.log("Emotion score:", score); // Agrega esta línea para inspeccionar los valores.
      
      if (score === 10) {
        newStats.happy += 1;
      } else if (score === -8) {
        newStats.sad += 1;
      } else if (score === -7) {
        newStats.scared += 1;
      } else if (score === -6) {
        newStats.angry += 1;
      }
    });

    setStats(newStats);
  };

  return (
    <div className="emotion-stats">
      <div className="emotion-card happy">
        <h3>Feliz</h3>
        <p>{stats.happy}</p>
      </div>
      <div className="emotion-card sad">
        <h3>Triste</h3>
        <p>{stats.sad}</p>
      </div>
      <div className="emotion-card scared">
        <h3>Miedo</h3>
        <p>{stats.scared}</p>
      </div>
      <div className="emotion-card angry">
        <h3>Enojo</h3>
        <p>{stats.angry}</p>
      </div>
    </div>
  );
};

export default GeneralAdministrative;
