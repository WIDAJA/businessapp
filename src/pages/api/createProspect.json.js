import { db, Prospect } from "astro:db";

export const POST = async ({ request }) => {

  try {

    if (request.headers.get("Content-Type") === "application/json") {

      const { email } = await request.json();

      const date = new Date(new Date().toUTCString());

      await db.insert(Prospect).values({ email, date });

      return new Response(JSON.stringify({
        success: true,
        message: '¡Correo electrónico registrado exitosamente!'
      }), { status: 200 });
    }

    return new Response(JSON.stringify({
      success: false,
      message: "El correo ingresado es inválido"
    }), { status: 400 });

  } catch (error) {

    let message = "En este momento el servicio no se encuentra activo. Por favor intenta de nuevo mas tarde."

    if (error?.code === "SQLITE_CONSTRAINT_UNIQUE") {
      message = "El correo ingresado ya se encuentra registrado"
    }

    return new Response(JSON.stringify({ message }), { status: 500 });
  }
}