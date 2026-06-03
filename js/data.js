/* =========================================================
  BASE DE DATOS LOCAL DEL PROYECTO
  - Aquí guardamos las localidades y su clima actual
  - En este commit usaremos estos datos para renderizar
    las cards de la página principal
  - En el commit 3 también usaremos estos mismos datos
    para mostrar el detalle y el pronóstico
========================================================= */

const weatherData = [
  {
    id: "santiago",
    city: "Santiago",
    region: "Región Metropolitana",
    temp: 28,
    status: "Soleado",
    icon: "☀️",
  },
  {
    id: "valparaiso",
    city: "Valparaíso",
    region: "Región de Valparaíso",
    temp: 19,
    status: "Brisa costera",
    icon: "🌤️",
  },
  {
    id: "concepcion",
    city: "Concepción",
    region: "Región del Biobío",
    temp: 16,
    status: "Nublado",
    icon: "☁️",
  },
  {
    id: "arica",
    city: "Arica",
    region: "Región de Arica y Parinacota",
    temp: 25,
    status: "Despejado",
    icon: "🌤️",
  },
  {
    id: "iquique",
    city: "Iquique",
    region: "Región de Tarapacá",
    temp: 22,
    status: "Costero",
    icon: "🌊",
  },
  {
    id: "antofagasta",
    city: "Antofagasta",
    region: "Región de Antofagasta",
    temp: 21,
    status: "Soleado",
    icon: "☀️",
  },
  {
    id: "temuco",
    city: "Temuco",
    region: "Región de La Araucanía",
    temp: 14,
    status: "Lluvia",
    icon: "🌧️",
  },
  {
    id: "punta-arenas",
    city: "Punta Arenas",
    region: "Región de Magallanes",
    temp: 8,
    status: "Frío y viento",
    icon: "🌬️",
  },
  {
    id: "puerto-montt",
    city: "Puerto Montt",
    region: "Región de Los Lagos",
    temp: 11,
    status: "Lluvioso",
    icon: "🌧️",
  },
  {
    id: "copiapo",
    city: "Copiapó",
    region: "Región de Atacama",
    temp: 30,
    status: "Caluroso",
    icon: "🥵",
  },
];