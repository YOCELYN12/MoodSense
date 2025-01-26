import "../GroupsReport/GroupsReport.css"

import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';
import { getInstitution, getEmotions } from '../service/service';
import emailjs from 'emailjs-com';
import { jsPDF } from 'jspdf';

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
      
      if (puntaje < 20) {
        enviarAlertaEmail(institution, puntaje);
      }
      
      return { ...institution, puntaje };
    });
  };

  const enviarAlertaEmail = (institution, puntaje) => {
    const emailParams = {
      institution_name: institution.institution_name,
      puntaje,
      to_email: 'destinatario@example.com' // Reemplaza con el correo electrónico del destinatario
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_USER_ID')
      .then(() => {
        console.log('Alerta enviada con éxito.');
      })
      .catch((error) => {
        console.error('Error al enviar la alerta:', error);
      });
  };

  const generarPDF = (institution, puntaje) => {
    const doc = new jsPDF();

    // Título
    doc.setFontSize(32);
    doc.setTextColor(0, 128, 0);
    doc.text('Estado Emocional', doc.internal.pageSize.width / 2, 20, { align: 'center' });

    // Detalles de la institución y el puntaje
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text(`Institución: ${institution.institution_name}`, 20, 40);
    doc.text(`Puntaje: ${puntaje}`, 20, 60);

    // Guardar el PDF
    doc.save('Alerta_Emocional.pdf');
  };

  const data = calcularPuntajeTotal(institutions, emotions);

  return (
    <div>
      <h1 id="pageTitle">Estado Emocional por Instituciones</h1>
      <div id="mainContainerGroup">
        {data.map(institution => (
          <div key={institution.id}>
            <h3 id="GroupH3">{institution.institution_name}</h3>
            <GaugeChart
              id={`odometro-${institution.id}`}
              nrOfLevels={20}
              colors={['#5F3E99', '#AE9EE4']}
              percent={institution.puntaje / 100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionsDashboard;
