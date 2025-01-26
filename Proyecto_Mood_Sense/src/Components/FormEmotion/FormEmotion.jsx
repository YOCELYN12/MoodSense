import React, { useState, useEffect } from 'react';
import { postEmotion } from '../service/service';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FormEmotion = () => {
  const [emotions, setEmotions] = useState({
    happiness: { checked: false, value: 10 },
    sadness: { checked: false, value: -8 },
    anger: { checked: false, value: -6 },
    fear: { checked: false, value: -7 },
    disgust: { checked: false, value: -5 },
    surprise: { checked: false, value: 0 }
  });
  const [details, setDetails] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPrimaryEmotion, setSelectedPrimaryEmotion] = useState(null);
  const [secondaryEmotions, setSecondaryEmotions] = useState(
    ['alegre', 'interesado', 'orgulloso', 'aceptado', 'optimista', 'melancolico', 'desanimado', 'solitario', 'desesperanzado', 'nostalgico', 'frustrado', 'irritado', 'indignado', 'resentido', 'furioso', 'ansioso', 'inseguro', 'preocupado', 'nervioso', 'aterrado', 'repugnado', 'asqueado', 'despreciado', 'horrorizado', 'ofendido', 'asombrado', 'impactado', 'maravillado', 'confundido', 'desconcertado']
    .reduce((acc, emotion) => ({ ...acc, [emotion]: { checked: false, value: 5 } }), {})
  );

  const emotionStats = {
    labels: ['Felicidad', 'Tristeza', 'Ira', 'Miedo', 'Asco', 'Sorpresa'],
    datasets: [{
      data: [10, 8, 6, 7, 5, 0],
      backgroundColor: [
        '#FFD700', // happiness
        '#4169E1', // sadness
        '#FF4500', // anger
        '#800080', // fear
        '#32CD32', // disgust
        '#FF69B4'  // surprise
      ],
    }]
  };

  const handleEmotionChange = emotion => {
    setEmotions(prev => {
      const newEmotions = {};
      Object.keys(prev).forEach(key => {
        newEmotions[key] = { ...prev[key], checked: key === emotion };
      });
      return newEmotions;
    });
    setSelectedPrimaryEmotion(emotion);
    setShowModal(true);
  };

  const handleSecondaryEmotionChange = emotion => {
    setSecondaryEmotions(prev => {
      const newSecondaryEmotions = {};
      Object.keys(prev).forEach(key => {
        newSecondaryEmotions[key] = { ...prev[key], checked: key === emotion };
      });
      return newSecondaryEmotions;
    });
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedEmotions = Object.entries(emotions)
      .filter(([_, emotion]) => emotion.checked)
      .map(([name]) => ({
        id: null,
        id_institution: null,
        created_at: new Date().toISOString(),
        user_id: null,
        main_emotion: name,
        details,
        second_emotion: Object.entries(secondaryEmotions).find(([_, emotion]) => emotion.checked)?.[0] || null
      }));

    if (selectedEmotions.length > 0) {
      try {
        const response = await postEmotion(selectedEmotions);
        if (response.error) throw response.error;
        setEmotions(prev => Object.fromEntries(Object.entries(prev).map(([k, v]) => [k, { ...v, checked: false }])));
        setDetails("");
        setSecondaryEmotions(prev => Object.fromEntries(Object.entries(prev).map(([k, v]) => [k, { ...v, checked: false }])));
      } catch (error) {
        console.error('Error inserting emotions:', error);
      }
    }
  };

  const SecondaryEmotionsModal = () => {
    if (!showModal || !selectedPrimaryEmotion) return null;

    const options = secondaryEmotionsMap[selectedPrimaryEmotion];

    return (
      <div className="modal-overlay" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div className="modal-content" style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '500px',
          width: '90%'
        }}>
          <h3>¿Cuál se acerca más a lo que sientes?</h3>
          {options.map(option => (
            <label key={option} className="emotion-label">
              <input
                type="checkbox"
                checked={secondaryEmotions[option].checked}
                onChange={() => handleSecondaryEmotionChange(option)}
              />
              <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>
                {option === 'alegre' && '😊'}
                {option === 'interesado' && '🤔'}
                {option === 'orgulloso' && '😌'}
                {option === 'aceptado' && '🤗'}
                {option === 'optimista' && '😃'}
                {option === 'melancolico' && '😔'}
                {option === 'desanimado' && '😞'}
                {option === 'solitario' && '😪'}
                {option === 'desesperanzado' && '😩'}
                {option === 'nostalgico' && '🥺'}
                {option === 'frustrado' && '😤'}
                {option === 'irritado' && '😠'}
                {option === 'indignado' && '😡'}
                {option === 'resentido' && '😣'}
                {option === 'furioso' && '🤬'}
                {option === 'ansioso' && '😰'}
                {option === 'inseguro' && '😟'}
                {option === 'preocupado' && '😧'}
                {option === 'nervioso' && '😥'}
                {option === 'aterrado' && '😱'}
                {option === 'repugnado' && '🤢'}
                {option === 'asqueado' && '🤮'}
                {option === 'despreciado' && '😖'}
                {option === 'horrorizado' && '😫'}
                {option === 'ofendido' && '😒'}
                {option === 'asombrado' && '😲'}
                {option === 'impactado' && '😮'}
                {option === 'maravillado' && '🤩'}
                {option === 'confundido' && '😕'}
                {option === 'desconcertado' && '😵'}
              </span>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
          <button onClick={() => setShowModal(false)} style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#5E1151',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Cerrar</button>
        </div>
      </div>
    );
  };

  const emotionLabels = {
    happiness: <><span style={{ fontSize: '1.5rem', marginRight: '8px' }}>😊</span><span style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: 'bold' }}>Felicidad</span></>,
    sadness: <><span style={{ fontSize: '1.5rem', marginRight: '8px' }}>😢</span><span style={{ color: '#4169E1', fontSize: '1.2rem', fontWeight: 'bold' }}>Tristeza</span></>,
    anger: <><span style={{ fontSize: '1.5rem', marginRight: '8px' }}>😠</span><span style={{ color: '#FF4500', fontSize: '1.2rem', fontWeight: 'bold' }}>Ira</span></>,
    fear: <><span style={{ fontSize: '1.5rem', marginRight: '8px' }}>😨</span><span style={{ color: '#800080', fontSize: '1.2rem', fontWeight: 'bold' }}>Miedo</span></>,
    disgust: <><span style={{ fontSize: '1.5rem', marginRight: '8px' }}>🤢</span><span style={{ color: '#32CD32', fontSize: '1.2rem', fontWeight: 'bold' }}>Asco</span></>,
    surprise: <><span style={{ fontSize: '1.5rem', marginRight: '8px' }}>😲</span><span style={{ color: '#FF69B4', fontSize: '1.2rem', fontWeight: 'bold' }}>Sorpresa</span></>
  };

  const secondaryEmotionsMap = {
    happiness: ['alegre', 'interesado', 'orgulloso', 'aceptado', 'optimista'],
    sadness: ['melancolico', 'desanimado', 'solitario', 'desesperanzado', 'nostalgico'],
    anger: ['frustrado', 'irritado', 'indignado', 'resentido', 'furioso'],
    fear: ['ansioso', 'inseguro', 'preocupado', 'nervioso', 'aterrado'],
    disgust: ['repugnado', 'asqueado', 'despreciado', 'horrorizado', 'ofendido'],
    surprise: ['asombrado', 'impactado', 'maravillado', 'confundido', 'desconcertado']
  };

  return (
    <form onSubmit={handleSubmit} className="emotion-form">
      <h2 style={{ color: '#5E1151' }}>Mis Emociones</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div className="emotions-container">
          {Object.entries(emotions).map(([emotion]) => (
            <label key={emotion} className="emotion-label">
              <input
                type="checkbox"
                checked={emotions[emotion].checked}
                onChange={() => handleEmotionChange(emotion)}
              />
              {emotionLabels[emotion]}
            </label>
          ))}
        </div>

        <div className="emotion-chart" style={{ width: '300px', height: '300px', marginTop: '20px' }}>
          <h3>Distribución de Emociones</h3>
          <Doughnut 
            data={emotionStats} 
            options={{ 
              plugins: { 
                legend: { position: 'bottom' }
              },
              circumference: 180,
              rotation: -90,
            }} 
          />
        </div>

        <div className="details-container" style={{ width: '100%', marginTop: '90px' }}>


          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label className="details-label" style={{ color: '#5F3E99', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' }}>
              Quieres comentarnos el porque?:
            </label>            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="details-input"
              style={{ 
                border: `2px solid #5F3E99`,
                width: '15rem',
                height: '7rem'
              }}
            />

          </div>
        </div>
      </div>

      <SecondaryEmotionsModal />
      <button type="submit" className="submit-button">Guardar emociones</button>
    </form>
  );
};

export default FormEmotion;