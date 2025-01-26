import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';
import { getInstitution, getEmotions } from '../service/service'; 

const EmotionsDashboard = () => {
  const [institutions, setInstitutions] = useState([]);
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const institutionsData = await getInstitution();
      const emotionsData = await getEmotions();
      setInstitutions(institutionsData);
      setEmotions(emotionsData);
    };
    fetchData();
  }, []);

  const calcularPuntajeTotal = (institutions, emotions) => {
    return institutions.map(institution => {
      const puntaje = emotions
        .filter(emotion => emotion.id_institution === institution.id)
        .reduce((total, emotion) => total + emotion.main_emotion, 0);
      return { ...institution, puntaje };
    });
  };

  const data = calcularPuntajeTotal(institutions, emotions);

  return (
    <div id="mainContainerGroup">
      {data.map(institution => (
        <div key={institution.id}>
          <h3 id="GroupH3">{institution.institution_name}</h3>
          <GaugeChart
            id={`odometro-${institution.id}`}
            nrOfLevels={20}
            colors={['#5F3E99', '#AE9EE4']}
            percent={institution.puntaje / 100}
          />
        </div>
      ))}
    </div>
  );
};

export default EmotionsDashboard;
