import React, { useEffect, useState } from "react";
import "./StudentFormcc.css";
import { actualizarDatos, PostStudent } from "../service/service";
import { Context } from "../../context/Context";

const StudentFormC = () => {

  const { getUserInfo, updateUser } = Context();
  const [userActiveData, setUserActiveData] = useState("");
  const [intLastName, setLastName] = useState("");
  const [intName, setName] = useState("");
  const [intAge, setAge] = useState("");
  const [intNationality, setNationality] = useState("");
  const [intPersonalContact, setPersonalContact] = useState("");
  const [intFamilyContact, setFamilyContact] = useState("");
  const [intResidence, setResidence] = useState("");
  const [intDiseases, setDiseases] = useState("");
  const [intProvince, setProvince] = useState("");
  const [intDistrict, setDistrict] = useState("");
  const [intCanton, setCanton] = useState("");
  const [intMedications, setMedications] = useState("");


  const getData = async () => {
    try {
      const data = await getUserInfo();
      setUserActiveData(data);
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  //Trae los datos del usuario logeado:
  useEffect(() => {
    getData();
  }, []);

  // Función para manejar el envío del formulario (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      name: intName,
      last_name: intLastName,
      age: intAge,
      nationality: intNationality,
      personal_contact: intPersonalContact,
      family_contact: intFamilyContact,
      residence: intResidence,
      diseases: intDiseases,
      province: intProvince,
      district: intDistrict,
      canton: intCanton,
      medications: intMedications,
      student_state: true,
      // psychological_diagnosis: intPsychologicalDiagnosis,
      // email: intEmail,
    };

    try {
      await updateUser(userActiveData.email, newStudent);
      console.log("Se edito correcto desde el front");
    } catch (error) {
      console.error(error);
    }
  };

  // const { UpdateTableUsers, user } = UserAuth();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   last_name: "",
  //   age: "",
  //   student_id: "",
  //   nationality: "",
  //   id_number: "",
  //   personal_contact: "",
  //   family_contact: "",
  //   province: "",
  //   canton: "",
  //   student_state: "",
  //   medications: "",
  //   district: "",
  //   studies: "",
  //   diseases: "",
  //   residence: "",
  //   psychological_diagnosis: "",
  //   institution_id: "",
  //   rol: "",
  //   province: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  return (
    <div>

      <div className="student-form-container">
        <h2 className="LetrasPerfil">Formulario del Perfil</h2>
        <br />
        <br />
        <h2 className="lineaHr">Datos personales</h2>
        <form className="student-form" onSubmit={handleSubmit}>


          <div className="form-nombre">
            <label>Nombre:</label>
            <input
              type="text"
              value={intName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-apellido">
            <label>Apellido:</label>
            <input
              type="text"
              value={intLastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-edad">
            <label>Edad:</label>
            <input
              type="number"
              value={intAge || ""}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>

          <div className="form-nacionalidad">
            <label>Nacionalidad:</label>
            <input
              type="text"
              value={intNationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>

          <div className="form-contacto">
            <label>Contacto Personal:</label>
            <input
              type="text"
              value={intPersonalContact}
              onChange={(e) => setPersonalContact(e.target.value)}
            />
          </div>

          <div className="form-familiar">
            <label>Contacto Familiar:</label>
            <input
              type="text"
              value={intFamilyContact}
              onChange={(e) => setFamilyContact(e.target.value)}
            />
          </div>

          <div className="form-residencia">
            <label>Residencia:</label>
            <input
              type="text"
              value={intResidence}
              onChange={(e) => setResidence(e.target.value)}
            />
          </div>

          <div className="form-enfermedades">
            <label>Enfermedades:</label>
            <input
              type="text"
              value={intDiseases}
              onChange={(e) => setDiseases(e.target.value)}
            />
          </div>

          <div className="form-provincia">
            <label>Provincia:</label>
            <input
              type="text"
              value={intProvince}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>

          <div className="form-canton">
            <label>Cantón:</label>
            <input
              type="text"
              value={intCanton}
              onChange={(e) => setCanton(e.target.value)}
            />
          </div>

          <div className="form-distrito">
            <label>Distrito:</label>
            <input
              type="text"
              value={intDistrict}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>

          <div className="form-medicamentos">
            <label>Medicamentos:</label>
            <input
              type="text"
              value={intMedications}
              onChange={(e) => setMedications(e.target.value)}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default StudentFormC;
