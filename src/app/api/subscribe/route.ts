import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Se requiere un correo' }, { status: 400 });
    }

    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || '';
      
      // Detectamos si el error de Loops es porque ya está registrado en tu lista
      if (errorMessage.toLowerCase().includes('already on your list')) {
        return NextResponse.json({ alreadyExists: true }, { status: 400 });
      }

      return NextResponse.json({ error: errorMessage || 'Error en Loops' }, { status: response.status });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}