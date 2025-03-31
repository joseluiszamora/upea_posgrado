"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";

const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const renderStars = (rating: number, key: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <Icon
        key={key}
        icon="tabler:star-filled"
        className="text-yellow-500 text-xl inline-block"
      />
      //   <div>
      //     {Array(fullStars).fill(
      //       <Icon
      //         key={key}
      //         icon="tabler:star-filled"
      //         className="text-yellow-500 text-xl inline-block"
      //       />
      //     )}
      //     {halfStars > 0 && (
      //       <Icon
      //         key={key}
      //         icon="tabler:star-half-filled"
      //         className="text-yellow-500 text-xl inline-block"
      //       />
      //     )}
      //     {Array(emptyStars).fill(
      //       <Icon
      //         key={key}
      //         icon="tabler:star-filled"
      //         className="text-gray-400 text-xl inline-block"
      //       />
      //     )}
      //   </div>
    ); // Esta función simula obtener datos de un curso por su slug
    // En una aplicación real, probablemente obtendrías estos datos de una API o base de datos
    // function getCursoBySlug(slug) {
    //   const cursos = {
    //     "curso-de-administracion": {
    //       titulo: "Curso de Administración",
    //       descripcion:
    //         "Un curso completo sobre administración empresarial moderna.",
    //       duracion: "12 semanas",
    //       nivel: "Intermedio",
    //       precio: "$299",
    //       instructor: "Dra. María Rodríguez",
    //       contenido: [
    //         "Fundamentos de la administración",
    //         "Planificación estratégica",
    //         "Gestión de recursos humanos",
    //         "Liderazgo efectivo",
    //         "Gestión financiera básica",
    //         "Toma de decisiones",
    //         "Marketing para administradores",
    //       ],
    //       requisitos: [
    //         "Conocimientos básicos de negocios",
    //         "Computadora con acceso a internet",
    //         "Disposición para trabajar en equipo",
    //       ],
    //     },
    //     "curso-de-marketing": {
    //       titulo: "Curso de Marketing Digital",
    //       descripcion:
    //         "Aprende las estrategias más efectivas del marketing en línea.",
    //       duracion: "8 semanas",
    //       nivel: "Todos los niveles",
    //       precio: "$249",
    //       instructor: "Carlos Méndez",
    //       contenido: [
    //         "Fundamentos del marketing digital",
    //         "SEO y SEM",
    //         "Marketing en redes sociales",
    //         "Email marketing",
    //         "Analítica web",
    //         "Estrategias de contenido",
    //       ],
    //       requisitos: [
    //         "Conocimientos básicos de internet",
    //         "Cuenta en redes sociales",
    //         "Interés en marketing",
    //       ],
    //     },
    //     "curso-de-finanzas": {
    //       // Datos similares para este curso
    //       titulo: "Curso de Finanzas",
    //       descripcion:
    //         "Gestión financiera para emprendedores y pequeñas empresas.",
    //       duracion: "10 semanas",
    //       nivel: "Principiante",
    //       precio: "$199",
    //       instructor: "Lic. Roberto Gómez",
    //       contenido: [
    //         "Fundamentos de contabilidad",
    //         "Presupuesto y planificación financiera",
    //         "Análisis de estados financieros",
    //         "Gestión de flujo de caja",
    //         "Financiamiento para empresas",
    //         "Estrategias de inversión",
    //       ],
    //       requisitos: [
    //         "Conocimientos básicos de matemáticas",
    //         "Interés en finanzas personales o empresariales",
    //         "Computadora con Excel o similar",
    //       ],
    //     },
    //   };

    //   return cursos[slug] || null;
    // }

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
  };

  return (
    <section id="courses">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            Oferta Académica
          </h2>
          <Link
            href={"/cursos"}
            className="text-primary text-lg font-medium hover:tracking-widest duration-500"
          >
            Ver todos los cursos&nbsp;&gt;&nbsp;
          </Link>
        </div>
        <Slider {...settings}>
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
                  <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                    <h3 className="text-white uppercase text-center text-sm font-medium">
                      best <br /> seller
                    </h3>
                  </div>
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
                      <Icon
                        icon="solar:users-group-rounded-linear"
                        className="text-primary text-xl inline-block me-2"
                      />
                      <h3 className="text-base font-medium text-black opacity-75">
                        Modalidad Virtual
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
