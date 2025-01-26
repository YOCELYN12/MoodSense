

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

 export async function postDatosMetadata(data) {
    try {
  
      const response = await fetch("http://localhost:3000/datosmeta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar los datos meta: ${response.statusText}`);
      }
  
    } catch (error) {
      console.error("Error al enviar el usuario al backend:", error);
      return null;
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
<<<<<<< HEAD

  export async function getUser() {
    try {
        const response = await fetch("http://localhost:3000/institution");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error al obtener la institution:", error);
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
  
      return await response.json();
  
    } catch (error) {
<<<<<<< HEAD
      console.error("Error al enviar la emoción al backend:", error);
      return null;
    }
  }
=======
      console.error("Error al enviar el usuario al backend:", error);
      return null;
    }
  }
  

>>>>>>> 71e4d8d58abfd01e70288ae89f4cbdac52aba966
=======
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
  
>>>>>>> 3d83d539d8273f9954c4fff293e2103e3fee4f0a
