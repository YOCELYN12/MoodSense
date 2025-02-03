import React, { useState, useEffect } from 'react';
import './loading.css'; // Importa el archivo CSS

const LoadingFace = () => {
  const [expression, setExpression] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpression((prev) => (prev + 1) % 4);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const expressions = [
    { face: '(◠ᴗ◠)', message: 'Cargando', color: '#60A5FA' },
    { face: '(◕ᴥ◕)', message: 'Cargando.', color: '#3B82F6' },
    { face: '(◑ω◑)', message: 'Cargando..', color: '#2563EB' },
    { face: '(◔◡◔)', message: 'Cargando...', color: '#1D4ED8' },
  ];

  return (
    <div className="container">
      <div className="face-container">
        <div className="halo" />
        <div className="face" style={{ color: expressions[expression].color }}>
          {expressions[expression].face}
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" />
        </div>
        <div className="shine" />
      </div>

      <p className="message" style={{ color: expressions[expression].color }}>
        {expressions[expression].message}
      </p>
      <p className="subtext">Por favor, espere un momento</p>
    </div>
  );
};

export default LoadingFace;
