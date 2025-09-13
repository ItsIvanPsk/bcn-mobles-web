import { ref } from 'vue'

export interface ProductColor {
  name: string
  color?: string | null
  texture?: string | null
}

export interface ProductModel {
  id: number
  name: string
  shortDescription: string
  description: string
  mainImage: string
  images: string[]
  category: string
  brand: string
  price: number

  defaultSize: string
  defaultColor: string

  sizes?: string[]
  colors?: ProductColor[]
  types?: string[]
  measures?: string[]
  extensible?: boolean
}

const placeholderImage =
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop'

export const mockedProducts = ref<ProductModel[]>([
  // --- SILLAS ---
  {
    id: 1,
    name: 'Silla de comedor Oslo',
    shortDescription: 'Silla nórdica con patas de madera',
    description: 'Diseño escandinavo en madera clara y asiento acolchado.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Sillas',
    brand: 'BCN Mobles',
    price: 79,
    defaultSize: 'Mediana',
    defaultColor: 'Roble claro',
    colors: [
      { name: 'Roble claro', color: '#d9c6a5' },
      { name: 'Blanco', color: '#ffffff' },
      { name: 'Negro', color: '#000000' }
    ],
  },
  {
    id: 2,
    name: 'Silla tapizada Roma',
    shortDescription: 'Silla de comedor elegante',
    description: 'Tapizado en tela gris y patas de madera roble.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Sillas',
    brand: 'BCN Mobles',
    price: 119,
    defaultSize: 'Grande',
    defaultColor: 'Roble',
    colors: [
      { name: 'Roble', color: '#b08d57' },
      { name: 'Roble oscuro', color: '#5a4633' },
      { name: 'Negro', color: '#000000' }
    ],
  },
  {
    id: 3,
    name: 'Silla plegable Basic',
    shortDescription: 'Silla ligera y práctica',
    description: 'Ideal para invitados o espacios reducidos, apilable.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Sillas',
    brand: 'BCN Mobles',
    price: 29,
    defaultSize: 'Mediana',
    defaultColor: 'Negro mate',
    colors: [
      { name: 'Negro mate', color: '#1c1c1c' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 4,
    name: 'Silla lounge Milano',
    shortDescription: 'Silla baja de relax',
    description: 'Diseñada para confort, perfecta para sala de estar.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Sillas',
    brand: 'BCN Mobles',
    price: 149,
    defaultSize: 'Grande',
    defaultColor: 'Acaccia',
    colors: [
      { name: 'Acaccia', color: '#a9744f' },
      { name: 'Roble oscuro', color: '#5a4633' },
      { name: 'Negro mate', color: '#1c1c1c' }
    ],
  },
  {
    id: 5,
    name: 'Silla ergonómica Berlin',
    shortDescription: 'Silla de oficina ajustable',
    description: 'Silla ergonómica con soporte lumbar y múltiples ajustes.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Sillas',
    brand: 'BCN Mobles',
    price: 219,
    defaultSize: 'Mediana',
    defaultColor: 'Negro',
    colors: [
      { name: 'Negro', color: '#000000' },
      { name: 'Negro mate', color: '#1c1c1c' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },

  // --- MESAS ---
  {
    id: 6,
    name: 'Mesa comedor Estocolmo',
    shortDescription: 'Mesa extensible para comedor',
    description: 'Extensible hasta 2,5m, en acabado roble claro.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Mesas',
    brand: 'BCN Mobles',
    price: 499,
    defaultSize: 'Grande',
    defaultColor: 'Roble claro',
    measures: ['120x80', '140x90', '160x90'],
    extensible: true,
    colors: [
      { name: 'Roble claro', color: '#d9c6a5' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 7,
    name: 'Mesa redonda Valencia',
    shortDescription: 'Mesa de comedor redonda',
    description: 'Mesa clásica en madera maciza.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Mesas',
    brand: 'BCN Mobles',
    price: 399,
    defaultSize: 'Mediana',
    defaultColor: 'Roble oscuro',
    measures: ['110x110', '130x130'],
    extensible: false,
    colors: [
      { name: 'Roble oscuro', color: '#5a4633' },
      { name: 'Acaccia', color: '#a9744f' }
    ],
  },
  {
    id: 8,
    name: 'Mesa centro Madrid',
    shortDescription: 'Mesa baja moderna',
    description: 'Mesa de centro con diseño minimalista.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Mesas',
    brand: 'BCN Mobles',
    price: 189,
    defaultSize: 'Mediana',
    defaultColor: 'Negro mate',
    measures: ['100x60'],
    extensible: false,
    colors: [
      { name: 'Negro mate', color: '#1c1c1c' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 9,
    name: 'Mesa escritorio Bilbao',
    shortDescription: 'Mesa de estudio con cajones',
    description: 'Perfecta para trabajar desde casa.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Mesas',
    brand: 'BCN Mobles',
    price: 299,
    defaultSize: 'Mediana',
    defaultColor: 'Roble',
    measures: ['140x70', '160x80'],
    extensible: false,
    colors: [
      { name: 'Roble', color: '#b08d57' },
      { name: 'Negro', color: '#000000' }
    ],
  },
  {
    id: 10,
    name: 'Mesa rústica León',
    shortDescription: 'Mesa comedor rústica',
    description: 'Hecha en madera maciza de acaccia.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Mesas',
    brand: 'BCN Mobles',
    price: 549,
    defaultSize: 'Grande',
    defaultColor: 'Acaccia',
    measures: ['180x90', '200x100'],
    extensible: false,
    colors: [
      { name: 'Acaccia', color: '#a9744f' },
      { name: 'Roble oscuro', color: '#5a4633' }
    ],
  },

  // --- ARMARIOS ---
  {
    id: 11,
    name: 'Armario Paris',
    shortDescription: 'Armario de dos puertas correderas',
    description: 'Con espejo y acabado moderno.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Armarios',
    brand: 'BCN Mobles',
    price: 699,
    defaultSize: 'Grande',
    defaultColor: 'Blanco',
    sizes: ['Mediana', 'Grande'],
    colors: [
      { name: 'Blanco', color: '#ffffff' },
      { name: 'Roble claro', color: '#d9c6a5' }
    ],
  },
  {
    id: 12,
    name: 'Armario Sevilla',
    shortDescription: 'Armario clásico de madera',
    description: 'Fabricado en roble macizo, gran durabilidad.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Armarios',
    brand: 'BCN Mobles',
    price: 899,
    defaultSize: 'Grande',
    defaultColor: 'Roble',
    sizes: ['Grande'],
    colors: [
      { name: 'Roble', color: '#b08d57' },
      { name: 'Roble oscuro', color: '#5a4633' }
    ],
  },
  {
    id: 13,
    name: 'Armario Tokyo',
    shortDescription: 'Armario minimalista japonés',
    description: 'Acabado en negro mate con puertas lisas.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Armarios',
    brand: 'BCN Mobles',
    price: 799,
    defaultSize: 'Mediana',
    defaultColor: 'Negro mate',
    sizes: ['Mediana', 'Grande'],
    colors: [
      { name: 'Negro mate', color: '#1c1c1c' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 14,
    name: 'Armario juvenil Córdoba',
    shortDescription: 'Armario juvenil compacto',
    description: 'Color blanco con detalles modernos.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Armarios',
    brand: 'BCN Mobles',
    price: 499,
    defaultSize: 'Mediana',
    defaultColor: 'Blanco',
    sizes: ['Mediana'],
    colors: [
      { name: 'Blanco', color: '#ffffff' },
      { name: 'Negro', color: '#000000' }
    ],
  },
  {
    id: 15,
    name: 'Armario Lisboa',
    shortDescription: 'Armario moderno con cajones',
    description: 'Acabado en acaccia con detalles en negro.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Armarios',
    brand: 'BCN Mobles',
    price: 749,
    defaultSize: 'Mediana',
    defaultColor: 'Acaccia',
    sizes: ['Mediana', 'Grande'],
    colors: [
      { name: 'Acaccia', color: '#a9744f' },
      { name: 'Negro', color: '#000000' }
    ],
  },

  // --- SOFÁS ---
  {
    id: 16,
    name: 'Sofá modular Barcelona',
    shortDescription: 'Sofá modular configurable',
    description: 'Disponible en múltiples configuraciones y colores.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Muebles',
    brand: 'BCN Mobles',
    price: 1099,
    defaultSize: 'Grande',
    defaultColor: 'Roble claro',
    types: ['2 asientos', '3 asientos', '4 asientos', '5 asientos', '4 asientos + cheslon'],
    measures: ['200x90', '250x100', '300x110'],
    colors: [
      { name: 'Roble claro', color: '#d9c6a5' },
      { name: 'Negro', color: '#000000' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 17,
    name: 'Sofá cheslong Valencia',
    shortDescription: 'Sofá con chaise longue',
    description: 'Diseño elegante y cómodo con chaise longue incluido.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Muebles',
    brand: 'BCN Mobles',
    price: 1299,
    defaultSize: 'Grande',
    defaultColor: 'Negro',
    types: ['3 asientos', '4 asientos + cheslon'],
    measures: ['250x100', '300x110'],
    colors: [
      { name: 'Negro', color: '#000000' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 18,
    name: 'Sofá relax Málaga',
    shortDescription: 'Sofá reclinable eléctrico',
    description: 'Perfecto para cine en casa.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Muebles',
    brand: 'BCN Mobles',
    price: 1599,
    defaultSize: 'Grande',
    defaultColor: 'Negro mate',
    types: ['3 asientos', '4 asientos', '5 asientos'],
    measures: ['220x95', '260x100'],
    colors: [
      { name: 'Negro mate', color: '#1c1c1c' },
      { name: 'Blanco', color: '#ffffff' }
    ],
  },
  {
    id: 19,
    name: 'Sofá cama Madrid',
    shortDescription: 'Sofá convertible en cama',
    description: 'Ideal para apartamentos pequeños.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Muebles',
    brand: 'BCN Mobles',
    price: 799,
    defaultSize: 'Mediana',
    defaultColor: 'Gris claro',
    types: ['2 asientos', '3 asientos'],
    measures: ['190x85'],
    colors: [
      { name: 'Gris claro', color: '#cccccc' },
      { name: 'Negro', color: '#000000' }
    ],
  },
  {
    id: 20,
    name: 'Sofá rinconera Granada',
    shortDescription: 'Sofá rinconera grande',
    description: 'Ideal para familias numerosas.',
    mainImage: placeholderImage,
    images: [placeholderImage],
    category: 'Muebles',
    brand: 'BCN Mobles',
    price: 1999,
    defaultSize: 'Grande',
    defaultColor: 'Roble oscuro',
    types: ['4 asientos', '5 asientos', '4 asientos + cheslon'],
    measures: ['300x200'],
    colors: [
      { name: 'Roble oscuro', color: '#5a4633' },
      { name: 'Negro', color: '#000000' }
    ],
  },
])
