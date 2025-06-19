import { useState } from 'react';
import { useFind } from '../../hooks/useFind';

export default function AdminPhotos() {
  const { data, isLoading, error } = useFind({ resource: 'photos' }, {});
  const [mobileCols, setMobileCols] = useState(2); // 1 o 2 columnas en móvil

  const gridClass = `grid grid-cols-${mobileCols} sm:grid-cols-4 gap-4`;

  return (
    <div className="text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Photos</h1>

        {/* Mobile-only layout selector */}
        <div className="sm:hidden flex gap-2 text-sm">
          <button
            onClick={() => setMobileCols(1)}
            className={`px-3 py-1 rounded border ${
              mobileCols === 1
                ? 'bg-gray-800 text-white border-gray-800'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
          >
            1 por fila
          </button>
          <button
            onClick={() => setMobileCols(2)}
            className={`px-3 py-1 rounded border ${
              mobileCols === 2
                ? 'bg-gray-800 text-white border-gray-800'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
          >
            2 por fila
          </button>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && (
        <div className={gridClass}>
          {data.data.map((photo) => (
            <div
              key={photo.id}
              className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={photo.image_url}
                alt={photo.description}
                className={`w-full object-cover ${mobileCols === 1 ? 'h-80' : 'h-52'}`}
              />
              <div className="flex flex-col flex-1 p-4">
                <div className="flex-1">
                  <p className="text-sm line-clamp-3 break-words">{photo.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 h-5">
                    Autor: {photo.author}
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-green-600 text-white py-1 px-2 rounded hover:bg-green-700 text-sm">
                    Aceptar
                  </button>
                  <button className="w-full bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 text-sm">
                    Rechazar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
