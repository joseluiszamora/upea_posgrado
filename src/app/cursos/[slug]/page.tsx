"use client";

import { useParams } from "next/navigation";
import { courseData } from "@/app/api/data";
import { findItemBySlug } from "@/types/course";
import Link from "next/link";
import Image from "next/image";
export default function CursoPage() {
  const params = useParams();
  const slug = params.slug as string;
  const curso = findItemBySlug(courseData, slug);

  if (!curso) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Curso no encontrado</h1>
        <p>Lo sentimos, el curso que buscas no existe.</p>
      </div>
    );
  }

  return (
    <section id="courses">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-10 py-10">
        <div className="container mx-auto py-8">
          <Link href="/cursos" className="text-blue-600 mb-4 inline-block">
            ← Volver a cursos
          </Link>

          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Columna izquierda - Texto */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {curso.heading}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{curso.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                  Inscribirme ahora
                </button>
              </div>

              {/* Columna derecha - Imagen */}
              <div className="md:w-1/2">
                <div className="relative rounded-xl">
                  <Image
                    src={curso.imgSrc}
                    alt="course-image"
                    width={389}
                    height={262}
                    className="m-auto clipPath"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold mb-2">Duración</h3>
              <p>{curso.duration}</p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold mb-2">Horarios</h3>
              <p>{curso.dates}</p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold mb-2">Precio</h3>
              <p className="text-xl font-bold text-green-600">
                {curso.price} Bs
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contenido del curso</h2>
            <ul className="list-disc pl-6 space-y-2">
              {curso.modules.map((tema, index) => (
                <li key={index} className="text-lg">
                  {tema}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Requisitos</h2>
            <ul className="list-disc pl-6 space-y-2">
              {curso.requirements.map((requisito, index) => (
                <li key={index} className="text-lg">
                  {requisito}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
