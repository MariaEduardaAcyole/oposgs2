export default function InvitePopup({ onClose }) {
  const convitesEnviados = [
    "João Silva - Desenvolvedor",
    "Ana Pereira - UX Designer",
  ];

  const convitesRecebidos = [
    "Carlos Mendes - Product Owner",
    "Juliana Costa - QA Tester",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-300 hover:text-white text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Notificações</h2>

        {/* Convites enviados */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-400">
            📤 Convites enviados
          </h3>
          <ul className="mt-2 text-gray-300">
            {convitesEnviados.map((c, i) => (
              <li key={i} className="border-b border-gray-700 py-2">
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Convites recebidos */}
        <div>
          <h3 className="text-lg font-semibold text-green-400">
            📥 Convites recebidos
          </h3>
          <ul className="mt-2 text-gray-300">
            {convitesRecebidos.map((c, i) => (
              <li key={i} className="border-b border-gray-700 py-2">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
