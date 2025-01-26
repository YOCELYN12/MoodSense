import { useState } from 'react';
import { postEmotion } from '../service/service';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Calendario from '../calendario/calendario';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMOTION_COLORS = {
  happiness: '#FFD700', sadness: '#4169E1', anger: '#FF4500',
  fear: '#800080', disgust: '#32CD32', surprise: '#FF69B4'
};

const EMOTION_LABELS = {
  happiness: { emoji: '😊 ', text: 'Felicidad', color: '#FFD700' },
  sadness: { emoji: '😢 ', text: 'Tristeza', color: '#4169E1' },
  anger: { emoji: '😠 ', text: 'Ira', color: '#FF4500' },
  fear: { emoji: '😨 ', text: 'Miedo', color: '#800080' },
  disgust: { emoji: '🤢 ', text: 'Asco', color: '#32CD32' },
  surprise: { emoji: '😲 ', text: 'Sorpresa', color: '#FF69B4' }
};

const SECONDARY_EMOTIONS_MAP = {
  happiness: ['alegre', 'interesado', 'orgulloso', 'aceptado', 'optimista'],
  sadness: ['melancolico', 'desanimado', 'solitario', 'desesperanzado', 'nostalgico'],
  anger: ['frustrado', 'irritado', 'indignado', 'resentido', 'furioso'],
  fear: ['ansioso', 'inseguro', 'preocupado', 'nervioso', 'aterrado'],
  disgust: ['repugnado', 'asqueado', 'despreciado', 'horrorizado', 'ofendido'],
  surprise: ['asombrado', 'impactado', 'maravillado', 'confundido', 'desconcertado']
};

const EMOJI_MAP = {
  alegre: '😊 ', interesado: '🤔 ', orgulloso: '😌 ', aceptado: '🤗 ', optimista: '😃 ',
  melancolico: '😔 ', desanimado: '😞 ', solitario: '😪 ', desesperanzado: '😩 ', nostalgico: '🥺 ',
  frustrado: '😤 ', irritado: '😠 ', indignado: '😡 ', resentido: '😣 ', furioso: '🤬 ',
  ansioso: '😰 ', inseguro: '😟 ', preocupado: '😧 ', nervioso: '😥 ', aterrado: '😱 ',
  repugnado: '🤢 ', asqueado: '🤮 ', despreciado: '😖 ', horrorizado: '😫 ', ofendido: '😒 ',
  asombrado: '😲 ', impactado: '😮 ', maravillado: '🤩 ', confundido: '😕 ', desconcertado: '😵 '
};

