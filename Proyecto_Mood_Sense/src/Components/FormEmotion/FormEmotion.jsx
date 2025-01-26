import React, { useState } from 'react';
import supabase from '../../supabase/Supabase';

const FormEmotion = () => {
  const [emotions, setEmotions] = useState({
    happiness: { checked: false, value: 10 },
    sadness: { checked: false, value: -8 },
    anger: { checked: false, value: -6 },
    fear: { checked: false, value: -7 },
    disgust: { checked: false, value: -5 },
    surprise: { checked: false, value: 0 }
  });

  const handleEmotionChange = (emotion) => {
    setEmotions(prevEmotions => ({
      ...prevEmotions,
      [emotion]: {
        ...prevEmotions[emotion],
        checked: !prevEmotions[emotion].checked
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const selectedEmotions = Object.entries(emotions)
      .filter(([_, emotion]) => emotion.checked)
      .map(([name, emotion]) => ({
        emotion_name: name,
        emotion_value: emotion.value,
        emotion_score: emotion.value,
        created_at: new Date().toISOString()
      }));

    if (selectedEmotions.length > 0) {
      try {
        const { data, error } = await supabase
          .from('emotional_reports')
          .insert(selectedEmotions);

        if (error) throw error;
        
        setEmotions(prevEmotions => {
          const resetEmotions = {};
          Object.keys(prevEmotions).forEach(key => {
            resetEmotions[key] = { ...prevEmotions[key], checked: false };
          });
          return resetEmotions;
        });

      } catch (error) {
        console.error('Error inserting emotions:', error);
      }
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <h2>¿Qué emociones estás sintiendo?</h2>

      <div>
        <label>
          <input
            type="checkbox"
            checked={emotions.happiness.checked}
            onChange={() => handleEmotionChange('happiness')}
          />
          Felicidad (+10)
        </label>
        <label>
          <input
            type="checkbox"
            checked={emotions.sadness.checked}
            onChange={() => handleEmotionChange('sadness')}
          />
          Tristeza (-8)
        </label>
        <label>
          <input
            type="checkbox"
            checked={emotions.anger.checked}
            onChange={() => handleEmotionChange('anger')}
          />
          Ira (-6)
        </label>
        <label>
          <input
            type="checkbox"
            checked={emotions.fear.checked}
            onChange={() => handleEmotionChange('fear')}
          />
          Miedo (-7)
        </label>
        <label>
          <input
            type="checkbox"
            checked={emotions.disgust.checked}
            onChange={() => handleEmotionChange('disgust')}
          />
          Asco (-5)
        </label>
        <label>
          <input
            type="checkbox"
            checked={emotions.surprise.checked}
            onChange={() => handleEmotionChange('surprise')}
          />
          Sorpresa (0)
        </label>
      </div>
      <button type="submit">Guardar emociones</button>
    </form>
  );
};

export default FormEmotion;