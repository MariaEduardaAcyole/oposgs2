import { useState } from "react";
import { login } from "../lib/auth";

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

  // ESPERAR a sessão gravar antes de ir
  setTimeout(() => {
    window.location.href = "/";
  }, 200);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        {erro && (
          <p className="text-red-400 text-center mb-4">{erro}</p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded-lg font-semibold hover:bg-blue-500"
          >
            Entrar
          </button>
        </form>

        <a
          href="/cadastro"
          className="block text-center text-blue-400 mt-4 hover:underline"
        >
          Criar conta
        </a>
      </div>
    </div>
  );
}
