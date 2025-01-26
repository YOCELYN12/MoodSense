import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#6B46C1", // Fondo morado
        padding: "16px 24px",
      }}
    >
      {/* Barra de búsqueda */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF", // Fondo blanco
          padding: "8px 16px",
          borderRadius: "24px", // Bordes redondeados
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Sombra ligera
          width: "300px", // Ancho fijo
        }}
      >
        <span
          style={{
            fontSize: "16px",
            color: "#A0AEC0", // Color gris claro
            marginRight: "8px",
          }}
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Search name"
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "14px",
            color: "#4A5568", // Gris oscuro
          }}
        />
      </div>

      {/* Perfil de usuario */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#1A202C", // Fondo negro
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFD700", // Emoji dorado
            fontSize: "18px",
          }}
        >
          🐝
        </div>
        <span style={{ fontSize: "16px", color: "#FFFFFF" }}>Wendy</span>
        <span style={{ fontSize: "16px", color: "#FFFFFF" }}>⬇️</span>
      </div>
    </div>
  );
};

export default Header;
