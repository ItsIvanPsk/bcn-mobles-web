import { ref } from 'vue'

export interface ProductModel {
  id: number
  name: string
  shortDescription: string
  description: string
  mainImage: string
  images: string[]
  category: string
  size: string
  color: string
  brand: string
  price: number
}

const placeholderImage =
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop'

export const mainPageMockedProduct = ref<ProductModel[]>([
  {
    id: 1,
    name: 'Sofá de tres plazas',
    shortDescription: 'Sofá tapizado en tela gris, cómodo y elegante',
    description:
      'Este sofá de tres plazas combina estilo moderno y confort. Tapizado en tela gris de alta resistencia, es perfecto para cualquier Mesas. Su estructura robusta asegura durabilidad y comodidad para reuniones familiares o momentos de relax.',
    mainImage: placeholderImage,
    images: [placeholderImage, "/public/shop/sofa3.jpg", placeholderImage],
    category: 'Mesas',
    size: 'Grande',
    color: 'Gris',
    brand: 'ComfortHome',
    price: 799,
  },
  {
    id: 2,
    name: 'Mesa de Armarios',
    shortDescription: 'Mesa de madera maciza para 6 personas',
    description:
      'Fabricada en madera maciza de roble, esta mesa de Armarios es resistente y elegante. Su acabado natural realza la veta de la madera, convirtiéndola en el centro de atención de cualquier espacio. Ideal para comidas familiares o cenas con amigos.',
    mainImage: placeholderImage,
    images: [placeholderImage, placeholderImage],
    category: 'Armarios',
    size: 'Grande',
    color: 'Madera clara',
    brand: 'WoodCraft',
    price: 599,
  },
])

