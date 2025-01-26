

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
 
  
async function postEmotion(emotionData) {
    try {
      const response = await fetch("http://localhost:3000/emotions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          created_at: emotionData.created_at,
          user_id: emotionData.user_id,
          institution_id: emotionData.institution_id,
          main_emotion: emotionData.main_emotion,
          details: emotionData.details,
          second_emotion: emotionData.second_emotion
        }),
      });

      if (!response.ok) {
        throw new Error(`Error al registrar la emoción: ${response.statusText}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Error al enviar la emoción al backend:", error);
      return null;
    }
  }
