export async function getDatosMeta() {
    try {
      const response = await fetch("http://localhost:3000/datosmeta");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      return [];
    }
  }
    
    export async function getInstitution() {
      try {
        const response = await fetch("http://localhost:3000/institution");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error al obtener la institution:", error);
        return [];
      }
    }
    
    export async function postInstitution(institution) {
      try {
        const response = await fetch("http://localhost:3000/institution", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(institution),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar el usuario: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error al enviar el usuario al backend:", error);
      return null;
    }
  }
  
  export async function postUser(user) {
    
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(
        new Error(`Error al registrar los dat: ${response.statusText}`));
      }
  
        if (data) {
          console.log("Se registraron correctamente sus datos.");
          return data;
          
        }
      } catch (error) {
          console.error("Error al enviar el usuario al backend:", error);
          return null;
        }
      
}

export async function getEmotions() {
  try {
    const response = await fetch("http://localhost:3000/emotions");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las emociones:", error);
    return [];
  }
}

export async function postEmotion(emotion) {
  try {
    const response = await fetch("http://localhost:3000/emotions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emotion),
    });

    if (!response.ok) {
        throw new Error(`Error al registrar la emoción: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error al enviar la emoción al backend:", error);
      return null;
    }
  }


  // Función para hacer la solicitud PUT
async function actualizarDatos(email) {
  try {
    const response = await fetch(email, {
      method: 'PUT', // Método PUT
      headers: {
        'Content-Type': 'application/json', // Indica que los datos están en formato JSON
      },
      body: JSON.stringify(data), // Convierte el objeto en una cadena JSON
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const resultado = await response.json();
    console.log('Datos actualizados exitosamente:', resultado);
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
  }
}

// Llamar a la función
actualizarDatos();