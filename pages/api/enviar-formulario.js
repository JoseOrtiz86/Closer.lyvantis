export default function handler(req, res) {
  if (req.method === 'POST') {
    const datos = req.body;
    console.log('📝 Nuevo formulario recibido:', datos);

    // Aquí puedes agregar lógica para guardar en base de datos, enviar por correo, WhatsApp, etc.
    res.status(200).json({ mensaje: '¡Formulario recibido con éxito!' });
  } else {
    res.status(405).json({ mensaje: 'Método no permitido' });
  }
}
