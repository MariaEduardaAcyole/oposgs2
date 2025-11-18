import { useState } from "react";
import InvitePopup from "./InvitePopup";
import { FaBell } from "react-icons/fa";


export default function FloatingInviteButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white 
                   w-14 h-14 rounded-full shadow-xl flex items-center 
                   justify-center text-2xl z-40"
      >
        <FaBell />
      </button>

      {/* Popup */}
      {open && <InvitePopup onClose={() => setOpen(false)} />}
    </>
  );
}
