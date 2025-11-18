export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl cursor-pointer hover:scale-105 hover:bg-gray-800 transition shadow-lg"
    >
      <img
        src={profile.foto}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />

      <h2 className="text-center text-xl font-bold mt-4">{profile.nome}</h2>
      <p className="text-center text-gray-400">{profile.cargo}</p>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {profile.habilidadesTecnicas.slice(0,3).map((skill) => (
          <span
            key={skill}
            className="bg-blue-600 text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
