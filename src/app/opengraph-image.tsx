import { ImageResponse } from 'next/og';

// Configuración de la imagen para redes sociales (1200x630 es el estándar)
export const runtime = 'edge';
export const alt = 'The Daily Problem';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A', // Tu fondo oscuro
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        {/* Etiqueta superior */}
        <div style={{ color: '#FDE047', fontSize: 32, fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
          Reto del Día
        </div>

        {/* Título gigante del problema */}
        <div style={{ color: 'white', fontSize: 80, fontWeight: '900', textAlign: 'center', lineHeight: 1.1, marginBottom: 40 }}>
          El Dilema del Prisionero
        </div>

        {/* Subtítulo o pregunta corta (opcional, para tu idea B) */}
        <div style={{ color: '#A1A1AA', fontSize: 40, textAlign: 'center' }}>
          ¿Cooperar o traicionar? La decisión es tuya.
        </div>

        {/* Tu marca en la parte inferior */}
        <div style={{ position: 'absolute', bottom: 50, color: '#FDE047', fontSize: 28, fontWeight: 'bold' }}>
          the daily problem
        </div>
      </div>
    ),
    { ...size }
  );
}