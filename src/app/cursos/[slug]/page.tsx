// import { useRouter } from "next/router";

// export default function Curso() {
//   const router = useRouter();
//   return (
//     <div>
//       <p>Curso: {router.query.slug}</p>
//     </div>
//   );
// }
// Esta función simula obtener datos de un curso por su slug
// En una aplicación real, probablemente obtendrías estos datos de una API o base de datos
function getCursoBySlug(slug) {
  const cursos = {
    "curso-de-administracion": {
      titulo: "Curso de Administración",
      descripcion:
        "Un curso completo sobre administración empresarial moderna.",
      duracion: "12 semanas",
      nivel: "Intermedio",
      precio: "$299",
      instructor: "Dra. María Rodríguez",
      contenido: [
        "Fundamentos de la administración",
        "Planificación estratégica",
        "Gestión de recursos humanos",
        "Liderazgo efectivo",
        "Gestión financiera básica",
        "Toma de decisiones",
        "Marketing para administradores",
      ],
      requisitos: [
        "Conocimientos básicos de negocios",
        "Computadora con acceso a internet",
        "Disposición para trabajar en equipo",
      ],
    },
    "curso-de-marketing": {
      titulo: "Curso de Marketing Digital",
      descripcion:
        "Aprende las estrategias más efectivas del marketing en línea.",
      duracion: "8 semanas",
      nivel: "Todos los niveles",
      precio: "$249",
      instructor: "Carlos Méndez",
      contenido: [
        "Fundamentos del marketing digital",
        "SEO y SEM",
        "Marketing en redes sociales",
        "Email marketing",
        "Analítica web",
        "Estrategias de contenido",
      ],
      requisitos: [
        "Conocimientos básicos de internet",
        "Cuenta en redes sociales",
        "Interés en marketing",
      ],
    },
    "curso-de-finanzas": {
      // Datos similares para este curso
      titulo: "Curso de Finanzas",
      descripcion: "Gestión financiera para emprendedores y pequeñas empresas.",
      duracion: "10 semanas",
      nivel: "Principiante",
      precio: "$199",
      instructor: "Lic. Roberto Gómez",
      contenido: [
        "Fundamentos de contabilidad",
        "Presupuesto y planificación financiera",
        "Análisis de estados financieros",
        "Gestión de flujo de caja",
        "Financiamiento para empresas",
        "Estrategias de inversión",
      ],
      requisitos: [
        "Conocimientos básicos de matemáticas",
        "Interés en finanzas personales o empresariales",
        "Computadora con Excel o similar",
      ],
    },
  };

  return cursos[slug] || null;
}

export default function CursoPage({ params }) {
  const curso = getCursoBySlug(params.slug);

  if (!curso) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Curso no encontrado</h1>
        <p>Lo sentimos, el curso que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <a href="/cursos" className="text-blue-600 mb-4 inline-block">
        ← Volver a cursos
      </a>

      <h1 className="text-4xl font-bold mb-2">{curso.titulo}</h1>
      <p className="text-xl text-gray-600 mb-6">{curso.descripcion}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="font-semibold mb-2">Duración</h3>
          <p>{curso.duracion}</p>
        </div>
        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="font-semibold mb-2">Nivel</h3>
          <p>{curso.nivel}</p>
        </div>
        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="font-semibold mb-2">Precio</h3>
          <p className="text-xl font-bold text-green-600">{curso.precio}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Instructor</h2>
        <p className="text-lg">{curso.instructor}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contenido del curso</h2>
        <ul className="list-disc pl-6 space-y-2">
          {curso.contenido.map((tema, index) => (
            <li key={index} className="text-lg">
              {tema}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Requisitos</h2>
        <ul className="list-disc pl-6 space-y-2">
          {curso.requisitos.map((requisito, index) => (
            <li key={index} className="text-lg">
              {requisito}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Inscribirme ahora
        </button>
      </div>
    </div>
  );
}
