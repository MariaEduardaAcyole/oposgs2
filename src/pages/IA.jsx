import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  MessageSquareCode,
  BookOpen,
  Briefcase,
  Star,
  NotebookPen,
  Rocket,
} from "lucide-react";

export default function IA() {
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState([
    {
      remetente: "bot",
      texto:
        "Olá! Sou sua assistente de carreira. Posso analisar seu perfil, sugerir vagas, melhorar seu currículo ou treinar para entrevistas. Como posso ajudar hoje?",
    },
  ]);

  const enviarMensagem = () => {
    if (!mensagem.trim()) return;

    setHistorico((prev) => [...prev, { remetente: "user", texto: mensagem }]);

    // 🧠 Resposta simulada — você futuramente integra com API da IA (OpenAI)
    setTimeout(() => {
      setHistorico((prev) => [
        ...prev,
        {
          remetente: "bot",
          texto:
            "Mensagem recebida! Estou analisando seu perfil para gerar a melhor orientação possível.",
        },
      ]);
    }, 700);

    setMensagem("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">

      {/* CABEÇALHO */}
      <header className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
        <Bot size={32} className="text-blue-400" />
        <h1 className="text-3xl font-bold">Assistente IA</h1>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 🔵 COLUNA DA CONVERSA */}
        <div className="lg:col-span-2 bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 shadow-xl">

          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquareCode className="text-blue-400" /> Conversa
          </h2>

          {/* CHAT BOX */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-black/20 rounded-xl border border-gray-700">
            {historico.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.remetente === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-xl ${
                    msg.remetente === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  {msg.texto}
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="mt-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
            />

            <button
              onClick={enviarMensagem}
              className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
            >
              <Send />
            </button>
          </div>
        </div>

        {/* ⭐ COLUNA LATERAL — SUGESTÕES / AÇÕES */}
        <div className="space-y-6">

          {/* Sugestões Inteligentes */}
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="text-yellow-300" /> Sugestões inteligentes
            </h2>

            <div className="space-y-3">
              <button className="w-full p-3 bg-gray-900 hover:bg-gray-700 rounded-xl text-left transition">
                ✨ Analisar meu currículo
              </button>
              <button className="w-full p-3 bg-gray-900 hover:bg-gray-700 rounded-xl text-left transition">
                🔍 Encontrar vagas ideais
              </button>
              <button className="w-full p-3 bg-gray-900 hover:bg-gray-700 rounded-xl text-left transition">
                💬 Treinar entrevista
              </button>
            </div>
          </div>

          {/* Atalhos */}
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Rocket className="text-purple-400" /> Ações rápidas
            </h2>

            <div className="flex flex-col gap-4">
              <Shortcut icon={<Briefcase />} text="Ver vagas recomendadas" />
              <Shortcut icon={<BookOpen />} text="Cursos para melhorar meu perfil" />
              <Shortcut icon={<NotebookPen />} text="Criar currículo otimizado" />
              <Shortcut icon={<Star />} text="Avaliar minhas skills" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// COMPONENTE DE ATALHO
function Shortcut({ icon, text }) {
  return (
    <button className="flex items-center gap-3 p-3 bg-gray-900 hover:bg-gray-700 rounded-xl transition">
      <div className="p-2 bg-gray-700 rounded-lg text-blue-300">{icon}</div>
      <span>{text}</span>
    </button>
  );
}
