export async function getDatosMeta() {
  try {
    const response = await fetch('http://localhost:3000/datosmeta');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    return [];
  }
}


export async function getUser() {
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    return [];
  }
}



export async function getInstitution() {
  try {
    const response = await fetch('http://localhost:3000/institution');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener la institución:', error);
    return [];
  }
}

export async function postInstitution(institution) {
  try {
    const response = await fetch('http://localhost:3000/institution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(institution),
    });

    if (!response.ok) {
      throw new Error(`Error al registrar la institución: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error al enviar la institución al backend:", error);
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
    const response = await fetch('http://localhost:3000/emotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
