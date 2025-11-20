import { useState } from "react";
import { login } from "../lib/auth";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, senha);

    if (!result.ok) {
      setErro(result.message);
      return;
    }

    setTimeout(() => {
      window.location.href = "/";
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">

      {/* 🌊 Animação de Ondas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* CONTAINER LOGIN */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Entrar na Plataforma
        </h1>

        {erro && (
          <p className="text-red-400 text-center mb-4">{erro}</p>
        )}

        {/* Botão Google */}
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold p-3 rounded-lg shadow-md hover:bg-gray-200 transition mb-6">
          <FcGoogle size={24} /> Entrar com Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-white/20"></span>
          <span className="text-gray-300 text-sm">ou</span>
          <span className="flex-1 h-px bg-white/20"></span>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-white/20 text-white rounded-lg placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 mb-4 bg-white/20 text-white rounded-lg placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            Entrar
          </button>
        </form>

        <a
          href="/cadastro"
          className="block text-center text-blue-300 mt-4 hover:underline"
        >
          Criar conta
        </a>
      </div>
    </div>
  );
}
