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
import { courseData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    <section id="courses">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-10 py-10">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            Oferta Académica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full">
                <div className="relative rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="course-image"
                    width={389}
                    height={262}
                    className="m-auto clipPath"
                  />
                </div>

                <div className="px-3 pt-6">
                  <Link
                    href="#"
                    className="text-2xl font-bold text-black max-w-75% inline-block"
                  >
                    {items.heading}
                  </Link>
                  <h3 className="text-2xl font-normal pt-6 text-black/75">
                    {items.name}
                  </h3>

                  <div className="flex justify-between items-center py-6 border-b">
                    {/* <div className="flex items-center gap-4">
                      <h3 className="text-red-700 text-2xl font-medium">
                        {items.rating}
                      </h3>
                      <div className="flex">
                        {renderStars(items.rating, i)}
                      </div>
                    </div> */}
                    <h3 className="text-xl font-medium">
                      Inicia el {items.dateStart}
                    </h3>
                  </div>

                  <div className="flex justify-between pt-6">
                    <div className="flex gap-4">
                      <Icon
                        icon="solar:notebook-minimalistic-outline"
                        className="text-primary text-xl inline-block me-2"
                      />
                      <h3 className="text-base font-medium text-black opacity-75">
                        {items.classes} semanas
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      {/* <Icon
                        icon="solar:users-group-rounded-linear"
                        className="text-primary text-xl inline-block me-2"
                      /> */}
                      <h3 className="text-base font-medium text-black opacity-75">
                        Modalidad Virtual
                      </h3>
                    </div>
                  </div>

                  {/* <div className="mt-4 text-blue-600 font-medium">
                    Ver detalles →
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
