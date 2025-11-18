
export default function ProfileModal({ profile, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
      <div className="bg-gray-900 p-8 rounded-2xl max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
        >
          ❌
        </button>

        {/* Cabeçalho */}
        <div className="flex items-center gap-6">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-700"
          />
          <div>
            <h2 className="text-3xl font-bold">{profile.nome}</h2>
            <p className="text-gray-300">{profile.cargo}</p>
            <p className="text-gray-400">{profile.localizacao}</p>
            <p className="text-gray-400 mt-2 italic text-sm">{profile.resumo}</p>

            <span className="mt-3 inline-block bg-blue-700 px-3 py-1 rounded-full text-sm text-white">
              {profile.area}
            </span>
          </div>
        </div>

        {/* Hard Skills */}
        <h3 className="mt-8 text-xl font-semibold">Hard Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.habilidadesTecnicas.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="mt-8 text-xl font-semibold">Soft Skills</h3>
        <ul className="list-disc ml-6 text-gray-300">
          {profile.softSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        {/* Experiências */}
        <h3 className="mt-8 text-xl font-semibold">Experiências</h3>
        {profile.experiencias.map((exp, i) => (
          <div key={i} className="mt-4 p-4 bg-gray-800 rounded-xl">
            <p className="font-bold text-lg">{exp.empresa}</p>
            <p className="text-gray-300">{exp.cargo}</p>
            <small className="text-gray-500">
              {exp.inicio} → {exp.fim}
            </small>
            <p className="text-gray-400 text-sm mt-2">{exp.descricao}</p>
          </div>
        ))}

        {/* Formação */}
        <h3 className="mt-8 text-xl font-semibold">Formação Acadêmica</h3>
        {profile.formacao.map((exp, i) => (
          <div key={i} className="mt-3">
            <p className="font-bold">{exp.curso}</p>
            <p className="text-gray-300">{exp.instituicao}</p>
            <p className="text-gray-400 text-sm mt-1">{exp.ano}</p>
          </div>
        ))}

        {/* Projetos */}
        <h3 className="mt-8 text-xl font-semibold">Projetos</h3>
        {profile.projetos.map((proj, i) => (
          <div key={i} className="mt-4">
            <p className="font-bold text-blue-400 hover:underline">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                {proj.titulo}
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-1">{proj.descricao}</p>
          </div>
        ))}

        {/* Certificações */}
        <h3 className="mt-8 text-xl font-semibold">Certificações</h3>
        <ul className="list-disc ml-6 text-gray-300">
          {profile.certificacoes.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>

        {/* Idiomas */}
        <h3 className="mt-8 text-xl font-semibold">Idiomas</h3>
        <ul className="list-disc ml-6 text-gray-300">
          {profile.idiomas.map((lang, i) => (
            <li key={i}>
              {lang.idioma} —{" "}
              <span className="text-gray-400">{lang.nivel}</span>
            </li>
          ))}
        </ul>

        {/* Áreas de interesse */}
        <h3 className="mt-8 text-xl font-semibold">Áreas de Interesse</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.areaInteresses.map((interest, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-sm"
            >
              {interest}
            </span>
          ))}
        </div>

        {/* Botões finais */}
        <div className="flex gap-4 mt-10">
          <button className="bg-green-600 px-4 py-2 rounded-lg">
            Conectar
          </button>
             

        </div>
      </div>
    </div>
  );
}
