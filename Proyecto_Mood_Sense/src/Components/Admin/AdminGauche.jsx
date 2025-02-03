import React from "react";

const GaugeChart = () => {
  const percentage = 50; // Cambia este valor para ajustar el porcentaje

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* SVG para el gráfico semicircular */}
        <svg
          className="rotate-180"
          width="150"
          height="75"
          viewBox="0 0 150 75"
        >
          {/* Fondo */}
          <path
            d="M 10 75 A 65 65 0 1 1 140 75"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="20"
          />
          {/* Valor */}
          <path
            d="M 10 75 A 65 65 0 1 1 140 75"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="20"
            strokeDasharray={`${(percentage / 100) * 204}, 204`}
            strokeLinecap="round"
          />
        </svg>
        {/* Texto central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-2xl font-bold text-purple-600">{percentage}%</p>
          <p className="text-sm text-gray-500">ESTADOS DE ANIMOS</p>
        </div>
      </div>
      {/* Botón de detalles */}
      <button className="mt-4 px-4 py-2 text-purple-600 border border-gray-300 rounded-lg hover:bg-gray-100">
        See Details
      </button>
    </div>
  );
};

export default GaugeChart;