export const mockedProducts = ref<ProductModel[]>([
  {
    id: 1,
    name: "Sofá de tres plazas",
    shortDescription: "Sofá tapizado en tela gris, cómodo y elegante",
    description: "Este sofá de tres plazas combina estilo moderno y confort. Tapizado en tela gris de alta resistencia, es perfecto para cualquier Mesas.",
    category: "Mesas",
    size: "Grande",
    color: "Gris",
    brand: "ComfortHome",
    price: 799,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Mesa de Armarios",
    shortDescription: "Mesa de madera maciza para 6 personas",
    description: "Fabricada en madera maciza de roble, esta mesa de Armarios es resistente y elegante. Ideal para comidas familiares o cenas con amigos.",
    category: "Armarios",
    size: "Grande",
    color: "Madera clara",
    brand: "WoodCraft",
    price: 599,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Silla nórdica",
    shortDescription: "Silla de diseño escandinavo en madera y polipropileno",
    description: "Con un diseño minimalista y ergonómico, esta silla combina madera natural y polipropileno blanco.",
    category: "Sillas",
    size: "Mediano",
    color: "Blanco",
    brand: "ScandiDesign",
    price: 129,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Cama matrimonial",
    shortDescription: "Cama de matrimonio con cabecero acolchado",
    description: "Diseñada para el descanso, esta cama matrimonial cuenta con un cabecero acolchado en tonos beige que aporta confort y elegancia.",
    category: "Dormitorio",
    size: "Grande",
    color: "Beige",
    brand: "Dreams",
    price: 999,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Lámpara de pie",
    shortDescription: "Lámpara minimalista con pantalla de lino",
    description: "Una lámpara de pie elegante con diseño minimalista y pantalla de lino natural. Ideal para aportar luz cálida en salones o dormitorios.",
    category: "Iluminación",
    size: "Alto",
    color: "Negro",
    brand: "LightIt",
    price: 89,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Estantería modular",
    shortDescription: "Estantería de madera con diseño adaptable",
    description: "Una estantería versátil que se adapta a cualquier espacio. Con módulos ajustables, ofrece almacenamiento flexible y un diseño moderno.",
    category: "Almacenaje",
    size: "Mediano",
    color: "Roble",
    brand: "FlexiWood",
    price: 349,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 7,
    name: "Mesa auxiliar",
    shortDescription: "Mesa auxiliar redonda en madera y metal",
    description: "Una mesa pequeña y funcional con tapa de madera y patas metálicas. Perfecta como mesa de apoyo en salones o habitaciones.",
    category: "Mesas",
    size: "Pequeño",
    color: "Nogal",
    brand: "UrbanStyle",
    price: 199,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 8,
    name: "Butaca reclinable",
    shortDescription: "Butaca de lectura reclinable en piel sintética",
    description: "Diseñada para el confort, esta butaca reclinable en piel sintética marrón es ideal para leer o descansar.",
    category: "Mesas",
    size: "Grande",
    color: "Marrón",
    brand: "RelaxPro",
    price: 549,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 9,
    name: "Escritorio moderno",
    shortDescription: "Escritorio de líneas rectas en madera clara",
    description: "Un escritorio funcional y moderno, fabricado en madera clara. Perfecto para oficinas en casa gracias a su diseño sencillo y práctico.",
    category: "Oficina",
    size: "Mediano",
    color: "Abedul",
    brand: "WorkLine",
    price: 429,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 10,
    name: "Alfombra tejida",
    shortDescription: "Alfombra rectangular de fibras naturales",
    description: "Alfombra artesanal tejida en fibras naturales, suave al tacto y resistente. Aporta calidez y estilo a cualquier estancia.",
    category: "Decoración",
    size: "Grande",
    color: "Beige",
    brand: "SoftTex",
    price: 159,
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: 11,
    name: "Producto 11",
    shortDescription: "Descripción corta del producto 11",
    description: "Este es un producto de ejemplo con id 11. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca11",
    price: 111
  },
  {
    id: 12,
    name: "Producto 12",
    shortDescription: "Descripción corta del producto 12",
    description: "Este es un producto de ejemplo con id 12. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca12",
    price: 112
  },
  {
    id: 13,
    name: "Producto 13",
    shortDescription: "Descripción corta del producto 13",
    description: "Este es un producto de ejemplo con id 13. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca13",
    price: 113
  },
  {
    id: 14,
    name: "Producto 14",
    shortDescription: "Descripción corta del producto 14",
    description: "Este es un producto de ejemplo con id 14. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca14",
    price: 114
  },
  {
    id: 15,
    name: "Producto 15",
    shortDescription: "Descripción corta del producto 15",
    description: "Este es un producto de ejemplo con id 15. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca15",
    price: 115
  },
  {
    id: 16,
    name: "Producto 16",
    shortDescription: "Descripción corta del producto 16",
    description: "Este es un producto de ejemplo con id 16. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca16",
    price: 116
  },
  {
    id: 17,
    name: "Producto 17",
    shortDescription: "Descripción corta del producto 17",
    description: "Este es un producto de ejemplo con id 17. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca17",
    price: 117
  },
  {
    id: 18,
    name: "Producto 18",
    shortDescription: "Descripción corta del producto 18",
    description: "Este es un producto de ejemplo con id 18. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca18",
    price: 118
  },
  {
    id: 19,
    name: "Producto 19",
    shortDescription: "Descripción corta del producto 19",
    description: "Este es un producto de ejemplo con id 19. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca19",
    price: 119
  },
  {
    id: 20,
    name: "Producto 20",
    shortDescription: "Descripción corta del producto 20",
    description: "Este es un producto de ejemplo con id 20. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca20",
    price: 120
  },
  {
    id: 21,
    name: "Producto 21",
    shortDescription: "Descripción corta del producto 21",
    description: "Este es un producto de ejemplo con id 21. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca21",
    price: 121
  },
  {
    id: 22,
    name: "Producto 22",
    shortDescription: "Descripción corta del producto 22",
    description: "Este es un producto de ejemplo con id 22. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca22",
    price: 122
  },
  {
    id: 23,
    name: "Producto 23",
    shortDescription: "Descripción corta del producto 23",
    description: "Este es un producto de ejemplo con id 23. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca23",
    price: 123
  },
  {
    id: 24,
    name: "Producto 24",
    shortDescription: "Descripción corta del producto 24",
    description: "Este es un producto de ejemplo con id 24. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca24",
    price: 124
  },
  {
    id: 25,
    name: "Producto 25",
    shortDescription: "Descripción corta del producto 25",
    description: "Este es un producto de ejemplo con id 25. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca25",
    price: 125
  },
  {
    id: 26,
    name: "Producto 26",
    shortDescription: "Descripción corta del producto 26",
    description: "Este es un producto de ejemplo con id 26. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca26",
    price: 126
  },
  {
    id: 27,
    name: "Producto 27",
    shortDescription: "Descripción corta del producto 27",
    description: "Este es un producto de ejemplo con id 27. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca27",
    price: 127
  },
  {
    id: 28,
    name: "Producto 28",
    shortDescription: "Descripción corta del producto 28",
    description: "Este es un producto de ejemplo con id 28. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca28",
    price: 128
  },
  {
    id: 29,
    name: "Producto 29",
    shortDescription: "Descripción corta del producto 29",
    description: "Este es un producto de ejemplo con id 29. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca29",
    price: 129
  },
  {
    id: 30,
    name: "Producto 30",
    shortDescription: "Descripción corta del producto 30",
    description: "Este es un producto de ejemplo con id 30. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca30",
    price: 130
  },
  {
    id: 31,
    name: "Producto 31",
    shortDescription: "Descripción corta del producto 31",
    description: "Este es un producto de ejemplo con id 31. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca31",
    price: 131
  },
  {
    id: 32,
    name: "Producto 32",
    shortDescription: "Descripción corta del producto 32",
    description: "Este es un producto de ejemplo con id 32. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca32",
    price: 132
  },
  {
    id: 33,
    name: "Producto 33",
    shortDescription: "Descripción corta del producto 33",
    description: "Este es un producto de ejemplo con id 33. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca33",
    price: 133
  },
  {
    id: 34,
    name: "Producto 34",
    shortDescription: "Descripción corta del producto 34",
    description: "Este es un producto de ejemplo con id 34. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca34",
    price: 134
  },
  {
    id: 35,
    name: "Producto 35",
    shortDescription: "Descripción corta del producto 35",
    description: "Este es un producto de ejemplo con id 35. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca35",
    price: 135
  },
  {
    id: 36,
    name: "Producto 36",
    shortDescription: "Descripción corta del producto 36",
    description: "Este es un producto de ejemplo con id 36. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca36",
    price: 136
  },
  {
    id: 37,
    name: "Producto 37",
    shortDescription: "Descripción corta del producto 37",
    description: "Este es un producto de ejemplo con id 37. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca37",
    price: 137
  },
  {
    id: 38,
    name: "Producto 38",
    shortDescription: "Descripción corta del producto 38",
    description: "Este es un producto de ejemplo con id 38. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca38",
    price: 138
  },
  {
    id: 39,
    name: "Producto 39",
    shortDescription: "Descripción corta del producto 39",
    description: "Este es un producto de ejemplo con id 39. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca39",
    price: 139
  },
  {
    id: 40,
    name: "Producto 40",
    shortDescription: "Descripción corta del producto 40",
    description: "Este es un producto de ejemplo con id 40. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca40",
    price: 140
  },
  {
    id: 41,
    name: "Producto 41",
    shortDescription: "Descripción corta del producto 41",
    description: "Este es un producto de ejemplo con id 41. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca41",
    price: 141
  },
  {
    id: 42,
    name: "Producto 42",
    shortDescription: "Descripción corta del producto 42",
    description: "Este es un producto de ejemplo con id 42. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca42",
    price: 142
  },
  {
    id: 43,
    name: "Producto 43",
    shortDescription: "Descripción corta del producto 43",
    description: "Este es un producto de ejemplo con id 43. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca43",
    price: 143
  },
  {
    id: 44,
    name: "Producto 44",
    shortDescription: "Descripción corta del producto 44",
    description: "Este es un producto de ejemplo con id 44. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca44",
    price: 144
  },
  {
    id: 45,
    name: "Producto 45",
    shortDescription: "Descripción corta del producto 45",
    description: "Este es un producto de ejemplo con id 45. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca45",
    price: 145
  },
  {
    id: 46,
    name: "Producto 46",
    shortDescription: "Descripción corta del producto 46",
    description: "Este es un producto de ejemplo con id 46. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Sillas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca46",
    price: 146
  },
  {
    id: 47,
    name: "Producto 47",
    shortDescription: "Descripción corta del producto 47",
    description: "Este es un producto de ejemplo con id 47. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca47",
    price: 147
  },
  {
    id: 48,
    name: "Producto 48",
    shortDescription: "Descripción corta del producto 48",
    description: "Este es un producto de ejemplo con id 48. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca48",
    price: 148
  },
  {
    id: 49,
    name: "Producto 49",
    shortDescription: "Descripción corta del producto 49",
    description: "Este es un producto de ejemplo con id 49. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca49",
    price: 149
  },
  {
    id: 50,
    name: "Producto 50",
    shortDescription: "Descripción corta del producto 50",
    description: "Este es un producto de ejemplo con id 50. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca50",
    price: 150
  },
  {
    id: 51,
    name: "Producto 51",
    shortDescription: "Descripción corta del producto 51",
    description: "Este es un producto de ejemplo con id 51. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca51",
    price: 151
  },
  {
    id: 52,
    name: "Producto 52",
    shortDescription: "Descripción corta del producto 52",
    description: "Este es un producto de ejemplo con id 52. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca52",
    price: 152
  },
  {
    id: 53,
    name: "Producto 53",
    shortDescription: "Descripción corta del producto 53",
    description: "Este es un producto de ejemplo con id 53. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca53",
    price: 153
  },
  {
    id: 54,
    name: "Producto 54",
    shortDescription: "Descripción corta del producto 54",
    description: "Este es un producto de ejemplo con id 54. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca54",
    price: 154
  },
  {
    id: 55,
    name: "Producto 55",
    shortDescription: "Descripción corta del producto 55",
    description: "Este es un producto de ejemplo con id 55. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca55",
    price: 155
  },
  {
    id: 56,
    name: "Producto 56",
    shortDescription: "Descripción corta del producto 56",
    description: "Este es un producto de ejemplo con id 56. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca56",
    price: 156
  },
  {
    id: 57,
    name: "Producto 57",
    shortDescription: "Descripción corta del producto 57",
    description: "Este es un producto de ejemplo con id 57. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca57",
    price: 157
  },
  {
    id: 58,
    name: "Producto 58",
    shortDescription: "Descripción corta del producto 58",
    description: "Este es un producto de ejemplo con id 58. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca58",
    price: 158
  },
  {
    id: 59,
    name: "Producto 59",
    shortDescription: "Descripción corta del producto 59",
    description: "Este es un producto de ejemplo con id 59. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca59",
    price: 159
  },
  {
    id: 60,
    name: "Producto 60",
    shortDescription: "Descripción corta del producto 60",
    description: "Este es un producto de ejemplo con id 60. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca60",
    price: 160
  },
  {
    id: 61,
    name: "Producto 61",
    shortDescription: "Descripción corta del producto 61",
    description: "Este es un producto de ejemplo con id 61. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca61",
    price: 161
  },
  {
    id: 62,
    name: "Producto 62",
    shortDescription: "Descripción corta del producto 62",
    description: "Este es un producto de ejemplo con id 62. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca62",
    price: 162
  },
  {
    id: 63,
    name: "Producto 63",
    shortDescription: "Descripción corta del producto 63",
    description: "Este es un producto de ejemplo con id 63. Incluye detalles ficticios para pruebas en la tienda online.",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop"
    ],
    category: "Mesas",
    size: "Mediano",
    color: "Variado",
    brand: "Marca63",
    price: 163
  }
])
