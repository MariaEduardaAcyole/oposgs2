// src/lib/auth.js
import { users } from "../data/users";

export function login(email, senha) {
  const user = users.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!user) {
    return { ok: false, message: "Credenciais inválidas" };
  }

  // garantir que salvou ANTES do redirect
  try {
    localStorage.setItem("session", JSON.stringify(user));
  } catch (err) {
    console.error("Erro ao salvar sessão:", err);
  }

  return { ok: true, user };
}

export function getSession() {
  try {
    const data = localStorage.getItem("session");
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("session");
}
