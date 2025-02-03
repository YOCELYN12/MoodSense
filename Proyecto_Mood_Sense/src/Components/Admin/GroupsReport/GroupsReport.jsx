import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';
import { getInstitution, getEmotions } from '../../service/service';
import emailjs from 'emailjs-com';
import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2';
import "./GroupsReport.css";

const EmotionsDashboard = () => {
  const [institutions, setInstitutions] = useState([]);
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const institutionsData = await getInstitution();
      const emotionsData = await getEmotions();
      setInstitutions(institutionsData);
      setEmotions(emotionsData);
    };
    fetchData();
  }, []);

  const calcularPuntajeTotal = (institutions, emotions) => {
    return institutions.map(institution => {
      const puntaje = emotions
        .filter(emotion => emotion.id_institution === parseInt(institution.id))
        .reduce((total, emotion) => total + (parseFloat(emotion.main_emotion) || 0), 0);

      if (puntaje < 10) {
        mostrarAlertaYEnviarCorreo(institution, puntaje);
      }

      return { ...institution, puntaje };
    });
  };

  //Alerta molesta---
  const mostrarAlertaYEnviarCorreo = (institution, puntaje) => {
    Swal.fire({
      title: '¡Atención!',
      text: `La institución ${institution.institution_name} tiene un puntaje de moral muy bajo.`,
      icon: 'warning',
      confirmButtonText: 'Entendido',
      background: '#ffffff'
    }).then(() => {
      verificarEnvioCorreo(institution, puntaje);
    });
  };

  const verificarEnvioCorreo = (institution, puntaje) => {
    const ultimoEnvio = localStorage.getItem('ultimoEnvioCorreo');
    const ahora = new Date();

    if (!ultimoEnvio || (ahora - new Date(ultimoEnvio)) > 12 * 60 * 60 * 1000) {
      enviarAlertaEmail(institution, puntaje);
      localStorage.setItem('ultimoEnvioCorreo', ahora);
    }
  };

  const enviarAlertaEmail = (institution, puntaje) => {
    const emailParams = {
      institution_name: institution.institution_name,
      puntaje,
      to_email: 'destinatario@example.com' // Reemplaza con el correo electrónico del destinatario
    };

    emailjs.send('service_56xi5wh', 'template_m4z0zce', emailParams, 'rV7wVdf0tWzRA66hT')
      .then(() => {
        console.log('Alerta enviada con éxito.');
      })
      .catch((error) => {
        console.error('Error al enviar la alerta:', error);
      });
  };

  const data = calcularPuntajeTotal(institutions, emotions);

  return (
    <div className="emotions-dashboard">
      <h1 id="pageTitle">Estado Emocional por Instituciones</h1>
      <div id="mainContainerGroup">
        {data.map(institution => (
          <div key={institution.id}>
            <h3 id="GroupH3">{institution.institution_name}</h3>
            <GaugeChart
              id={`odometro-${institution.id}`}
              nrOfLevels={20}
              colors={['red', '#5F3E99']}
              percent={institution.puntaje / 100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionsDashboard;


