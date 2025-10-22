export function BreedsList({breeds}: {breeds: string[]}) {
    return(
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-4">All Dog Breeds ({breeds.length})</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {breeds.map(breed => (
          <li key={breed} className="capitalize p-2 hover:bg-gray-100 rounded">
            {breed}
          </li>
        ))}
      </ul>
    </div>
    )
}