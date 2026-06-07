import { type Pictogram, type Folder } from '@/types'

export const FOLDERS: Folder[] = [
  {
    id: 'root',
    name: 'Inicio',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'HeartHandshake', category: 'action', position: 1, actionType: 'speak' },
      { id: 'mas', label: 'Más', icon: 'PlusCircle', category: 'connector', position: 2, actionType: 'speak' },
      { id: 'no-stop', label: 'No', icon: 'CircleX', category: 'connector', position: 3, actionType: 'speak' },
      { id: 'ayuda', label: 'Ayuda', icon: 'LifeBuoy', category: 'action', position: 4, actionType: 'speak' },
      { id: 'necesidades', label: 'Necesidades', icon: 'Heart', category: 'noun', position: 5, actionType: 'navigate', targetFolder: 'necesidades' },
      { id: 'emociones', label: 'Emociones', icon: 'SmilePlus', category: 'adjective', position: 6, actionType: 'navigate', targetFolder: 'emociones' },
      { id: 'juegos', label: 'Juegos', icon: 'Gamepad2', category: 'noun', position: 7, actionType: 'navigate', targetFolder: 'juegos' },
      { id: 'personas', label: 'Personas', icon: 'Users', category: 'pronoun', position: 8, actionType: 'navigate', targetFolder: 'personas' },
      { id: 'social', label: 'Social', icon: 'Handshake', category: 'social', position: 9, actionType: 'navigate', targetFolder: 'social' },
    ],
  },
  {
    id: 'necesidades',
    name: 'Necesidades',
    pictograms: [
      { id: 'ne-comida', label: 'Comida', icon: 'Apple', category: 'noun', position: 2, actionType: 'navigate', targetFolder: 'ne-comida' },
      { id: 'ne-bano', label: 'Baño', icon: 'Bath', category: 'noun', position: 3, actionType: 'navigate', targetFolder: 'ne-bano' },
      { id: 'ne-dolor', label: 'Dolor', icon: 'Stethoscope', category: 'noun', position: 4, actionType: 'navigate', targetFolder: 'ne-dolor' },
      { id: 'sueno', label: 'Tengo sueño', icon: 'Moon', category: 'adjective', position: 5, actionType: 'speak' },
      { id: 'frio', label: 'Tengo frío', icon: 'Snowflake', category: 'adjective', position: 6, actionType: 'speak' },
      { id: 'calor', label: 'Tengo calor', icon: 'Sun', category: 'adjective', position: 7, actionType: 'speak' },
    ],
  },
  {
    id: 'ne-comida',
    name: 'Comida',
    pictograms: [
      { id: 'agua', label: 'Agua', icon: 'Droplets', category: 'noun', position: 2, actionType: 'speak' },
      { id: 'leche', label: 'Leche', icon: 'GlassWater', category: 'noun', position: 3, actionType: 'speak' },
      { id: 'manzana', label: 'Manzana', icon: 'Apple', category: 'noun', position: 4, actionType: 'speak' },
      { id: 'galleta', label: 'Galleta', icon: 'Cookie', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'platano', label: 'Plátano', icon: 'Banana', category: 'noun', position: 6, actionType: 'speak' },
      { id: 'pan', label: 'Pan', icon: 'Croissant', category: 'noun', position: 7, actionType: 'speak' },
    ],
  },
  {
    id: 'ne-bano',
    name: 'Baño',
    pictograms: [
      { id: 'bano-sentar', label: 'Sentarse', icon: 'Armchair', category: 'action', position: 2, actionType: 'speak' },
      { id: 'bano-pipi', label: 'Hacer pipí', icon: 'Droplet', category: 'action', position: 3, actionType: 'speak' },
      { id: 'bano-cadena', label: 'Tirar cadena', icon: 'Delete', category: 'action', position: 4, actionType: 'speak' },
      { id: 'bano-manos', label: 'Lavarse manos', icon: 'Hand', category: 'action', position: 5, actionType: 'speak' },
    ],
  },
  {
    id: 'ne-dolor',
    name: 'Dolor',
    pictograms: [
      { id: 'dolor-cabeza', label: 'Cabeza', icon: 'Brain', category: 'noun', position: 2, actionType: 'speak' },
      { id: 'dolor-guatita', label: 'Guatita', icon: 'Accessibility', category: 'noun', position: 3, actionType: 'speak' },
      { id: 'dolor-oidos', label: 'Oídos', icon: 'Ear', category: 'noun', position: 4, actionType: 'speak' },
      { id: 'dolor-dientes', label: 'Dientes', icon: 'Smile', category: 'noun', position: 5, actionType: 'speak' },
    ],
  },
  {
    id: 'emociones',
    name: 'Emociones',
    pictograms: [
      { id: 'feliz', label: 'Feliz', icon: 'Smile', category: 'adjective', position: 2, actionType: 'speak' },
      { id: 'triste', label: 'Triste', icon: 'Frown', category: 'adjective', position: 3, actionType: 'speak' },
      { id: 'asustado', label: 'Asustado', icon: 'ShieldAlert', category: 'adjective', position: 4, actionType: 'speak' },
      { id: 'enojado', label: 'Enojado', icon: 'Angry', category: 'adjective', position: 5, actionType: 'speak' },
      { id: 'ruido', label: 'Mucho ruido', icon: 'VolumeX', category: 'adjective', position: 6, actionType: 'speak' },
      { id: 'luz', label: 'Mucha luz', icon: 'SunDim', category: 'adjective', position: 7, actionType: 'speak' },
      { id: 'espacio', label: 'Necesito espacio', icon: 'Expand', category: 'action', position: 8, actionType: 'speak' },
      { id: 'abrazo', label: 'Abrazo', icon: 'Waves', category: 'social', position: 9, actionType: 'speak' },
      { id: 'musica', label: 'Música', icon: 'Music', category: 'noun', position: 10, actionType: 'speak' },
      { id: 'calma', label: 'Zona de calma', icon: 'Leaf', category: 'noun', position: 11, actionType: 'speak' },
    ],
  },
  {
    id: 'juegos',
    name: 'Juegos',
    pictograms: [
      { id: 'jue-juguetes', label: 'Mis Juguetes', icon: 'ToyBrick', category: 'noun', position: 2, actionType: 'navigate', targetFolder: 'jue-juguetes' },
      { id: 'jue-pantallas', label: 'Pantallas', icon: 'MonitorSmartphone', category: 'noun', position: 3, actionType: 'navigate', targetFolder: 'jue-pantallas' },
      { id: 'jue-lugares', label: 'Lugares', icon: 'MapPin', category: 'noun', position: 4, actionType: 'navigate', targetFolder: 'jue-lugares' },
    ],
  },
  {
    id: 'jue-juguetes',
    name: 'Mis Juguetes',
    pictograms: [
      { id: 'autos', label: 'Autos', icon: 'Car', category: 'noun', position: 2, actionType: 'speak' },
      { id: 'pelota', label: 'Pelota', icon: 'CircleDot', category: 'noun', position: 3, actionType: 'speak' },
      { id: 'burbujas', label: 'Burbujas', icon: 'Circle', category: 'noun', position: 4, actionType: 'speak' },
      { id: 'bloques', label: 'Bloques', icon: 'Boxes', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'rompecabezas', label: 'Rompecabezas', icon: 'Puzzle', category: 'noun', position: 6, actionType: 'speak' },
    ],
  },
  {
    id: 'jue-pantallas',
    name: 'Pantallas',
    pictograms: [
      { id: 'tablet', label: 'Tablet', icon: 'TabletSmartphone', category: 'noun', position: 2, actionType: 'speak' },
      { id: 'tele', label: 'Tele', icon: 'Tv', category: 'noun', position: 3, actionType: 'speak' },
    ],
  },
  {
    id: 'jue-lugares',
    name: 'Lugares',
    pictograms: [
      { id: 'casa', label: 'Casa', icon: 'House', category: 'noun', position: 2, actionType: 'speak' },
      { id: 'escuela', label: 'Escuela', icon: 'School', category: 'noun', position: 3, actionType: 'speak' },
      { id: 'parque', label: 'Parque', icon: 'TreePine', category: 'noun', position: 4, actionType: 'speak' },
      { id: 'piscina', label: 'Piscina', icon: 'Droplets', category: 'noun', position: 5, actionType: 'speak' },
    ],
  },
  {
    id: 'personas',
    name: 'Personas',
    pictograms: [
      { id: 'mama', label: 'Mamá', icon: 'PersonStanding', category: 'pronoun', position: 2, actionType: 'speak' },
      { id: 'papa', label: 'Papá', icon: 'PersonStanding', category: 'pronoun', position: 3, actionType: 'speak' },
      { id: 'hermano', label: 'Hermano/a', icon: 'PersonStanding', category: 'pronoun', position: 4, actionType: 'speak' },
      { id: 'abuelo', label: 'Abuelo/a', icon: 'PersonStanding', category: 'pronoun', position: 5, actionType: 'speak' },
      { id: 'profesora', label: 'Profesora', icon: 'PersonStanding', category: 'pronoun', position: 6, actionType: 'speak' },
      { id: 'terapeuta', label: 'Terapeuta', icon: 'PersonStanding', category: 'pronoun', position: 7, actionType: 'speak' },
    ],
  },
  {
    id: 'social',
    name: 'Social',
    pictograms: [
      { id: 'hola', label: 'Hola', icon: 'Waves', category: 'social', position: 2, actionType: 'speak' },
      { id: 'adios', label: 'Adiós', icon: 'Hand', category: 'social', position: 3, actionType: 'speak' },
      { id: 'gracias', label: 'Gracias', icon: 'Heart', category: 'social', position: 4, actionType: 'speak' },
      { id: 'por-favor', label: 'Por favor', icon: 'Handshake', category: 'social', position: 5, actionType: 'speak' },
      { id: 'mi-turno', label: 'Mi turno', icon: 'UserRound', category: 'social', position: 6, actionType: 'speak' },
      { id: 'tu-turno', label: 'Tu turno', icon: 'UsersRound', category: 'social', position: 7, actionType: 'speak' },
    ],
  },
]

export function getFolder(id: string): Folder | undefined {
  return FOLDERS.find(f => f.id === id)
}
