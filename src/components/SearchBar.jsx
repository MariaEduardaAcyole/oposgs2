export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome, cargo ou skill..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-xl bg-gray-800 text-white mt-4"
    />
  );
}
