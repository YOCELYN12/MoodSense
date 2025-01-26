import React from "react";

const Admin = () => {
  return (
    <div>
      <div>
        <button>Graficas emociones</button>
        <button>Emociones por grupo</button>
        <button>Emociones por estudiante</button>
        <button>Profile</button>
        <button>Settings</button>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="buscar nombre" />
        <div>Wendy</div>
        <button>Cerrar Sesión</button>
      </div>
      <div>
        <input type="date" name="" id="" placeholder="Filtrar por fecha" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 min-h-screen">
      {/* Card: Enojo */}
      <div className="relative bg-purple-50 border-2 border-purple-400 rounded-2xl p-4 flex flex-col items-center">
        <div className="absolute top-2 right-2 text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-md">
          16% <span className="text-orange-500">↗</span>
        </div>
        <div className="text-purple-600 text-lg font-medium mb-2">Enojo</div>
        <div className="text-4xl font-bold text-gray-800">12</div>
      </div>

      {/* Card: Alegre */}
      <div className="relative bg-purple-50 rounded-2xl p-4 flex flex-col items-center">
        <div className="absolute top-2 right-2 text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-md">
          16% <span className="text-orange-500">↘</span>
        </div>
        <div className="text-purple-600 text-lg font-medium mb-2">Alegre</div>
        <div className="text-4xl font-bold text-gray-800">20</div>
      </div>

      {/* Card: Miedo */}
      <div className="relative bg-purple-50 rounded-2xl p-4 flex flex-col items-center">
        <div className="absolute top-2 right-2 text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-md">
          16% <span className="text-orange-500">↘</span>
        </div>
        <div className="text-purple-600 text-lg font-medium mb-2">Miedo</div>
        <div className="text-4xl font-bold text-gray-800">2</div>
      </div>

      {/* Card: Triste */}
      <div className="relative bg-purple-50 rounded-2xl p-4 flex flex-col items-center">
        <div className="absolute top-2 right-2 text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-md">
          16% <span className="text-orange-500">↗</span>
        </div>
        <div className="text-purple-600 text-lg font-medium mb-2">Triste</div>
        <div className="text-4xl font-bold text-gray-800">4</div>
      </div>
    </div>
    </div>
  );
};

export default Admin;
