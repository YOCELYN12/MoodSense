import React from "react";

const alerts = [
  {
    id: 1,
    title: "Alegría",
    percentage: "16%",
    image: "https://via.placeholder.com/50", // Reemplázalo con tu URL de imagen
  },
  {
    id: 2,
    title: "Enojo",
    percentage: "16%",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    title: "Tristeza",
    percentage: "16%",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    title: "Ansiedad",
    percentage: "16%",
    image: "https://via.placeholder.com/50",
  },
];

const AlertCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#E9D5FF", // Color de fondo lavanda claro
        borderRadius: "16px", // Bordes redondeados
        padding: "16px", // Espaciado interno
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra
        width: "320px", // Ancho fijo
      }}
    >
      {/* Encabezado */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Alertas</h2>
        <button
          style={{
            backgroundColor: "#FFFFFF",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#6B7280",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Weekly
        </button>
      </div>

      {/* Lista de alertas */}
      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
        {alerts.map((alert) => (
          <li
            key={alert.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={alert.image}
                alt={alert.title}
                style={{ width: "48px", height: "48px", borderRadius: "8px", objectFit: "cover" }}
              />
              <p style={{ marginLeft: "12px", fontSize: "14px", fontWeight: "500", color: "#4B5563" }}>
                {alert.title}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "14px", fontWeight: "bold", color: "#F59E0B" }}>
                {alert.percentage}
              </span>
              <span style={{ marginLeft: "4px", color: "#F59E0B" }}>🔼</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Botón de "See More" */}
      <button
        style={{
          width: "100%",
          marginTop: "16px",
          padding: "10px 0",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#8B5CF6",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#F3F4F6")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#FFFFFF")}
      >
        See More
      </button>
    </div>
  );
};

export default AlertCard;
