import { ref } from 'vue'

interface ProductModel {
  id: number
  name: string
  shortDescription: string
  image: string
  category: string
  size: string
  color: string
  brand: string
}

export const mainPageMockedProduct = ref<ProductModel[]>([
  {
    id: 1,
    name: 'Sofá de tres plazas',
    shortDescription: 'Sofá tapizado en tela gris, cómodo y elegante',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Salón',
    size: 'Grande',
    color: 'Gris',
    brand: 'ComfortHome'
  },
  {
    id: 2,
    name: 'Mesa de comedor',
    shortDescription: 'Mesa de madera maciza para 6 personas',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&h=900&fit=crop',
    category: 'Comedor',
    size: 'Grande',
    color: 'Madera clara',
    brand: 'WoodCraft'
  },
  {
    id: 3,
    name: 'Silla nórdica',
    shortDescription: 'Silla de diseño escandinavo en madera y polipropileno',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Sillas',
    size: 'Mediano',
    color: 'Blanco',
    brand: 'ScandiDesign'
  },
  {
    id: 4,
    name: 'Cama matrimonial',
    shortDescription: 'Cama de matrimonio con cabecero acolchado',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
    size: 'Grande',
    color: 'Beige',
    brand: 'Dreams'
  },
  {
    id: 5,
    name: 'Lámpara de pie',
    shortDescription: 'Lámpara minimalista con pantalla de lino',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Iluminación',
    size: 'Alto',
    color: 'Negro',
    brand: 'LightIt'
  },
  {
    id: 6,
    name: 'Estantería modular',
    shortDescription: 'Estantería de madera con diseño adaptable',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Almacenaje',
    size: 'Mediano',
    color: 'Roble',
    brand: 'FlexiWood'
  }
])

export const mockedProducts = ref<ProductModel[]>([
  {
    id: 1,
    name: 'Sofá de tres plazas',
    shortDescription: 'Sofá tapizado en tela gris, cómodo y elegante',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Salón',
    size: 'Grande',
    color: 'Gris',
    brand: 'ComfortHome'
  },
  {
    id: 2,
    name: 'Mesa de comedor',
    shortDescription: 'Mesa de madera maciza para 6 personas',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&h=900&fit=crop',
    category: 'Comedor',
    size: 'Grande',
    color: 'Madera clara',
    brand: 'WoodCraft'
  },
  {
    id: 3,
    name: 'Silla nórdica',
    shortDescription: 'Silla de diseño escandinavo en madera y polipropileno',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Sillas',
    size: 'Mediano',
    color: 'Blanco',
    brand: 'ScandiDesign'
  },
  {
    id: 4,
    name: 'Cama matrimonial',
    shortDescription: 'Cama de matrimonio con cabecero acolchado',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
    size: 'Grande',
    color: 'Beige',
    brand: 'Dreams'
  },
  {
    id: 5,
    name: 'Lámpara de pie',
    shortDescription: 'Lámpara minimalista con pantalla de lino',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Iluminación',
    size: 'Alto',
    color: 'Negro',
    brand: 'LightIt'
  },
  {
    id: 6,
    name: 'Estantería modular',
    shortDescription: 'Estantería de madera con diseño adaptable',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Almacenaje',
    size: 'Mediano',
    color: 'Roble',
    brand: 'FlexiWood'
  },
  {
    id: 7,
    name: 'Mesa auxiliar',
    shortDescription: 'Mesa auxiliar redonda en madera y metal',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Mesas',
    size: 'Pequeño',
    color: 'Nogal',
    brand: 'UrbanStyle'
  },
  {
    id: 8,
    name: 'Butaca reclinable',
    shortDescription: 'Butaca de lectura reclinable en piel sintética',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Salón',
    size: 'Grande',
    color: 'Marrón',
    brand: 'RelaxPro'
  },
  {
    id: 9,
    name: 'Escritorio moderno',
    shortDescription: 'Escritorio de líneas rectas en madera clara',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Oficina',
    size: 'Mediano',
    color: 'Abedul',
    brand: 'WorkLine'
  },
  {
    id: 10,
    name: 'Alfombra tejida',
    shortDescription: 'Alfombra rectangular de fibras naturales',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Decoración',
    size: 'Grande',
    color: 'Beige',
    brand: 'SoftTex'
  },
  {
    id: 11,
    name: 'Aparador de madera',
    shortDescription: 'Aparador de roble con puertas correderas',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Comedor',
    size: 'Grande',
    color: 'Roble',
    brand: 'WoodCraft'
  },
  {
    id: 12,
    name: 'Cuna para bebé',
    shortDescription: 'Cuna blanca de madera con barandillas de seguridad',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Dormitorio',
    size: 'Mediano',
    color: 'Blanco',
    brand: 'BabyCare'
  },
  {
    id: 13,
    name: 'Mesa de centro',
    shortDescription: 'Mesa de centro rectangular con vidrio templado',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop',
    category: 'Salón',
    size: 'Mediano',
    color: 'Transparente',
    brand: 'GlassArt'
  }
])
