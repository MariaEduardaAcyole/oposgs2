export default function FilterPanel({ profiles, setFilteredProfiles }) {
  const areas = [...new Set(profiles.map((p) => p.area))];

  const filterByArea = (area) => {
    if (area === "Todos") return setFilteredProfiles(profiles);
    setFilteredProfiles(profiles.filter((p) => p.area === area));
  };

  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      <button
        onClick={() => filterByArea("Todos")}
        className="px-4 py-2 bg-gray-700 rounded-lg"
      >
        Todos
      </button>

      {areas.map((area) => (
        <button
          key={area}
          onClick={() => filterByArea(area)}
          className="px-4 py-2 bg-blue-700 rounded-lg"
        >
          {area}
        </button>
      ))}
    </div>
  );
}
