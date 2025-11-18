import { LuBuilding2, LuMapPin, LuTag, LuArrowRight } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";

export default function CardVagaConcurso({ concurso, onApply }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl 
                    transition border border-gray-800 hover:border-blue-600">

      <h3 className="text-xl font-bold text-white">{concurso.cargo}</h3>

      <div className="flex items-center gap-2 text-gray-400 mt-1">
        <LuBuilding2 className="text-blue-400" />
        <p>{concurso.orgao}</p>
      </div>

      <div className="flex items-center gap-2 text-gray-500 mt-1">
<LuDollarSign className="text-green-400" />
        <p>{concurso.salario}</p>
      </div>

      <p className="text-gray-300 mt-4">{concurso.nivel}</p>

      {/* Tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {concurso.tags?.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-1 px-3 py-1 
                       bg-blue-700/40 text-blue-300 text-xs 
                       rounded-full border border-blue-600"
          >
            <LuTag className="text-blue-400" /> {t}
          </span>
        ))}
      </div>

      {/* Botões */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={() => onApply(concurso)}
          className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-500 
                     transition font-medium flex justify-center items-center gap-2"
        >
          Candidatar-se <LuArrowRight />
        </button>
      </div>
    </div>
  );
}
