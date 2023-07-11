import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// funcion que se ejecuta al recibir una solicitud
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // verifica si el metodo de la solicitud es post
  if (req.method === "POST") {
    try {
      // agarra los datos enviados en el cuerpo de la solicitud
      const { nombre, negocio, servicio, email } = req.body;

      // configuración del metodo transport de nodemail con nuestros datos
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "bubuemailsender@gmail.com",
          pass: "ljplocahymdqvjvw",
        },
      });

      // configuracion del mail para enviar
      const mailOptions = {
        from: "bubuemailsender@gmail.com",
        to: "info@bubu.solutions",
        subject: "Nuevo mensaje desde la página",
        //plantilla para email automatico
        text: `${nombre} del negocio ${negocio} necesita ayuda con ${servicio}.\nSu email es ${email}`,
      };

      // envia el mail
      await transporter.sendMail(mailOptions);

      // esto nos avisa q el mail se mando bien
      res.status(200).json({ message: "Formulario enviado correctamente" });
    } catch (error) {
      // en caso de error, muestra un mensaje de error y envia una respuesta con estado 500
      console.error("Error al enviar el formulario:", error);
      res.status(500).json({ message: "Error al enviar el formulario" });
    }
  } else {
    // si el metodo de la solicitud no es POST, envia una respuesta con estado 405 indicando que el metodo no esta permitido
    res.status(405).json({ message: "Método no permitido" });
  }
};

export default handler;
