import { type Pictogram } from '@/types'

export interface ScreenData {
  id: string
  pictograms: Pictogram[]
}

const BACK_BTN: Pictogram = {
  id: 'atras',
  label: 'Atrás',
  icon: 'ArrowLeft',
  color: 'gray',
  action: 'back',
  gridPosition: 1,
}

export const SCREENS: ScreenData[] = [
  {
    id: 'root',
    pictograms: [
      {
        id: 'quiero', label: 'Quiero', icon: 'HeartHandshake',
        color: 'green', action: 'speak-add', gridPosition: 1,
      },
      {
        id: 'mas', label: 'Más', icon: 'PlusCircle',
        color: 'gray', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'no-stop', label: 'No', icon: 'CircleX',
        color: 'pink', action: 'speak', gridPosition: 3,
      },
      {
        id: 'ayuda', label: 'Ayuda', icon: 'LifeBuoy',
        color: 'green', action: 'speak', gridPosition: 4,
      },
      {
        id: 'necesidades', label: 'Necesidades', icon: 'Heart',
        color: 'orange', action: 'navigate', gridPosition: 5,
      },
      {
        id: 'emociones', label: 'Emociones', icon: 'SmilePlus',
        color: 'blue', action: 'navigate', gridPosition: 6,
      },
      {
        id: 'juegos', label: 'Juegos', icon: 'Gamepad2',
        color: 'orange', action: 'navigate', gridPosition: 7,
      },
      {
        id: 'personas', label: 'Personas', icon: 'Users',
        color: 'yellow', action: 'navigate', gridPosition: 8,
      },
      {
        id: 'social', label: 'Social', icon: 'Handshake',
        color: 'pink', action: 'navigate', gridPosition: 9,
      },
    ],
  },
  {
    id: 'necesidades',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'necesidades.comida', label: 'Comida', icon: 'Apple',
        color: 'orange', action: 'navigate', gridPosition: 2,
      },
      {
        id: 'necesidades.bano', label: 'Baño', icon: 'Bath',
        color: 'orange', action: 'navigate', gridPosition: 3,
      },
      {
        id: 'necesidades.dolor', label: 'Dolor', icon: 'Stethoscope',
        color: 'orange', action: 'navigate', gridPosition: 4,
      },
      {
        id: 'sueno', label: 'Tengo sueño', icon: 'Moon',
        color: 'blue', action: 'speak', gridPosition: 5,
      },
      {
        id: 'frio', label: 'Tengo frío', icon: 'Snowflake',
        color: 'blue', action: 'speak', gridPosition: 6,
      },
      {
        id: 'calor', label: 'Tengo calor', icon: 'Sun',
        color: 'blue', action: 'speak', gridPosition: 7,
      },
    ],
  },
  {
    id: 'necesidades.comida',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'agua', label: 'Agua', icon: 'Droplets',
        color: 'orange', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'leche', label: 'Leche', icon: 'GlassWater',
        color: 'orange', action: 'speak-add', gridPosition: 3,
      },
      {
        id: 'manzana', label: 'Manzana', icon: 'Apple',
        color: 'orange', action: 'speak-add', gridPosition: 4,
      },
      {
        id: 'galleta', label: 'Galleta', icon: 'Cookie',
        color: 'orange', action: 'speak-add', gridPosition: 5,
      },
      {
        id: 'platano', label: 'Plátano', icon: 'Banana',
        color: 'orange', action: 'speak-add', gridPosition: 6,
      },
      {
        id: 'pan', label: 'Pan', icon: 'Croissant',
        color: 'orange', action: 'speak-add', gridPosition: 7,
      },
    ],
  },
  {
    id: 'necesidades.bano',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'bano.1', label: 'Sentarse', icon: 'Armchair',
        color: 'blue', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'bano.2', label: 'Hacer pipí', icon: 'Droplet',
        color: 'blue', action: 'speak-add', gridPosition: 3,
      },
      {
        id: 'bano.3', label: 'Tirar cadena', icon: 'Delete',
        color: 'blue', action: 'speak-add', gridPosition: 4,
      },
      {
        id: 'bano.4', label: 'Lavarse manos', icon: 'Hand',
        color: 'blue', action: 'speak-add', gridPosition: 5,
      },
    ],
  },
  {
    id: 'necesidades.dolor',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'dolor.cabeza', label: 'Cabeza', icon: 'Brain',
        color: 'orange', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'dolor.guatita', label: 'Guatita', icon: 'Accessibility',
        color: 'orange', action: 'speak-add', gridPosition: 3,
      },
      {
        id: 'dolor.oidos', label: 'Oídos', icon: 'Ear',
        color: 'orange', action: 'speak-add', gridPosition: 4,
      },
      {
        id: 'dolor.dientes', label: 'Dientes', icon: 'Smile',
        color: 'orange', action: 'speak-add', gridPosition: 5,
      },
    ],
  },
  {
    id: 'emociones',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'feliz', label: 'Feliz', icon: 'Smile',
        color: 'blue', action: 'speak', gridPosition: 2,
      },
      {
        id: 'triste', label: 'Triste', icon: 'Frown',
        color: 'blue', action: 'speak', gridPosition: 3,
      },
      {
        id: 'asustado', label: 'Asustado', icon: 'ShieldAlert',
        color: 'blue', action: 'speak', gridPosition: 4,
      },
      {
        id: 'enojado', label: 'Enojado', icon: 'Angry',
        color: 'blue', action: 'speak', gridPosition: 5,
      },
      {
        id: 'ruido', label: 'Mucho ruido', icon: 'VolumeX',
        color: 'blue', action: 'speak', gridPosition: 6,
      },
      {
        id: 'luz', label: 'Mucha luz', icon: 'SunDim',
        color: 'blue', action: 'speak', gridPosition: 7,
      },
      {
        id: 'espacio', label: 'Necesito espacio', icon: 'Expand',
        color: 'green', action: 'speak', gridPosition: 8,
      },
      {
        id: 'abrazo', label: 'Abrazo', icon: 'Waves',
        color: 'green', action: 'speak', gridPosition: 9,
      },
      {
        id: 'musica', label: 'Música', icon: 'Music',
        color: 'green', action: 'speak', gridPosition: 10,
      },
      {
        id: 'calma', label: 'Zona de calma', icon: 'Leaf',
        color: 'green', action: 'speak', gridPosition: 11,
      },
    ],
  },
  {
    id: 'juegos',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'juegos.juguetes', label: 'Mis Juguetes', icon: 'ToyBrick',
        color: 'orange', action: 'navigate', gridPosition: 2,
      },
      {
        id: 'juegos.pantallas', label: 'Pantallas', icon: 'MonitorSmartphone',
        color: 'orange', action: 'navigate', gridPosition: 3,
      },
      {
        id: 'juegos.lugares', label: 'Lugares', icon: 'MapPin',
        color: 'orange', action: 'navigate', gridPosition: 4,
      },
    ],
  },
  {
    id: 'juegos.juguetes',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'autos', label: 'Autos', icon: 'Car',
        color: 'orange', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'pelota', label: 'Pelota', icon: 'CircleDot',
        color: 'orange', action: 'speak-add', gridPosition: 3,
      },
      {
        id: 'burbujas', label: 'Burbujas', icon: 'Circle',
        color: 'orange', action: 'speak-add', gridPosition: 4,
      },
      {
        id: 'bloques', label: 'Bloques', icon: 'Boxes',
        color: 'orange', action: 'speak-add', gridPosition: 5,
      },
      {
        id: 'rompecabezas', label: 'Rompecabezas', icon: 'Puzzle',
        color: 'orange', action: 'speak-add', gridPosition: 6,
      },
    ],
  },
  {
    id: 'juegos.pantallas',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'tablet', label: 'Tablet', icon: 'TabletSmartphone',
        color: 'orange', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'tele', label: 'Tele', icon: 'Tv',
        color: 'orange', action: 'speak-add', gridPosition: 3,
      },
    ],
  },
  {
    id: 'juegos.lugares',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'casa', label: 'Casa', icon: 'House',
        color: 'orange', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'escuela', label: 'Escuela', icon: 'School',
        color: 'orange', action: 'speak-add', gridPosition: 3,
      },
      {
        id: 'parque', label: 'Parque', icon: 'TreePine',
        color: 'orange', action: 'speak-add', gridPosition: 4,
      },
      {
        id: 'piscina', label: 'Piscina', icon: 'Droplets',
        color: 'orange', action: 'speak-add', gridPosition: 5,
      },
    ],
  },
  {
    id: 'personas',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'mama', label: 'Mamá', icon: 'PersonStanding',
        color: 'yellow', action: 'speak', gridPosition: 2,
      },
      {
        id: 'papa', label: 'Papá', icon: 'PersonStanding',
        color: 'yellow', action: 'speak', gridPosition: 3,
      },
      {
        id: 'hermano', label: 'Hermano/a', icon: 'PersonStanding',
        color: 'yellow', action: 'speak', gridPosition: 4,
      },
      {
        id: 'abuelo', label: 'Abuelo/a', icon: 'PersonStanding',
        color: 'yellow', action: 'speak', gridPosition: 5,
      },
      {
        id: 'profesora', label: 'Profesora', icon: 'PersonStanding',
        color: 'yellow', action: 'speak', gridPosition: 6,
      },
      {
        id: 'terapeuta', label: 'Terapeuta', icon: 'PersonStanding',
        color: 'yellow', action: 'speak', gridPosition: 7,
      },
    ],
  },
  {
    id: 'social',
    pictograms: [
      { ...BACK_BTN },
      {
        id: 'hola', label: 'Hola', icon: 'Waves',
        color: 'pink', action: 'speak-add', gridPosition: 2,
      },
      {
        id: 'adios', label: 'Adiós', icon: 'Hand',
        color: 'pink', action: 'speak-add', gridPosition: 3,
      },
      {
        id: 'gracias', label: 'Gracias', icon: 'Heart',
        color: 'pink', action: 'speak-add', gridPosition: 4,
      },
      {
        id: 'por-favor', label: 'Por favor', icon: 'Handshake',
        color: 'pink', action: 'speak-add', gridPosition: 5,
      },
      {
        id: 'mi-turno', label: 'Mi turno', icon: 'UserRound',
        color: 'pink', action: 'speak', gridPosition: 6,
      },
      {
        id: 'tu-turno', label: 'Tu turno', icon: 'UsersRound',
        color: 'pink', action: 'speak', gridPosition: 7,
      },
    ],
  },
]

export function getScreen(id: string): Pictogram[] {
  return SCREENS.find(s => s.id === id)?.pictograms ?? []
}
