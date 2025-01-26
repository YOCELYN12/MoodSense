

async function getAudio() {
    try {
      const response = await fetch("http://localhost:3000/datosmeta");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      return [];
    }
  }

  async function postCard(user) {
    try {
  
      const response = await fetch("http://localhost:3000/datosmeta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar el usuario: ${response.statusText}`);
      }
  
    } catch (error) {
      console.error("Error al enviar el usuario al backend:", error);
      return null;
    }
  }



  async function postUser(user) {
    try {
  
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar el usuario: ${response.statusText}`);
      }
  
    } catch (error) {
      console.error("Error al enviar el usuario al backend:", error);
      return null;
    }
  }

