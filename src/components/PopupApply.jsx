import { LuSparkles, LuFileText, LuCheck, LuX } from "react-icons/lu";

export default function PopupApply({ vaga, onClose, onApprove }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm 
                    flex justify-center items-center p-6 z-50">
      <div className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full shadow-2xl relative">

        {/* botão fechar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <LuX size={26} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <LuSparkles className="text-blue-400" size={28} />
          <h2 className="text-2xl font-bold">Currículo Adaptado pela IA</h2>
        </div>

        <p className="text-gray-300 text-sm">
          Para a vaga <span className="font-semibold text-blue-400">{vaga.titulo}</span>, 
          nossa IA selecionou automaticamente as informações mais relevantes do seu perfil 
          para criar um currículo otimizado e aumentar suas chances de aprovação.
        </p>

        <p className="text-gray-400 mt-4 text-sm">
          Antes de enviar sua candidatura, você pode revisar o documento.
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <button 
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg 
                       flex justify-center items-center gap-2 font-medium"
          >
            <LuFileText /> Visualizar currículo
          </button>

          <button 
            onClick={onApprove}
            className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-lg 
                       flex justify-center items-center gap-2 font-medium"
          >
            <LuCheck /> Aprovar e enviar candidatura
          </button>

          <button 
            onClick={onClose}
            className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg 
                       text-gray-300 font-medium"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
