import React, { useState } from 'react';

export default function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('/api/enviar-formulario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formulario)
      });

      const data = await respuesta.json();
      alert(data.mensaje || 'Formulario enviado con éxito');
    } catch (error) {
      alert('Hubo un error al enviar el formulario');
    }
  };

  return (
    <form onSubmit={manejarEnvio} style={{ padding: '2rem' }}>
      <h2>Solicita tu Descuento del 20%</h2>
      <input type="text" name="nombre" placeholder="Nombre completo" onChange={manejarCambio} required />
      <input type="email" name="correo" placeholder="Correo electrónico" onChange={manejarCambio} required />
      <input type="tel" name="telefono" placeholder="Teléfono" onChange={manejarCambio} required />
      <textarea name="mensaje" placeholder="¿Qué tipo de limpieza necesitas?" onChange={manejarCambio}></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
    }
