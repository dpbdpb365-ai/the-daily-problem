import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Recibimos el correo que mandó el usuario desde la página web
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Se requiere un correo' }, { status: 400 });
    }

    // 2. Nos conectamos a Loops usando tu llave secreta
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      // Le mandamos el correo a la base de datos de Loops
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message || 'Error en Loops' }, { status: response.status });
    }

    // 3. Le avisamos a la página web que todo salió bien
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}