import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  LuSearch,
  LuBriefcase,
  LuCalendarDays,
  LuArrowRight,
  LuSparkles,
} from "react-icons/lu";

export default function CarrosselEventos({ eventos }) {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination]}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slideToClickedSlide={true}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        breakpoints={{
          1920: { slidesPerView: 4 },
          1028: { slidesPerView: 2 },
          990: { slidesPerView: 1 },
        }}
        className="centered-slide-carousel"
      >
        {eventos.map((evento) => (
          <SwiperSlide key={evento.id}>
            <div
              className="bg-gray-900 rounded-2xl h-96 p-6 border border-gray-800 
                            flex flex-col justify-between hover:border-blue-600 
                            transition shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  {evento.titulo}
                </h3>

                <h4 className="text-2xl text-lg font-bold flex items-center gap-2 mb-4">
                  <LuCalendarDays className="text-purple-400" /> {evento.data}
                </h4>
                <img
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
                />
              </div>

              <div className="mt-8">
                <p className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full">
                  {evento.tag}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* bullet moderna */}
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
}
