import { ref } from 'vue'

interface ProductModel {
  id: number
  name: string
  shortDescription: string
  image: string
  category: string
}

export const mainPageMockedProduct = ref<ProductModel[]>([
  {
    id: 1,
    name: 'Sofá de tres plazas',
    shortDescription: 'Sofá tapizado en tela gris, cómodo y elegante',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Salón',
  },
  {
    id: 2,
    name: 'Mesa de comedor',
    shortDescription: 'Mesa de madera maciza para 6 personas',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&h=900&fit=crop',
    category: 'Comedor',
  },
  {
    id: 3,
    name: 'Silla nórdica',
    shortDescription: 'Silla de diseño escandinavo en madera y polipropileno',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop',
    category: 'Sillas',
  },
  {
    id: 4,
    name: 'Cama matrimonial',
    shortDescription: 'Cama de matrimonio con cabecero acolchado',
    image: 'https://images.unsplash.com/photo-1600607688964-9d2c2d0b1b57?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
  },
  {
    id: 5,
    name: 'Lámpara de pie',
    shortDescription: 'Lámpara minimalista con pantalla de lino',
    image: 'https://images.unsplash.com/photo-1615874238904-9b4b7d34dd09?w=1200&h=900&fit=crop',
    category: 'Iluminación',
  },
  {
    id: 6,
    name: 'Estantería modular',
    shortDescription: 'Estantería de madera con diseño adaptable',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop',
    category: 'Almacenaje',
  },
])

