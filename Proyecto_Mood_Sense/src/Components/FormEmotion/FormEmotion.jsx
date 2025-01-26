import React, { useState } from 'react';
import { postEmotion } from '../service/service';


const FormEmotion = () => {
  const [emotions, setEmotions] = useState({
    happiness: { checked: false, value: 10 },
    sadness: { checked: false, value: -8 },
    anger: { checked: false, value: -6 },
    fear: { checked: false, value: -7 },
    disgust: { checked: false, value: -5 },
    surprise: { checked: false, value: 0 },
  });

  const handleEmotionChange = (emotion) => {
    setEmotions((prevEmotions) => ({
      ...prevEmotions,
      [emotion]: {
        ...prevEmotions[emotion],
        checked: !prevEmotions[emotion].checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedEmotions = Object.entries(emotions)
      .filter(([_, emotion]) => emotion.checked)
      .map(([name, emotion]) => ({
        id: null,
        id_institution: null,
        created_at: new Date().toISOString(),
        user_id: null,
        main_emotion: name,
        details: "",
        second_emotion: null
      }));

    if (selectedEmotions.length > 0) {
      try {
        const response = await xpostEmotion(selectedEmotions);
        if (response.error) throw response.error;

        setEmotions((prevEmotions) => {
          const resetEmotions = {};
          Object.keys(prevEmotions).forEach((key) => {
            resetEmotions[key] = { ...prevEmotions[key], checked: false };
          });
          return resetEmotions;
        });
      } catch (error) {
        console.error("Error inserting emotions:", error);
      }
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
