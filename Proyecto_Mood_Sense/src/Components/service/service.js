



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

  