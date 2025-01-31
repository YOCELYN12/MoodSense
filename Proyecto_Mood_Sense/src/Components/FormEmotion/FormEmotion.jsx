import React, { useState } from 'react';
import { postEmotion } from '../service/service';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMOTION_COLORS = {
  happiness: '#FFD700', sadness: '#4169E1', anger: '#FF4500',
  fear: '#800080', disgust: '#32CD32', surprise: '#FF69B4'
};

const EMOTION_LABELS = {
  happiness: { emoji: '😊', text: 'Felicidad', color: '#FFD700' },
  sadness: { emoji: '😢', text: 'Tristeza', color: '#4169E1' },
  anger: { emoji: '😠', text: 'Ira', color: '#FF4500' },
  fear: { emoji: '😨', text: 'Miedo', color: '#800080' },
  disgust: { emoji: '🤢', text: 'Asco', color: '#32CD32' },
  surprise: { emoji: '😲', text: 'Sorpresa', color: '#FF69B4' }
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
  alegre: '😊', interesado: '🤔', orgulloso: '😌', aceptado: '🤗', optimista: '😃',
  melancolico: '😔', desanimado: '😞', solitario: '😪', desesperanzado: '😩', nostalgico: '🥺',
  frustrado: '😤', irritado: '😠', indignado: '😡', resentido: '😣', furioso: '🤬',
  ansioso: '😰', inseguro: '😟', preocupado: '😧', nervioso: '😥', aterrado: '😱',
  repugnado: '🤢', asqueado: '🤮', despreciado: '😖', horrorizado: '😫', ofendido: '😒',
  asombrado: '😲', impactado: '😮', maravillado: '🤩', confundido: '😕', desconcertado: '😵'
};

const FormEmotion = () => {
  const [emotions, setEmotions] = useState({
    happiness: { checked: false, value: 10 },
    sadness: { checked: false, value: -8 },
    anger: { checked: false, value: -6 },
    fear: { checked: false, value: -7 },
    disgust: { checked: false, value: -5 },
    surprise: { checked: false, value: 0 },
  });

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
    <form onSubmit={handleSubmit} className="emotion-form">
      <h2>¿Qué emociones estás sintiendo?</h2>
      <div className="emotions-container">
        <label className="emotion-label">
          <input
            type="checkbox"
            checked={emotions.happiness.checked}
            onChange={() => handleEmotionChange("happiness")}
          />
          Felicidad (+10)
        </label>
        <label className="emotion-label">
          <input
            type="checkbox"
            checked={emotions.sadness.checked}
            onChange={() => handleEmotionChange("sadness")}
          />
          Tristeza (-8)
        </label>
        <label className="emotion-label">
          <input
            type="checkbox"
            checked={emotions.anger.checked}
            onChange={() => handleEmotionChange("anger")}
          />
          Ira (-6)
        </label>
        <label className="emotion-label">
          <input
            type="checkbox"
            checked={emotions.fear.checked}
            onChange={() => handleEmotionChange("fear")}
          />
          Miedo (-7)
        </label>
        <label className="emotion-label">
          <input
            type="checkbox"
            checked={emotions.disgust.checked}
            onChange={() => handleEmotionChange("disgust")}
          />
          Asco (-5)
        </label>
        <label className="emotion-label">
          <input
            type="checkbox"
            checked={emotions.surprise.checked}
            onChange={() => handleEmotionChange("surprise")}
          />
          Sorpresa (0)
        </label>
      </div>
      <button type="submit" className="submit-button">
        Guardar emociones
      </button>
    </form>
  );
};

export default FormEmotion;