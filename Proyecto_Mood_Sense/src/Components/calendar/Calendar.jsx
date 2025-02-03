import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar_Component = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [emotions, setEmotions] = useState({});

  useEffect(() => {
    // Aquí deberías cargar las emociones guardadas
    // Ejemplo de estructura:
    const mockEmotions = {
      [new Date().toISOString().split('T')[0]]: 'happy',
      // Las emociones se cargarán dinámicamente usando created_at
    };
    setEmotions(mockEmotions);
     // Aplicar estilo al calendar
     document.querySelector('.react-calendar').style.backgroundColor = '#F0EDFA';
  }, []);

  const getEmotionEmoji = (emotion) => {
    const emojiMap = {  
      'happy': '😊',
      'sad': '😢',
      'angry': '😠',
      'fear': '😨',
      'surprised': '😮',
      'disgust': '🤢'
    };
    return emojiMap[emotion] || '';
  };

  const tileContent = ({ date }) => {
    const dateStr = date.toISOString().split('T')[0];
    const emotion = emotions[dateStr];

    if (emotion) {
      return (
        <div className="emotion-indicator" style={{ 
          fontSize: '1.2em',
          textAlign: 'center',
          padding: '2px'
        }}>
          {getEmotionEmoji(emotion)}
        </div>
      );
    }
    return null;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
};

export default Calendar_Component;