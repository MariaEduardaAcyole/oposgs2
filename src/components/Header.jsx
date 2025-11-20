import { useState } from "react";
import { Menu, X, Home, Users, Briefcase, Calendar } from "lucide-react";
import { MessageSquareCode } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/40 backdrop-blur-lg border-b border-white/10 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="/"
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <span className="text-blue-500">Opos</span>Works
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a
            href="/"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Home size={18} /> Início
          </a>
          <a
            href="/profissionais"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Users size={18} /> Profissionais
          </a>
          <a
            href="/vagas"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Briefcase size={18} /> Vagas
          </a>
          <a
            href="/ia"
            className="hover:text-white transition flex items-center gap-2"
          >
            <MessageSquareCode size={18} /> IArin
          </a>

          <ThemeToggle />

        </nav>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/10 px-6 py-4 animate-fade-down">
          <nav className="flex flex-col gap-4 text-gray-300 font-medium">
            <a
              href="/"
              className="hover:text-white transition flex items-center gap-2"
            >
              <Home size={18} /> Início
            </a>
            <a
              href="/profissionais"
              className="hover:text-white transition flex items-center gap-2"
            >
              <Users size={18} /> Profissionais
            </a>
            <a
              href="/vagas"
              className="hover:text-white transition flex items-center gap-2"
            >
              <Briefcase size={18} /> Vagas
            </a>
            <a
              href="/ia"
              className="hover:text-white transition flex items-center gap-2"
            >
              <MessageSquareCode size={26} className="text-blue-400" /> IArin
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
