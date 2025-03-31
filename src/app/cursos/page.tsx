// export default function Cursos() {
//   return (
//     <main>
//       <section>
//         <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
//           <div className="sm:flex justify-between items-center mb-20">
//             <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
//               Nuestros Cursos.
//             </h2>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";

// Simulación de datos de cursos
const cursos = [
  {
    id: 1,
    slug: "curso-de-administracion",
    titulo: "Curso de Administración",
    descripcionCorta: "Aprende los fundamentos de la administración moderna",
  },
  {
    id: 2,
    slug: "curso-de-marketing",
    titulo: "Curso de Marketing Digital",
    descripcionCorta: "Estrategias efectivas para marketing en línea",
  },
  {
    id: 3,
    slug: "curso-de-finanzas",
    titulo: "Curso de Finanzas",
    descripcionCorta: "Gestión financiera para emprendedores",
  },
];

export default function CursosPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Cursos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <Link href={`/cursos/${curso.slug}`} key={curso.id}>
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{curso.titulo}</h2>
              <p className="text-gray-600">{curso.descripcionCorta}</p>
              <div className="mt-4 text-blue-600 font-medium">
                Ver detalles →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
