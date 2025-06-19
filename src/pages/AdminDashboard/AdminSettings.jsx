import { useEffect, useState } from 'react';
import axios from '../../lib/axios';

export default function AdminSettings() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    axios.get('/user/config').then((res) => {
      setConfig(res.data);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setConfig({ ...config, [name]: checked });
    } else if (type === 'file') {
      setConfig({ ...config, [name]: files[0] }); // image object
    } else {
      setConfig({ ...config, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    Object.entries(config).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await axios.post('/user/config', formData);
    setSaving(false);
    alert('Configuración guardada');
  };

  if (loading) return <p className="text-gray-700 dark:text-gray-200">Cargando configuración...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-gray-900 dark:text-white max-w-2xl">
      <h1 className="text-2xl font-bold">Configuración de la App del Proyector</h1>

      {/* Nombre */}
      <div>
        <label className="block mb-1">Nombre/s</label>
        <input
          type="text"
          name="names"
          value={config.names}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600"
        />
      </div>

      {/* Texto de cabecera */}
      <div>
        <label className="block mb-1">Texto cabecera</label>
        <input
          type="text"
          name="header_text"
          value={config.header_text}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600"
        />
      </div>

      {/* Colores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['primary_color', 'secondary_color', 'tertiary_color'].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field.replace('_', ' ')}</label>
            <input
              type="color"
              name={field}
              value={config[field]}
              onChange={handleChange}
              className="w-full h-10 rounded bg-white dark:bg-gray-700 border dark:border-gray-600"
            />
          </div>
        ))}
      </div>

      {/* Imagen cabecera */}
      <div>
        <label className="block mb-1">Imagen para cabecera (opcional)</label>
        <input
          type="file"
          name="header_image"
          accept="image/*"
          onChange={handleChange}
          className="w-full text-sm text-gray-800 dark:text-gray-200"
        />
      </div>

      {/* Habilitar descripción */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="enable_description"
          checked={config.enable_description}
          onChange={handleChange}
        />
        <label>Habilitar descripción</label>
      </div>

      {/* Campos extra sugeridos */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="dark_mode"
          checked={config.dark_mode}
          onChange={handleChange}
        />
        <label>Forzar modo oscuro</label>
      </div>

      <div>
        <label className="block mb-1">Duración por slide (segundos)</label>
        <input
          type="number"
          name="slide_duration"
          value={config.slide_duration}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="show_datetime"
          checked={config.show_datetime}
          onChange={handleChange}
        />
        <label>Mostrar fecha y hora</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="animated_transitions"
          checked={config.animated_transitions}
          onChange={handleChange}
        />
        <label>Transiciones animadas</label>
      </div>

      {/* Botón de guardar */}
      <button
        type="submit"
        disabled={saving}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        {saving ? 'Guardando...' : 'Guardar configuración'}
      </button>
    </form>
  );
}