const FormEmotion = () => {
  const [emotions, setEmotions] = useState(
    Object.keys(EMOTION_LABELS).reduce((acc, key) => ({
      ...acc,
      [key]: { checked: false, value: key === 'happiness' ? 10 : key === 'surprise' ? 0 : -8 }
    }), {})
  );
  const [details, setDetails] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPrimaryEmotion, setSelectedPrimaryEmotion] = useState(null);
  const [secondaryEmotions, setSecondaryEmotions] = useState(
    Object.values(SECONDARY_EMOTIONS_MAP).flat().reduce((acc, emotion) => ({
      ...acc,
      [emotion]: { checked: false, value: 5 }
    }), {})
  );

  const emotionStats = {
    labels: Object.values(EMOTION_LABELS).map(label => label.text),
    datasets: [{
      data: [10, 8, 6, 7, 5, 0],
      backgroundColor: Object.values(EMOTION_COLORS),
    }]
  };

  const handleEmotionChange = emotion => {
    setEmotions(prev => Object.fromEntries(
      Object.entries(prev).map(([key, value]) => [key, { ...value, checked: key === emotion }])
    ));
    setSelectedPrimaryEmotion(emotion);
    setShowModal(true);
  };

  const handleSecondaryEmotionChange = emotion => {
    setSecondaryEmotions(prev => Object.fromEntries(
      Object.entries(prev).map(([key, value]) => [key, { ...value, checked: key === emotion }])
    ));
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedEmotion = Object.entries(emotions).find(([_, emotion]) => emotion.checked);
    if (selectedEmotion) {
      try {
        const selectedSecondary = Object.entries(secondaryEmotions).find(([_, emotion]) => emotion.checked)?.[0];
        const emotionData = {
          id: null,
          id_institution: null,
          created_at: new Date().toISOString(),
          user_id: null,
          main_emotion: selectedEmotion[0],
          details,
          second_emotion: selectedSecondary || null
        };
        await postEmotion([emotionData]);
        resetForm();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const resetForm = () => {
    setEmotions(prev => Object.fromEntries(
      Object.entries(prev).map(([k, v]) => [k, { ...v, checked: false }])
    ));
    setDetails("");
    setSecondaryEmotions(prev => Object.fromEntries(
      Object.entries(prev).map(([k, v]) => [k, { ...v, checked: false }])
    ));
  };

  const modalStyles = {
    overlay: {
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
    },
    content: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '500px',
      width: '90%'
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', maxWidth: '1200px', width: '100%', padding: '20px' }}>
        <form onSubmit={handleSubmit} className="emotion-form">
          <h2 style={{ color: '#5E1151', textAlign: 'center' }}>Mis Emociones</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="emotions-container" style={{ backgroundColor: '#F0EDFA', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              {Object.entries(emotions).map(([emotion]) => (
                <label key={emotion} className="emotion-label" style={{ 
                  display: 'inline-block',
                  margin: '8px',
                  padding: '10px 15px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <input
                    type="checkbox"
                    checked={emotions[emotion].checked}
                    onChange={() => handleEmotionChange(emotion)}
                  />
                  <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>
                    {EMOTION_LABELS[emotion].emoji}
                  </span>
                  <span style={{ color: EMOTION_LABELS[emotion].color, fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {EMOTION_LABELS[emotion].text}
                  </span>
                </label>
              ))}
            </div>

            <div className="emotion-chart" style={{ width: '300px', height: '300px', marginTop: '20px' }}>
              <h3 style={{ textAlign: 'center' }}>Distribución de Emociones</h3>
              <Doughnut data={emotionStats} options={{ plugins: { legend: { position: 'bottom' } }, circumference: 180, rotation: -90 }} style={{ width: '250px', height: '250px' }} />
            </div>
            <div className="details-container" style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                <label className="details-label" style={{ color: '#000000', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' }}>
                  Quieres comentarnos el porque?(o si prefieres escribe que no te sientes comodo escribiendolo):
                </label>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="details-input"
                  style={{ border: '2px solid #5F3E99', width: '15rem', height: '5rem', borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
          {showModal && selectedPrimaryEmotion && (
            <div style={modalStyles.overlay}>
              <div style={modalStyles.content}>
                <h3 style={{ textAlign: 'center' }}>¿Cuál se acerca más a lo que sientes?</h3>
                <div style={{ backgroundColor: '#F0EDFA', padding: '15px', borderRadius: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                  {SECONDARY_EMOTIONS_MAP[selectedPrimaryEmotion].map(option => (
                    <label key={option} className="emotion-label" style={{
                      backgroundColor: 'white',
                      padding: '8px 15px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <input
                        type="checkbox"
                        checked={secondaryEmotions[option].checked}
                        onChange={() => handleSecondaryEmotionChange(option)}
                      />
                      <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>{EMOJI_MAP[option]}</span>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  ))}
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#5E1151',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'block',
                    margin: '20px auto 0'
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
          <button type="submit" className="submit-button" style={{ display: 'block', margin: '20px auto 0' }}>Guardar emociones</button>
        </form>
        <div style={{ marginTop: '180px' }}>
          <Calendario />
        </div>
      </div>
    </div>
  );
};

export default FormEmotion;