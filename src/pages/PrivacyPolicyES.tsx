import { HYMNES_APP_ICON_SRC } from "@/constants/hymnes-brand";
import PageHeader from "@/components/site/PageHeader";
import { navigateTo } from "@/lib/navigate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Languages, Mail, MapPin } from "lucide-react";
import React from "react";

const PrivacyPolicyES: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <PageHeader
        image="/hymnes-images/en/03.png"
        icon={HYMNES_APP_ICON_SRC}
        title="Política de Privacidad"
        subtitle="Hymnes et Louanges Adventiste · Actualizada el 4 de agosto de 2026"
        backHref="/hymnes-app"
        backLabel="Volver a la app"
      >
        <a
          href="/hymnes-app/privacy-policy"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          English
        </a>
        <a
          href="/hymnes-app/privacy-policy-fr"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Français
        </a>
        <a
          href="/hymnes-app/privacy-policy-pt"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Português
        </a>
        <a
          href="/hymnes-app/terms-of-service"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Términos
        </a>
      </PageHeader>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Aviso de Privacidad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
            <p>
              Este Aviso de Privacidad de <strong>JOEMDJOSSOU</strong> ("nosotros", "nos" o "nuestro") describe cómo y por qué podemos acceder, recopilar, almacenar, utilizar y/o compartir ("tratar") su información personal cuando utiliza nuestros servicios ("Servicios"), incluido cuando usted:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Descarga y utiliza nuestra aplicación móvil (Hymnes et Louanges Adventiste), o cualquier otra aplicación nuestra que enlace a este Aviso de Privacidad
              </li>
              <li>
                Interactúa con nosotros de otras formas relacionadas, incluidas ventas, marketing o eventos
              </li>
            </ul>
            <p>
              <strong>¿Preguntas o inquietudes?</strong> La lectura de este Aviso de Privacidad le ayudará a comprender sus derechos y opciones en materia de privacidad. Somos responsables de tomar decisiones sobre cómo se trata su información personal. Si no está de acuerdo con nuestras políticas y prácticas, no utilice nuestros Servicios. Si aún tiene preguntas o inquietudes, contáctenos en{" "}
              <a
                href="mailto:joemdjossou@outlook.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                joemdjossou@outlook.com
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Summary of Key Points */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Resumen de Puntos Clés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Este resumen presenta los puntos clave de nuestro Aviso de Privacidad; puede encontrar más detalles sobre cualquiera de estos temas siguiendo el enlace tras cada punto o utilizando la tabla de contenidos siguiente para localizar la sección que busca.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Qué información personal tratamos?
                </h4>
                <p>
                  Recopilamos los tipos de datos indicados en nuestro <strong>Resumen de Seguridad de Datos de Google Play</strong> a continuación, incluidos correo electrónico, nombre, identificadores de usuario, interacciones en la aplicación, comentarios, registros de fallos, diagnósticos e identificadores del dispositivo. Algunos datos se recopilan incluso si no crea una cuenta.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Tratamos información personal sensible?
                </h4>
                <p>
                  Parte de la información puede considerarse "especial" o "sensible" en determinadas jurisdicciones, por ejemplo sus orígenes raciales o étnicos, orientación sexual y creencias religiosas. 
                  <strong>
                    No tratamos información personal sensible.
                  </strong>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Recopilamos información de terceros?
                </h4>
                <p>
                  <strong>
                    No vendemos ni compartimos su información personal con terceros.
                  </strong>{" "}
                  Los datos recopilados se utilizan únicamente para los fines descritos en este aviso (gestión de cuenta, análisis, funcionalidad de la aplicación e informes de fallos).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Cómo tratamos su información?
                </h4>
                <p>
                  Tratamos su información para prestar, mejorar y administrar nuestros Servicios, comunicarnos con usted, garantizar la seguridad y prevenir el fraude, y cumplir la ley. También podemos tratar su información para otros fines con su consentimiento. Solo tratamos su información cuando disponemos de un motivo legal válido para ello.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿En qué situaciones y con qué partes compartimos información personal?
                </h4>
                <p>
                  <strong>
                    No vendemos ni compartimos su información personal con terceros.
                  </strong>{" "}
                  Los datos son recopilados y tratados por nosotros para operar la aplicación, ejecutar análisis, enviar notificaciones push e informar fallos.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Cómo protegemos su información?
                </h4>
                <p>
                  Hemos implementado procesos y procedimientos organizativos y técnicos adecuados para proteger su información personal. 
                  <strong>
                    Todos los datos transmitidos fuera de su dispositivo se cifran en tránsito mediante HTTPS/TLS.
                  </strong>{" "}
                  No obstante, ninguna transmisión electrónica por Internet ni tecnología de almacenamiento puede garantizarse al 100 % segura; por ello no podemos prometer ni garantizar que hackers, ciberdelincuentes u otros terceros no autorizados no puedan vulnerar nuestra seguridad y recopilar, acceder, robar o modificar indebidamente su información.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Cuáles son sus derechos?
                </h4>
                <p>
                  Según su ubicación geográfica, la legislación aplicable en materia de privacidad puede conferirle determinados derechos sobre su información personal.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  ¿Cómo ejerce sus derechos?
                </h4>
                <p>
                  La forma más sencilla de ejercer sus derechos es eliminar su cuenta en la aplicación (véase la Sección 13) o contactarnos. 
                  <strong>
                    La eliminación de cuenta y datos está disponible.
                  </strong>{" "}
                  Examinaremos y atenderemos cualquier solicitud conforme a las leyes aplicables de protección de datos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google Play Data Safety Summary */}
        <Card className="mb-8" id="data-safety-summary">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Resumen de Seguridad de Datos de Google Play
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Este resumen coincide con nuestra declaración de seguridad de datos de Google Play para <strong>Hymnes et Louanges Adventiste</strong>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                      Tipo de datos
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Recopilado
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Compartido
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                      Finalidad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Correo electrónico
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Gestión de cuenta, Análisis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Nombre
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Gestión de cuenta, Análisis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Identificadores de usuario
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Gestión de cuenta, Análisis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Interacciones en la aplicación
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Análisis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Otro contenido generado por el usuario (texto de comentarios)
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Funcionalidad de la aplicación
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Registros de fallos
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Informes de fallos / Diagnósticos
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Diagnósticos
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Análisis, Informes de fallos
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Identificadores del dispositivo u otros
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sí
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      No
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Análisis, Funcionalidad (notificaciones push)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Cifrado en tránsito:</strong> Sí: todos los datos enviados fuera del dispositivo utilizan HTTPS/TLS.
              </li>
              <li>
                <strong>Eliminación de datos disponible:</strong> Sí: puede eliminar su cuenta en la aplicación (véase la Sección 13).
              </li>
              <li>
                <strong>Datos vendidos:</strong> No: no vendemos su información personal.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Purchases, Tips and Donations */}
        <Card className="mb-8" id="purchases-and-donations">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Compras, Propinas y Donaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              <strong>En resumen:</strong> La aplicación es gratuita. Si decide dejar una propina voluntaria, el pago lo procesa Apple o Google: nunca recibimos los datos de su tarjeta.
            </p>
            <p>Hymnes et Louanges Adventiste incluye un « bote de propinas » opcional que le permite apoyar el desarrollo. La propina es totalmente voluntaria y no desbloquea ninguna función. Todos los cargos los realiza el App Store (Apple) o Google Play (Google) en su cuenta de la tienda, conforme a sus propios términos y políticas de privacidad.</p>
            <p>Utilizamos RevenueCat, Inc. como proveedor de servicios para gestionar y validar las compras dentro de la aplicación. Para ello se procesa la siguiente información relacionada con la compra:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Un identificador de usuario seudónimo de la aplicación (y, si ha iniciado sesión, el identificador de su cuenta) para asociar una compra con su instalación</li>
              <li>Identificadores de transacción de la tienda, identificador del producto y marcas de tiempo de compra, renovación o reembolso</li>
              <li>Importe de la compra, moneda y país de la tienda</li>
              <li>Plataforma del dispositivo, versión de la aplicación y país/región inferidos de la tienda</li>
            </ul>
            <p>No recibimos ni almacenamos el número de su tarjeta de crédito o débito, datos bancarios, CVV ni dirección de facturación. Apple o Google los gestionan exclusivamente.</p>
            <p>Utilizamos esta información únicamente para validar y registrar las contribuciones, ofrecer atención al cliente, prevenir el fraude y el abuso, y cumplir nuestras obligaciones contables y fiscales. Cuando se aplica el RGPD, nuestras bases legales son la ejecución de un contrato y el cumplimiento de una obligación legal. Los registros de compra no se utilizan con fines publicitarios ni se venden.</p>
            <p>Los registros de transacciones se conservan durante el tiempo exigido por la legislación contable y fiscal aplicable, que puede superar los plazos descritos en otras secciones de este aviso y persistir tras la eliminación de su cuenta. Consulte las políticas de privacidad de Apple, Google y RevenueCat sobre su tratamiento de los datos de pago como responsables independientes.</p>
            <p>
              Para conocer las condiciones aplicables a propinas y donaciones, incluidos los reembolsos, consulte nuestros{" "}
              <a
                href="/hymnes-app/terms-of-service"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Términos de Servicio
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Tabla de Contenidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>¿Qué información recopilamos?</li>
              <li>¿Cómo tratamos su información?</li>
              <li>
                ¿En qué bases legales nos apoyamos para tratar su información personal?
              </li>
              <li>
                ¿Cuándo y con quién compartimos su información personal?
              </li>
              <li>¿Cuánto tiempo conservamos su información?</li>
              <li>¿Cómo protegemos su información?</li>
              <li>¿Cuáles son sus derechos de privacidad?</li>
              <li>Controles de las funciones Do Not Track</li>
              <li>
                ¿Los residentes de Estados Unidos tienen derechos de privacidad específicos?
              </li>
              <li>
                ¿Otras regiones tienen derechos de privacidad específicos?
              </li>
              <li>¿Actualizamos este aviso?</li>
              <li>¿Cómo puede contactarnos sobre este aviso?</li>
              <li>Eliminar su cuenta</li>
              <li>
                ¿Cómo puede consultar, actualizar o eliminar los datos que recopilamos sobre usted?
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                1. ¿Qué información recopilamos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Información personal que usted nos proporciona
                </h4>
                <p className="mb-2">
                  <strong>En resumen:</strong> Recopilamos los tipos de datos
                  indicados en nuestro Resumen de Seguridad de Datos de Google Play. No
                  vendemos ni compartimos su información personal con
                  terceros.
                </p>
                <p>
                  Recopilamos información personal cuando crea una cuenta (correo electrónico y contraseña), inicia sesión con Google o Apple, actualiza su perfil, envía comentarios o utiliza la aplicación.
                </p>
                <p className="mt-2">
                  <strong>Información personal (correo electrónico, nombre, identificadores de usuario):</strong> recopilados para la gestión de cuenta y análisis cuando tiene una cuenta o utiliza el inicio de sesión.
                </p>
                <p className="mt-2">
                  <strong>Interacciones en la aplicación:</strong> himnos consultados, audio reproducido, favoritos, navegación y eventos de uso relacionados, para análisis, incluso antes de iniciar sesión.
                </p>
                <p className="mt-2">
                  <strong>Otro contenido generado por el usuario :</strong>{" "}
                  texto de comentarios enviado en Configuración, para la funcionalidad de la aplicación y asistencia.
                </p>
                <p className="mt-2">
                  <strong>Registros de fallos y diagnósticos :</strong>{" "}
                  informes de error, versión del dispositivo/sistema/aplicación y datos de estabilidad, para informes de fallos y análisis.
                </p>
                <p className="mt-2">
                  <strong>Identificadores del dispositivo u otros:</strong>{" "}
                  identificadores de análisis y notificaciones push, para análisis y funcionalidad (push).
                </p>
                <p className="mt-2">
                  <strong>Ubicación opcional (solo en el dispositivo):</strong>{" "}
                  si activa los recordatorios del atardecer del sábado, la aplicación puede usar el GPS para calcular las horas locales de puesta de sol. Estas coordenadas se almacenan solo en su dispositivo y no se transmiten a nuestros servidores.
                </p>
                <p className="mt-2">
                  <strong>Información sensible.</strong> No tratamos información sensible.
                </p>
                <p className="mt-2">
                  Toda la información personal que nos proporcione debe ser veraz, completa y exacta, y debe notificarnos cualquier cambio en dicha información.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                2. ¿Cómo tratamos su información?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Tratamos su información para prestar, mejorar y administrar nuestros Servicios, comunicarnos con usted, garantizar la seguridad y prevenir el fraude, y cumplir la ley. También podemos tratar su información para otros fines con su consentimiento.
              </p>
              <p>
                Tratamos su información personal por diversos motivos, según cómo interactúe con nuestros Servicios, entre ellos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gestión de cuenta</strong>: crear y gestionar su cuenta, sincronizar favoritos y enviar notificaciones push.
                </li>
                <li>
                  <strong>Análisis</strong>: comprender el uso de la aplicación y mejorar funciones (correo electrónico, nombre, identificadores de usuario, interacciones, diagnósticos, identificadores del dispositivo).
                </li>
                <li>
                  <strong>Funcionalidad de la aplicación</strong>: procesar los comentarios que envía y operar las funciones principales (incluido push mediante identificadores del dispositivo).
                </li>
                <li>
                  <strong>Informes de fallos / diagnósticos</strong>: detectar, diagnosticar y corregir fallos y problemas de estabilidad.
                </li>
                <li>
                  <strong>Para la seguridad, prevención del fraude y cumplimiento</strong> de las leyes aplicables.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                3. ¿En qué bases legales nos apoyamos para tratar su información?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Solo tratamos su información personal cuando consideramos que es necesario y disponemos de un motivo legal válido (es decir, una base legal) para hacerlo conforme a la ley aplicable, como con su consentimiento, para cumplir las leyes, prestarle servicios o cumplir nuestras obligaciones contractuales, proteger sus derechos o satisfacer nuestros intereses comerciales legítimos.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Si se encuentra en la UE o el Reino Unido, esta sección le aplica.
                </h4>
                <p>
                  El Reglamento General de Protección de Datos (RGPD) y el RGPD del Reino Unido nos exigen explicar las bases legales válidas en las que nos apoyamos para tratar su información personal. Por ello, podemos apoyarnos en las siguientes bases legales:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Consentimiento.</strong> Podemos tratar su información si nos ha dado permiso (es decir, consentimiento) para utilizar su información personal con fines específicos. Puede retirar su consentimiento en cualquier momento.
                  </li>
                  <li>
                    <strong>Obligaciones legales.</strong> Podemos tratar su información cuando consideremos necesario cumplir nuestras obligaciones legales, como cooperar con organismos de aplicación de la ley o agencias reguladoras, ejercer o defender nuestros derechos legales, o divulgar su información como prueba en un litigio en el que estemos involucrados.
                  </li>
                  <li>
                    <strong>Intereses vitales.</strong> Podemos tratar su información cuando consideremos necesario proteger sus intereses vitales o los de un tercero, como en situaciones que impliquen amenazas potenciales a la seguridad de cualquier persona.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Si se encuentra en Canadá, esta sección le aplica.
                </h4>
                <p>
                  Podemos tratar su información si nos ha dado permiso específico (consentimiento expreso) para utilizar su información personal con fines específicos, o en situaciones en las que su permiso puede inferirse (consentimiento implícito). Puede retirar su consentimiento en cualquier momento.
                </p>
                <p className="mt-2">
                  En ciertos casos excepcionales, la ley aplicable puede permitirnos tratar su información sin su consentimiento, por ejemplo:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li>
                    Si la recopilación es claramente en interés de un individuo y el consentimiento no puede obtenerse a tiempo
                  </li>
                  <li>
                    Para investigaciones y detección y prevención de fraude
                  </li>
                  <li>
                    Para transacciones comerciales siempre que se cumplan ciertas condiciones
                  </li>
                  <li>
                    Si está contenida en una declaración de testigo y la recopilación es necesaria para evaluar, procesar o resolver un reclamo de seguro
                  </li>
                  <li>
                    Para identificar personas heridas, enfermas o fallecidas y comunicarse con familiares
                  </li>
                  <li>
                    Si tenemos motivos razonables para creer que una persona ha sido, es o puede ser víctima de abuso financiero
                  </li>
                  <li>
                    Si es razonable esperar que la recopilación y el uso con consentimiento comprometerían la disponibilidad o exactitud de la información y la recopilación es razonable para investigar una violación de acuerdo o contravención de las leyes de Canadá o una provincia
                  </li>
                  <li>
                    Si la divulgación es necesaria para cumplir una citación, orden judicial o reglas del tribunal relativas a la producción de registros
                  </li>
                  <li>
                    Si fue producida por un individuo en el curso de su empleo, negocio o profesión y la recopilación es coherente con los fines para los que se produjo la información
                  </li>
                  <li>
                    Si la recopilación es únicamente con fines periodísticos, artísticos o literarios
                  </li>
                  <li>
                    Si la información es de acceso público y está especificada por la normativa
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                4. ¿Cuándo y con quién compartimos su información personal?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> No vendemos ni compartimos su información personal con terceros.
              </p>
              <p>
                Los tipos de datos de nuestro Resumen de Seguridad de Datos de Google Play son recopilados por nosotros y utilizados únicamente para los fines descritos en este aviso. No vendemos su información personal ni la compartimos con terceros para sus propios fines.
              </p>
              <p>
                Podemos transferir información únicamente en el marco de una transacción comercial (fusión o adquisición), cuando la ley lo exija o con su consentimiento.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                5. ¿Cuánto tiempo conservamos su información?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Conservamos su información el tiempo necesario para cumplir los fines descritos en este Aviso de Privacidad, salvo que la ley exija lo contrario.
              </p>
              <p>
                Solo conservaremos su información personal el tiempo necesario para los fines descritos en este Aviso de Privacidad, salvo que la ley exija o permita un periodo de retención más largo (como requisitos fiscales, contables u otros legales).
              </p>
              <p>
                Cuando ya no tengamos una necesidad comercial legítima para tratar su información personal, la eliminaremos o anonimizaremos; si no es posible (por ejemplo, porque se almacenó en copias de seguridad), la almacenaremos de forma segura y aislada de cualquier tratamiento posterior hasta que pueda eliminarse.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Datos de cuenta y perfil:</strong> eliminados cuando elimina su cuenta mediante el flujo integrado descrito a continuación.
                </li>
                <li>
                  <strong>Favoritos en la nube e historial de himnos:</strong>{" "}
                  eliminados al eliminar la cuenta; las copias residuales en copias de seguridad pueden persistir durante un periodo limitado.
                </li>
                <li>
                  <strong>Análisis e informes de fallos:</strong> pueden conservarse según nuestras políticas de retención, generalmente hasta 90 días.
                </li>
                <li>
                  <strong>Comentarios ya enviados:</strong> pueden conservarse con fines de asistencia y calidad.
                </li>
                <li>
                  <strong>Caché local e historial de búsqueda en el dispositivo:</strong> pueden borrarse en Configuración → Almacenamiento sin eliminar su cuenta.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                6. ¿Cómo protegemos su información?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Procuramos proteger su información personal mediante un sistema de medidas de seguridad organizativas y técnicas.
              </p>
              <p>
                Hemos implementado medidas de seguridad técnicas y organizativas apropiadas y razonables diseñadas para proteger la seguridad de cualquier información personal que tratamos.                 Los datos en tránsito se cifran mediante HTTPS/TLS.
                No obstante, a pesar de nuestras garantías y esfuerzos por proteger su información, ninguna transmisión electrónica por Internet ni tecnología de almacenamiento puede garantizarse al 100 % segura; por ello no podemos prometer ni garantizar que hackers, ciberdelincuentes u otros terceros no autorizados no puedan vulnerar nuestra seguridad y recopilar, acceder, robar o modificar indebidamente su información. Aunque hacemos todo lo posible por proteger su información personal, la transmisión de información personal hacia y desde nuestros Servicios es bajo su propio riesgo. Solo debe acceder a los Servicios en un entorno seguro.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                7. ¿Cuáles son sus derechos de privacidad?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Según su estado o región de residencia en EE. UU. o en determinadas regiones, como el Espacio Económico Europeo (EEE), el Reino Unido, Suiza y Canadá, usted tiene derechos que le permiten un mayor acceso y control sobre su información personal. Puede consultar, modificar o cancelar su cuenta en cualquier momento, según su país, provincia o estado de residencia.
              </p>
              <p>
                En determinadas regiones (como el EEE, el Reino Unido, Suiza y Canadá), usted tiene ciertos derechos conforme a las leyes aplicables de protección de datos. Estos pueden incluir el derecho (i) a solicitar acceso y obtener una copia de su información personal, (ii) a solicitar rectificación o supresión; (iii) a restringir el tratamiento de su información personal; (iv) cuando corresponda, a la portabilidad de datos; y (v) a no ser objeto de decisiones automatizadas. En ciertas circunstancias, también puede tener derecho a oponerse al tratamiento de su información personal. Puede hacer dicha solicitud contactándonos mediante los datos de contacto de la sección "¿CÓMO PUEDE CONTACTARNOS SOBRE ESTE AVISO?" a continuación.
              </p>
              <p>
                Examinaremos y atenderemos cualquier solicitud conforme a las leyes aplicables de protección de datos.
              </p>
              <p>
                Si se encuentra en el EEE o el Reino Unido y cree que tratamos ilegalmente su información personal, también tiene derecho a presentar una reclamación ante la autoridad de protección de datos de su Estado miembro o la autoridad del Reino Unido.
              </p>
              <p>
                Si se encuentra en Suiza, puede contactar al Comisionado Federal de Protección de Datos e Información.
              </p>
              <p>
                <strong>Retirar su consentimiento:</strong> Si nos basamos en su consentimiento para tratar su información personal, que puede ser expreso y/o implícito según la ley aplicable, tiene derecho a retirar su consentimiento en cualquier momento. Puede retirarlo contactándonos mediante los datos de la sección "¿CÓMO PUEDE CONTACTARNOS SOBRE ESTE AVISO?" a continuación.
              </p>
              <p>
                No obstante, tenga en cuenta que esto no afectará la licitud del tratamiento anterior a su retirada ni, cuando la ley lo permita, el tratamiento de su información personal basado en motivos legales distintos del consentimiento.
              </p>
              <p>
                Si tiene preguntas o comentarios sobre sus derechos de privacidad, puede enviarnos un correo electrónico a{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                8. Controles de las funciones Do Not Track
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                La mayoría de los navegadores web y algunos sistemas operativos móviles y aplicaciones incluyen una función o configuración Do Not Track ("DNT") que puede activar para indicar su preferencia de privacidad de no tener datos sobre sus actividades de navegación en línea monitorizadas y recopiladas. En este momento, no se ha finalizado un estándar tecnológico uniforme para reconocer e implementar señales DNT. Por ello, actualmente no respondemos a señales DNT del navegador ni a ningún otro mecanismo que comunique automáticamente su elección de no ser rastreado en línea. Si se adopta un estándar de seguimiento en línea que debamos seguir en el futuro, le informaremos en una versión revisada de este Aviso de Privacidad.
              </p>
              <p>
                La ley de California nos exige informarle cómo respondemos a las señales DNT de los navegadores web. Como actualmente no existe un estándar industrial o legal para reconocer u honrar las señales DNT, no respondemos a ellas en este momento.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 - US Residents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                9. ¿Los residentes de Estados Unidos tienen derechos de privacidad específicos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Si es residente de California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah o Virginia, puede tener derecho a solicitar acceso y recibir detalles sobre la información personal que conservamos sobre usted y cómo la hemos tratado, corregir inexactitudes, obtener una copia o eliminar su información personal. También puede tener derecho a retirar su consentimiento a nuestro tratamiento de su información personal. Estos derechos pueden estar limitados en ciertas circunstancias por la ley aplicable.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Categorías de información personal que recopilamos
                </h4>
                <p className="mb-4">
                  Hemos recopilado las siguientes categorías de información personal en los últimos doce (12) meses:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                          Categoría
                        </th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                          Ejemplos
                        </th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                          Recopilado
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          A. Identificadores
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Datos de contacto, como nombre real, alias, dirección postal, número de teléfono o móvil, identificador personal único, identificador en línea, dirección de protocolo de Internet, correo electrónico y nombre de cuenta
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                          SÍ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          B. Información personal según la ley de registros de clientes de California
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Nombre, datos de contacto, educación, empleo, historial laboral e información financiera
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                          SÍ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          C. Características de clasificación protegidas por ley estatal o federal
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Sexo, edad, fecha de nacimiento, raza y etnia, origen nacional, estado civil y otros datos demográficos
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          D. Información comercial
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Información de transacciones, historial de compras, detalles financieros e información de pago
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          E. Información biométrica
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Huellas dactilares y de voz
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          F. Actividad en Internet u otra red similar
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Historial de navegación, historial de búsqueda, comportamiento en línea, datos de intereses e interacciones con nuestros y otros sitios web, aplicaciones, sistemas y anuncios
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                          SÍ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          G. Datos de geolocalización
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Ubicación del dispositivo
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          H. Información de audio, electrónica, sensorial o similar
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Imágenes y audio, grabaciones de video o llamadas creadas en relación con nuestras actividades comerciales
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          I. Información profesional o relacionada con el empleo
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Datos de contacto comercial para prestarle nuestros Servicios a nivel empresarial o cargo, historial laboral y calificaciones profesionales si solicita empleo con nosotros
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          J. Información educativa
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Expedientes estudiantiles e información de directorio
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          K. Inferencias derivadas de la información personal recopilada
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Inferencias derivadas de cualquier información personal recopilada indicada arriba para crear un perfil o resumen sobre, por ejemplo, las preferencias y características de una persona
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          L. Información personal sensible
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          -
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NO
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                También podemos recopilar otra información personal fuera de estas categorías cuando interactúa con nosotros en persona, en línea, por teléfono o correo en el contexto de:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Recibir ayuda a través de nuestros canales de atención al cliente;
                </li>
                <li>Participación en encuestas o concursos para clientes; y</li>
                <li>
                  Facilitar la prestación de nuestros Servicios y responder a sus solicitudes.
                </li>
              </ul>

              <p>
                Utilizaremos y conservaremos la información personal recopilada según sea necesario para prestar los Servicios o para:
              </p>
              <p>
                <strong>
                  Categorías A y B: mientras el usuario tenga una cuenta, o según las políticas de retención de los proveedores de análisis/fallos. Categoría F: según la configuración de retención de PostHog.
                </strong>
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Sus derechos
                </h4>
                <p>
                  Usted tiene derechos conforme a ciertas leyes de protección de datos de los estados de EE. UU. No obstante, estos derechos no son absolutos y, en algunos casos, podemos rechazar su solicitud según lo permita la ley. Estos derechos incluyen:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    Derecho a saber si tratamos o no sus datos personales
                  </li>
                  <li>Derecho de acceso a sus datos personales</li>
                  <li>
                    Derecho a corregir inexactitudes en sus datos personales
                  </li>
                  <li>
                    Derecho a solicitar la eliminación de sus datos personales
                  </li>
                  <li>
                    Derecho a obtener una copia de los datos personales que compartió previamente con nosotros
                  </li>
                  <li>
                    Derecho a no ser discriminado por ejercer sus derechos
                  </li>
                  <li>
                    Derecho a optar por no participar en el tratamiento de sus datos personales si se utilizan para publicidad dirigida (o compartición según la ley de privacidad de California), venta de datos personales o elaboración de perfiles con efectos legales o similares significativos ("perfilado")
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Cómo ejercer sus derechos
                </h4>
                <p>
                  Para ejercer estos derechos, puede contactarnos enviando una solicitud de acceso a datos, escribiéndonos a{" "}
                  <a
                    href="mailto:joemdjossou@outlook.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    joemdjossou@outlook.com
                  </a>
                  , o consultando los datos de contacto al final de este documento.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 10 - Other Regions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                10. ¿Otras regiones tienen derechos de privacidad específicos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Puede tener derechos adicionales según el país en el que resida.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Australia y Nueva Zelanda
                </h4>
                <p>
                  Recopilamos y tratamos su información personal conforme a las obligaciones y condiciones establecidas por la Privacy Act 1988 de Australia y la Privacy Act 2020 de Nueva Zelanda.
                </p>
                <p>
                  Este Aviso de Privacidad cumple los requisitos de notificación definidos en ambas leyes de privacidad, en particular: qué información personal recopilamos de usted, de qué fuentes, con qué fines y otros destinatarios de su información personal.
                </p>
                <p>
                  Si no desea proporcionar la información personal necesaria para cumplir su finalidad aplicable, ello puede afectar nuestra capacidad de prestar nuestros servicios, en particular:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>ofrecerle los productos o servicios que desea</li>
                  <li>responder o ayudarle con sus solicitudes</li>
                </ul>
                <p className="mt-2">
                  En cualquier momento, tiene derecho a solicitar acceso o corrección de su información personal. Puede hacerlo contactándonos mediante los datos de la sección "¿CÓMO PUEDE CONSULTAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS SOBRE USTED?"
                </p>
                <p className="mt-2">
                  Si cree que tratamos ilegalmente su información personal, tiene derecho a presentar una queja por incumplimiento de los Principios de Privacidad australianos ante la Oficina del Comisionado Australiano de Información y por incumplimiento de los Principios de Privacidad de Nueva Zelanda ante la Oficina del Comisionado de Privacidad de Nueva Zelanda.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  República de Sudáfrica
                </h4>
                <p>
                  En cualquier momento, tiene derecho a solicitar acceso o corrección de su información personal. Puede hacerlo contactándonos mediante los datos de la sección "¿CÓMO PUEDE CONSULTAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS SOBRE USTED?"
                </p>
                <p className="mt-2">
                  Si no está satisfecho con la forma en que abordamos cualquier queja sobre nuestro tratamiento de información personal, puede contactar la oficina del regulador, cuyos datos son:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-2">
                  <p className="font-semibold">
                    El Regulador de Información (Sudáfrica)
                  </p>
                  <p>Consultas generales: enquiries@inforegulator.org.za</p>
                  <p>
                    Quejas (formulario POPIA/PAIA 5 completo):
                    PAIAComplaints@inforegulator.org.za &
                    POPIAComplaints@inforegulator.org.za
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                11. ¿Actualizamos este aviso?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Sí, actualizaremos este aviso según sea necesario para mantener el cumplimiento de las leyes pertinentes.
              </p>
              <p>
                Podemos actualizar este Aviso de Privacidad periódicamente. La versión actualizada se indicará con una fecha "Revisada" actualizada en la parte superior de este Aviso. Si realizamos cambios materiales, podemos notificarle mediante un aviso destacado de dichos cambios o enviándole una notificación directa. Le recomendamos revisar este Aviso con frecuencia para estar informado de cómo protegemos su información.
              </p>
            </CardContent>
          </Card>

          {/* Section 12 - Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                12. ¿Cómo puede contactarnos sobre este aviso?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Si tiene preguntas o comentarios sobre este aviso, puede enviarnos un correo electrónico a{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>{" "}
                o contactarnos por correo postal en:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-600 dark:text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">JOEMDJOSSOU</p>
                    <p>Rue41 HDN</p>
                    <p>Lomé, Maritime BP2157</p>
                    <p>Togo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 13 - Delete Account */}
          <Card id="delete-account">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                13. Eliminar su cuenta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En resumen:</strong> Puede eliminar su cuenta directamente en la aplicación. Esta página documenta los pasos exigidos por Google Play y otras tiendas.
              </p>
              <p>
                Para eliminar su cuenta de <strong>Hymnes et Louanges Adventiste</strong> y los datos asociados:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Abra <strong>Hymnes et Louanges Adventiste</strong>
                </li>
                <li>
                  Vaya a <strong>Configuración</strong> (Settings)
                </li>
                <li>
                  Abra la sección <strong>Cuenta</strong>
                </li>
                <li>
                  Pulse <strong>Eliminar cuenta</strong> / <strong>Delete Account</strong>
                </li>
                <li>Confirme en el cuadro de diálogo</li>
              </ol>
              <p>
                <strong>Qué se elimina:</strong> su cuenta de autenticación de Firebase, información de perfil, favoritos sincronizados en la nube e historial de himnos vinculados a su cuenta.
              </p>
              <p>
                <strong>Qué puede conservarse:</strong> eventos de análisis e informes de fallos ya recopilados (generalmente hasta 90 días según las políticas de retención); comentarios enviados previamente; y copias residuales en copias de seguridad durante un periodo limitado. Los datos locales únicamente (himnos en caché, historial de búsqueda en el dispositivo, coordenadas opcionales de recordatorios del sábado) pueden borrarse por separado en <strong>Configuración → Almacenamiento</strong> sin eliminar su cuenta.
              </p>
              <p>
                No existe una opción integrada para eliminar solo análisis o favoritos en la nube sin eliminar toda la cuenta. También puede contactarnos en{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>{" "}
                para obtener asistencia.
              </p>
            </CardContent>
          </Card>

          {/* Section 14 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                14. ¿Cómo puede consultar, actualizar o eliminar los datos que recopilamos sobre usted?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Según las leyes aplicables de su país o estado de residencia en EE. UU., puede tener derecho a solicitar acceso a la información personal que recopilamos, detalles sobre cómo la hemos tratado, corregir inexactitudes o eliminar su información personal. También puede tener derecho a retirar su consentimiento a nuestro tratamiento de su información personal. Estos derechos pueden estar limitados en ciertas circunstancias por la ley aplicable.
              </p>
              <p>
                La forma más sencilla de eliminar su cuenta es seguir los pasos integrados en la <strong>Sección 13 (Eliminar su cuenta)</strong> anterior. Para solicitar consulta, corrección o eliminación de otros datos, envíe un correo electrónico a{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 text-center">
              ¿Preguntas sobre esta Política de Privacidad?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Si tiene preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, no dude en contactarnos.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contáctenos
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={scrollToTop}>
            Volver arriba
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyES;