export const mockedProducts = ref<ProductModel[]>([
  {
    id: 1,
    name: 'Sofá de tres plazas',
    shortDescription: 'Sofá tapizado en tela gris, cómodo y elegante',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Salón',
  },
  {
    id: 2,
    name: 'Mesa de comedor',
    shortDescription: 'Mesa de madera maciza para 6 personas',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&h=900&fit=crop',
    category: 'Comedor',
  },
  {
    id: 3,
    name: 'Silla nórdica',
    shortDescription: 'Silla de diseño escandinavo en madera y polipropileno',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop',
    category: 'Sillas',
  },
  {
    id: 4,
    name: 'Cama matrimonial',
    shortDescription: 'Cama de matrimonio con cabecero acolchado',
    image: 'https://images.unsplash.com/photo-1600607688964-9d2c2d0b1b57?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
  },
  {
    id: 5,
    name: 'Lámpara de pie',
    shortDescription: 'Lámpara minimalista con pantalla de lino',
    image: 'https://images.unsplash.com/photo-1615874238904-9b4b7d34dd09?w=1200&h=900&fit=crop',
    category: 'Iluminación',
  },
  {
    id: 6,
    name: 'Estantería modular',
    shortDescription: 'Estantería de madera con diseño adaptable',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop',
    category: 'Almacenaje',
  },
  {
    id: 7,
    name: 'Mesa auxiliar',
    shortDescription: 'Mesa auxiliar redonda en madera y metal',
    image: 'https://images.unsplash.com/photo-1582582425173-6e88fef44f24?w=1200&h=900&fit=crop',
    category: 'Mesas',
  },
  {
    id: 8,
    name: 'Butaca reclinable',
    shortDescription: 'Butaca de lectura reclinable en piel sintética',
    image: 'https://images.unsplash.com/photo-1616627988856-b8cf54f7a5f4?w=1200&h=900&fit=crop',
    category: 'Salón',
  },
  {
    id: 9,
    name: 'Escritorio moderno',
    shortDescription: 'Escritorio de líneas rectas en madera clara',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=900&fit=crop',
    category: 'Oficina',
  },
  {
    id: 10,
    name: 'Alfombra tejida',
    shortDescription: 'Alfombra rectangular de fibras naturales',
    image: 'https://images.unsplash.com/photo-1616627574947-90f00e43f520?w=1200&h=900&fit=crop',
    category: 'Decoración',
  },
  {
    id: 11,
    name: 'Aparador de madera',
    shortDescription: 'Aparador de roble con puertas correderas',
    image: 'https://images.unsplash.com/photo-1600585154207-91c8780d170d?w=1200&h=900&fit=crop',
    category: 'Comedor',
  },
  {
    id: 12,
    name: 'Cuna para bebé',
    shortDescription: 'Cuna blanca de madera con barandillas de seguridad',
    image: 'https://images.unsplash.com/photo-1603079847670-cdbdfe4a836e?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
  },
  {
    id: 13,
    name: 'Mesa de centro',
    shortDescription: 'Mesa de centro rectangular con vidrio templado',
    image: 'https://images.unsplash.com/photo-1606813907291-75b6ae5db2f0?w=1200&h=900&fit=crop',
    category: 'Salón',
  },
  {
    id: 14,
    name: 'Armario de dos puertas',
    shortDescription: 'Armario espacioso con acabado blanco mate',
    image: 'https://images.unsplash.com/photo-1616628188473-4ddc881c34e2?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
  },
  {
    id: 15,
    name: 'Banco de entrada',
    shortDescription: 'Banco con espacio de almacenaje inferior',
    image: 'https://images.unsplash.com/photo-1598300053652-fd61e97cf7b2?w=1200&h=900&fit=crop',
    category: 'Recibidor',
  },
  {
    id: 16,
    name: 'Espejo de pared',
    shortDescription: 'Espejo grande rectangular con marco de madera',
    image: 'https://images.unsplash.com/photo-1628744873490-1cb43f8e8121?w=1200&h=900&fit=crop',
    category: 'Decoración',
  },
  {
    id: 17,
    name: 'Silla de oficina ergonómica',
    shortDescription: 'Silla giratoria con soporte lumbar y reposacabezas',
    image: 'https://images.unsplash.com/photo-1580041468387-34e8fb38d1b1?w=1200&h=900&fit=crop',
    category: 'Oficina',
  },
  {
    id: 18,
    name: 'Cajonera compacta',
    shortDescription: 'Cajonera de 4 niveles con acabado en roble claro',
    image: 'https://images.unsplash.com/photo-1598300000000-12ab34cd56ef?w=1200&h=900&fit=crop',
    category: 'Almacenaje',
  },
  {
    id: 19,
    name: 'Taburete alto',
    shortDescription: 'Taburete de bar con asiento acolchado',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop',
    category: 'Cocina',
  },
  {
    id: 20,
    name: 'Cómoda de dormitorio',
    shortDescription: 'Cómoda de 6 cajones en madera clara',
    image: 'https://images.unsplash.com/photo-1628744872945-38b1f6b8b2af?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
  },
  {
    id: 21,
    name: 'Librería moderna',
    shortDescription: 'Librería abierta con estantes irregulares',
    image: 'https://images.unsplash.com/photo-1616627988487-b8cf54f7a5f4?w=1200&h=900&fit=crop',
    category: 'Almacenaje',
  },
  {
    id: 22,
    name: 'Mesa plegable',
    shortDescription: 'Mesa compacta plegable ideal para espacios pequeños',
    image: 'https://images.unsplash.com/photo-1582582494706-0f5b2ecfac43?w=1200&h=900&fit=crop',
    category: 'Cocina',
  },
  {
    id: 23,
    name: 'Sillón vintage',
    shortDescription: 'Sillón retro con patas de madera',
    image: 'https://images.unsplash.com/photo-1616628187476-0f5b2ecfac11?w=1200&h=900&fit=crop',
    category: 'Salón',
  },
  {
    id: 24,
    name: 'Mesita de noche',
    shortDescription: 'Mesita de dos cajones en acabado natural',
    image: 'https://images.unsplash.com/photo-1595526113894-91e3a815d25d?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
  },
  {
    id: 25,
    name: 'Mueble de TV',
    shortDescription: 'Mueble bajo para TV con estantes abiertos',
    image: 'https://images.unsplash.com/photo-1600585152878-3f06cde16f63?w=1200&h=900&fit=crop',
    category: 'Salón',
  },
])
