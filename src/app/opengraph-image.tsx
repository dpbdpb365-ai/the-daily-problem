import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'The Daily Problem — No formulas. Just pure logic.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F172A', // Slate 900 (combina con tu sitio)
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
        <div
          style={{
            color: '#60A5FA', // Blue 400
            fontSize: 28,
            fontWeight: 'bold',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Daily Logic Puzzle
        </div>

        {/* Título principal */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 84,
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 28,
          }}
        >
          The Daily Problem
        </div>

        {/* Subtítulo */}
        <div
          style={{
            color: '#94A3B8', // Slate 400
            fontSize: 40,
            textAlign: 'center',
          }}
        >
          No formulas. Just pure logic.
        </div>

        {/* Dominio abajo */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            color: '#64748B',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          thedailyproblem.com
        </div>
      </div>
    ),
    { ...size }
  );
}