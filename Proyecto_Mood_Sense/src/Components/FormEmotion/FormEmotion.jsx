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

  const SecondaryEmotionsModal = () => {
    if (!showModal || !selectedPrimaryEmotion) return null;

    const options = secondaryEmotionsMap[selectedPrimaryEmotion];

    return (
      <div
        className="modal-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          className="modal-content"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            width: "90%",
          }}
        >
          <h3>¿Cuál se acerca más a lo que sientes?</h3>
          {options.map((option) => (
            <label key={option} className="emotion-label">
              <input
                type="checkbox"
                checked={secondaryEmotions[option].checked}
                onChange={() => handleSecondaryEmotionChange(option)}
              />
              <span style={{ fontSize: "1.2rem", marginRight: "8px" }}>
                {option === "alegre" && "😊"}
                {option === "interesado" && "🤔"}
                {option === "orgulloso" && "😌"}
                {option === "aceptado" && "🤗"}
                {option === "optimista" && "😃"}
                {option === "melancolico" && "😔"}
                {option === "desanimado" && "😞"}
                {option === "solitario" && "😪"}
                {option === "desesperanzado" && "😩"}
                {option === "nostalgico" && "🥺"}
                {option === "frustrado" && "😤"}
                {option === "irritado" && "😠"}
                {option === "indignado" && "😡"}
                {option === "resentido" && "😣"}
                {option === "furioso" && "🤬"}
                {option === "ansioso" && "😰"}
                {option === "inseguro" && "😟"}
                {option === "preocupado" && "😧"}
                {option === "nervioso" && "😥"}
                {option === "aterrado" && "😱"}
                {option === "repugnado" && "🤢"}
                {option === "asqueado" && "🤮"}
                {option === "despreciado" && "😖"}
                {option === "horrorizado" && "😫"}
                {option === "ofendido" && "😒"}
                {option === "asombrado" && "😲"}
                {option === "impactado" && "😮"}
                {option === "maravillado" && "🤩"}
                {option === "confundido" && "😕"}
                {option === "desconcertado" && "😵"}
              </span>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
          <button
            onClick={() => setShowModal(false)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#5E1151",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };

  const emotionLabels = {
    happiness: (
      <>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>😊</span>
        <span
          style={{ color: "#FFD700", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Felicidad
        </span>
      </>
    ),
    sadness: (
      <>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>😢</span>
        <span
          style={{ color: "#4169E1", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Tristeza
        </span>
      </>
    ),
    anger: (
      <>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>😠</span>
        <span
          style={{ color: "#FF4500", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Ira
        </span>
      </>
    ),
    fear: (
      <>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>😨</span>
        <span
          style={{ color: "#800080", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Miedo
        </span>
      </>
    ),
    disgust: (
      <>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>🤢</span>
        <span
          style={{ color: "#32CD32", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Asco
        </span>
      </>
    ),
    surprise: (
      <>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>😲</span>
        <span
          style={{ color: "#FF69B4", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Sorpresa
        </span>
      </>
    ),
  };

  const secondaryEmotionsMap = {
    happiness: ["alegre", "interesado", "orgulloso", "aceptado", "optimista"],
    sadness: [
      "melancolico",
      "desanimado",
      "solitario",
      "desesperanzado",
      "nostalgico",
    ],
    anger: ["frustrado", "irritado", "indignado", "resentido", "furioso"],
    fear: ["ansioso", "inseguro", "preocupado", "nervioso", "aterrado"],
    disgust: [
      "repugnado",
      "asqueado",
      "despreciado",
      "horrorizado",
      "ofendido",
    ],
    surprise: [
      "asombrado",
      "impactado",
      "maravillado",
      "confundido",
      "desconcertado",
    ],
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