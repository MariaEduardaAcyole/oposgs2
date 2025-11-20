import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  Rocket,
  FileText,
  Brain,
  BookOpen,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

// Sidebar universal
function CardSidebar({ icon, title, buttons }) {
  return (
    <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 shadow-xl">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
        {icon} {title}
      </h2>

      <div className="space-y-3">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            className="w-full p-3 bg-gray-900 hover:bg-gray-700 rounded-xl flex items-center gap-3 transition"
          >
            <span className="text-blue-400">{btn.icon}</span>
            <span>{btn.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function IaPage() {
  const [mensagem, setMensagem] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // 🔥 Simulação de resposta da IA
  // -----------------------------
  const responderIA = (texto) => {
    setLoading(true);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          autor: "ia",
          texto,
          avatar: "/avatar-ia.png", // 🔥 IMAGEM DA IA (coloque na pasta public)
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  // -----------------------------
  // ✉️ Enviar mensagem manual
  // -----------------------------
  const enviarMensagem = () => {
    if (!mensagem.trim()) return;

    setChat((prev) => [
      ...prev,
      {
        autor: "usuario",
        texto: mensagem,
      },
    ]);

    setMensagem("");

    responderIA("Claro! Já estou analisando e te envio uma resposta personalizada.");
  };

  // -----------------------------
  // 🧠 Funções da sidebar
  // -----------------------------
  const analisarCurriculo = () => {
    responderIA(
      "📄 Analisei seu currículo! Seus pontos fortes são comunicação, HTML, CSS, React e boa capacidade de resolver problemas."
    );
  };

  const gerarCurriculoPDF = () => {
    responderIA(
      "📎 Seu currículo otimizado já está pronto! Clique abaixo para baixar o PDF."
    );

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          autor: "ia",
          texto: "➡️ **Clique aqui para baixar o PDF otimizado**",
          link: "/curriculo_otimizado.pdf",
          avatar: "/avatar-ia.png",
        },
      ]);
    }, 1700);
  };

  const treinarEntrevista = () => {
    responderIA(
      "Vamos treinar! Pergunta 1: *Fale sobre você e sua trajetória profissional até aqui.*"
    );
  };

  const recomendarVagas = () => {
    responderIA(
      "Com base no seu perfil, recomendo vagas em: Front-end Júnior, UX/UI Assistant e Full Stack Trainee."
    );
  };

  const recomendarCursos = () => {
    responderIA(
      "Cursos recomendados: UI Design Avançado, React Hooks, Lógica com Projetos."
    );
  };

  const avaliarSkills = () => {
    responderIA(
      "Sua avaliação está equilibrada! Sugiro reforçar Git, bancos SQL e consumo de APIs."
    );
  };

  return (
    <div className="p-8 flex gap-10 bg-gray-900 min-h-screen text-white mt-20">
      {/* 🔥 Margin-top evita sobrepor o menu */}

      {/* -------------------------------- */}
      {/* 👉 SIDEBAR */}
      {/* -------------------------------- */}
      <div className="w-80 space-y-8 hidden lg:block">

        <CardSidebar
          icon={<Sparkles className="text-yellow-300" />}
          title="Sugestões Inteligentes"
          buttons={[
            { text: "Analisar currículo", icon: <Brain size={18} />, action: analisarCurriculo },
            { text: "Criar currículo otmizado", icon: <FileText size={18} />, action: gerarCurriculoPDF },
            { text: "Treinar entrevista", icon: <BriefcaseBusiness size={18} />, action: treinarEntrevista },
          ]}
        />

        <CardSidebar
          icon={<Rocket className="text-purple-400" />}
          title="Ações Rápidas"
          buttons={[
            { text: "Vagas recomendadas", icon: <Award size={18} />, action: recomendarVagas },
            { text: "Cursos para o perfil", icon: <BookOpen size={18} />, action: recomendarCursos },
            { text: "Avaliar minhas skills", icon: <Sparkles size={18} />, action: avaliarSkills },
          ]}
        />

      </div>

      {/* -------------------------------- */}
      {/* 👉 ÁREA DO CHAT */}
      {/* -------------------------------- */}
      <div className="flex-1 bg-gray-800/40 rounded-2xl border border-gray-700 shadow-xl p-6 flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Bot className="text-blue-400" size={32} />
          <h1 className="text-2xl font-bold">Assistente IA</h1>
        </div>

        {/* Chat */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">

          {chat.map((m, i) => (
            <div
              key={i}
              className={`flex gap-3 max-w-xl ${
                m.autor === "usuario" ? "ml-auto flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar da IA */}
              {m.autor === "ia" && (
                <img
                  src={m.avatar}
                  className="w-10 h-10 rounded-full border border-gray-600"
                />
              )}

              {/* Bubble */}
              <div
                className={`p-4 rounded-xl ${
                  m.autor === "usuario"
                    ? "bg-blue-600"
                    : "bg-gray-700"
                }`}
              >
                <p>{m.texto}</p>

                {m.link && (
                  <a
                    href={m.link}
                    className="text-blue-300 underline mt-2 inline-block"
                  >
                    Baixar PDF
                  </a>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="p-4 bg-gray-700 rounded-xl w-24 flex items-center gap-2">
              <span className="animate-pulse">● ● ●</span>
            </div>
          )}
        </div>

        {/* Campo de envio */}
        <div className="mt-4 flex gap-3">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="flex-1 p-3 bg-gray-700 rounded-xl border border-gray-600 text-white"
          />

          <button
            onClick={enviarMensagem}
            className="bg-blue-600 px-5 rounded-xl flex items-center justify-center hover:bg-blue-500 transition"
          >
            <Send size={22} />
          </button>
        </div>

      </div>
    </div>
  );
}
