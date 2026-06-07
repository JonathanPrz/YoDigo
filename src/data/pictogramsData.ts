import { type Folder } from '@/types/saac';

export const CATEGORY_COLORS: Record<string, { border: string; bg: string }> = {
  pronoun:   { border: 'border-yellow-400', bg: 'bg-yellow-50/70' },
  action:    { border: 'border-green-500', bg: 'bg-green-50/70' },
  noun:      { border: 'border-orange-400', bg: 'bg-orange-50/70' },
  adjective: { border: 'border-blue-400', bg: 'bg-blue-50/70' },
  social:    { border: 'border-pink-500', bg: 'bg-pink-50/70' },
  connector: { border: 'border-gray-400', bg: 'bg-gray-50/70' },
};

export const INITIAL_FOLDERS: Record<string, Folder> = {
  root: {
    id: 'root',
    name: 'Inicio',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'mas', label: 'Más', icon: 'Plus', category: 'connector', position: 2, actionType: 'speak' },
      { id: 'no', label: 'No / Stop', icon: 'XCircle', category: 'social', position: 3, actionType: 'speak' },
      { id: 'ayuda', label: 'Ayuda', icon: 'LifeBuoy', category: 'action', position: 4, actionType: 'speak' },
      { id: 'f_necesidades', label: 'Necesidades', icon: 'User', category: 'noun', position: 5, actionType: 'navigate', targetFolder: 'necesidades' },
      { id: 'f_emociones', label: 'Emociones', icon: 'Smile', category: 'adjective', position: 6, actionType: 'navigate', targetFolder: 'emociones' },
      { id: 'f_juegos', label: 'Juegos', icon: 'Gamepad2', category: 'noun', position: 7, actionType: 'navigate', targetFolder: 'juegos' },
      { id: 'f_personas', label: 'Personas', icon: 'Users', category: 'pronoun', position: 8, actionType: 'navigate', targetFolder: 'personas' },
      { id: 'f_social', label: 'Social', icon: 'MessageSquare', category: 'social', position: 9, actionType: 'navigate', targetFolder: 'social' },
    ],
  },
  necesidades: {
    id: 'necesidades',
    name: 'Necesidades',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'ne_comida', label: 'Comida', icon: 'Apple', category: 'noun', position: 5, actionType: 'navigate', targetFolder: 'comida' },
      { id: 'ne_bano', label: 'Baño', icon: 'ShowerHead', category: 'noun', position: 6, actionType: 'navigate', targetFolder: 'bano_seq' },
      { id: 'ne_dolor', label: 'Dolor', icon: 'Heart', category: 'noun', position: 7, actionType: 'navigate', targetFolder: 'dolor' },
      { id: 'tengo_sueno', label: 'Tengo sueño', icon: 'Moon', category: 'adjective', position: 8, actionType: 'speak' },
      { id: 'tengo_frio', label: 'Tengo frío', icon: 'Snowflake', category: 'adjective', position: 9, actionType: 'speak' },
      { id: 'tengo_calor', label: 'Tengo calor', icon: 'Sun', category: 'adjective', position: 10, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'root' },
    ],
  },
  comida: {
    id: 'comida',
    name: 'Comida',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'agua', label: 'Agua', icon: 'Droplet', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'leche', label: 'Leche', icon: 'CupSoda', category: 'noun', position: 6, actionType: 'speak' },
      { id: 'manzana', label: 'Manzana', icon: 'Apple', category: 'noun', position: 7, actionType: 'speak' },
      { id: 'galleta', label: 'Galleta', icon: 'Cookie', category: 'noun', position: 8, actionType: 'speak' },
      { id: 'platano', label: 'Plátano', icon: 'Banana', category: 'noun', position: 9, actionType: 'speak' },
      { id: 'pan', label: 'Pan', icon: 'Croissant', category: 'noun', position: 10, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'necesidades' },
    ],
  },
  bano_seq: {
    id: 'bano_seq',
    name: 'Baño',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'bano_sentar', label: 'Sentarse', icon: 'Armchair', category: 'action', position: 5, actionType: 'speak' },
      { id: 'bano_pipi', label: 'Hacer pipí', icon: 'Droplet', category: 'action', position: 6, actionType: 'speak' },
      { id: 'bano_cadena', label: 'Tirar cadena', icon: 'Delete', category: 'action', position: 7, actionType: 'speak' },
      { id: 'bano_manos', label: 'Lavarse manos', icon: 'HandHelping', category: 'action', position: 8, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'necesidades' },
    ],
  },
  dolor: {
    id: 'dolor',
    name: 'Dolor',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'dolor_cabeza', label: 'Cabeza', icon: 'Brain', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'dolor_guatita', label: 'Guatita', icon: 'Accessibility', category: 'noun', position: 6, actionType: 'speak' },
      { id: 'dolor_oidos', label: 'Oídos', icon: 'Ear', category: 'noun', position: 7, actionType: 'speak' },
      { id: 'dolor_dientes', label: 'Dientes', icon: 'Smile', category: 'noun', position: 8, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'necesidades' },
    ],
  },
  emociones: {
    id: 'emociones',
    name: 'Emociones y Calma',
    pictograms: [
      { id: 'feliz', label: 'Feliz', icon: 'Smile', category: 'adjective', position: 1, actionType: 'speak' },
      { id: 'triste', label: 'Triste', icon: 'Frown', category: 'adjective', position: 2, actionType: 'speak' },
      { id: 'enojado', label: 'Enojado', icon: 'Angry', category: 'adjective', position: 3, actionType: 'speak' },
      { id: 'asustado', label: 'Asustado', icon: 'ShieldAlert', category: 'adjective', position: 5, actionType: 'speak' },
      { id: 'ruido', label: 'Mucho ruido', icon: 'EarOff', category: 'adjective', position: 6, actionType: 'speak' },
      { id: 'luz', label: 'Mucha luz', icon: 'SunDim', category: 'adjective', position: 7, actionType: 'speak' },
      { id: 'espacio', label: 'Necesito espacio', icon: 'Expand', category: 'action', position: 8, actionType: 'speak' },
      { id: 'abrazo', label: 'Abrazo', icon: 'HeartHandshake', category: 'social', position: 9, actionType: 'speak' },
      { id: 'musica', label: 'Música', icon: 'Music', category: 'noun', position: 10, actionType: 'speak' },
      { id: 'calma', label: 'Zona de Calma', icon: 'Heart', category: 'action', position: 11, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'root' },
    ],
  },
  juegos: {
    id: 'juegos',
    name: 'Juegos',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'jue_juguetes', label: 'Mis Juguetes', icon: 'ToyBrick', category: 'noun', position: 5, actionType: 'navigate', targetFolder: 'juguetes' },
      { id: 'jue_pantallas', label: 'Pantallas', icon: 'MonitorSmartphone', category: 'noun', position: 6, actionType: 'navigate', targetFolder: 'pantallas' },
      { id: 'jue_lugares', label: 'Lugares', icon: 'MapPin', category: 'noun', position: 7, actionType: 'navigate', targetFolder: 'lugares' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'root' },
    ],
  },
  juguetes: {
    id: 'juguetes',
    name: 'Mis Juguetes',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'autos', label: 'Autos', icon: 'Car', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'pelota', label: 'Pelota', icon: 'CircleDot', category: 'noun', position: 6, actionType: 'speak' },
      { id: 'burbujas', label: 'Burbujas', icon: 'Circle', category: 'noun', position: 7, actionType: 'speak' },
      { id: 'bloques', label: 'Bloques', icon: 'Boxes', category: 'noun', position: 8, actionType: 'speak' },
      { id: 'rompecabezas', label: 'Rompecabezas', icon: 'Puzzle', category: 'noun', position: 9, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'juegos' },
    ],
  },
  pantallas: {
    id: 'pantallas',
    name: 'Pantallas',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'tablet', label: 'Tablet', icon: 'TabletSmartphone', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'tele', label: 'Tele', icon: 'Tv', category: 'noun', position: 6, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'juegos' },
    ],
  },
  lugares: {
    id: 'lugares',
    name: 'Lugares',
    pictograms: [
      { id: 'quiero', label: 'Quiero', icon: 'Hand', category: 'action', position: 1, actionType: 'speak' },
      { id: 'casa', label: 'Casa', icon: 'House', category: 'noun', position: 5, actionType: 'speak' },
      { id: 'escuela', label: 'Escuela', icon: 'School', category: 'noun', position: 6, actionType: 'speak' },
      { id: 'parque', label: 'Parque', icon: 'TreePine', category: 'noun', position: 7, actionType: 'speak' },
      { id: 'piscina', label: 'Piscina', icon: 'Droplet', category: 'noun', position: 8, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'juegos' },
    ],
  },
  personas: {
    id: 'personas',
    name: 'Personas',
    pictograms: [
      { id: 'mama', label: 'Mamá', icon: 'UserRound', category: 'pronoun', position: 1, actionType: 'speak' },
      { id: 'papa', label: 'Papá', icon: 'UserRound', category: 'pronoun', position: 2, actionType: 'speak' },
      { id: 'hermano', label: 'Hermano/a', icon: 'UserRound', category: 'pronoun', position: 3, actionType: 'speak' },
      { id: 'abuelo', label: 'Abuelo/a', icon: 'UserRound', category: 'pronoun', position: 5, actionType: 'speak' },
      { id: 'profesora', label: 'Profesora', icon: 'UserRound', category: 'pronoun', position: 6, actionType: 'speak' },
      { id: 'terapeuta', label: 'Terapeuta', icon: 'UserRound', category: 'pronoun', position: 7, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'root' },
    ],
  },
  social: {
    id: 'social',
    name: 'Social',
    pictograms: [
      { id: 'hola', label: 'Hola', icon: 'HandHelping', category: 'social', position: 1, actionType: 'speak' },
      { id: 'adios', label: 'Adiós', icon: 'Waves', category: 'social', position: 2, actionType: 'speak' },
      { id: 'gracias', label: 'Gracias', icon: 'HeartHandshake', category: 'social', position: 3, actionType: 'speak' },
      { id: 'por_favor', label: 'Por favor', icon: 'Handshake', category: 'social', position: 5, actionType: 'speak' },
      { id: 'mi_turno', label: 'Mi turno', icon: 'UserRound', category: 'social', position: 6, actionType: 'speak' },
      { id: 'tu_turno', label: 'Tu turno', icon: 'UsersRound', category: 'social', position: 7, actionType: 'speak' },
      { id: 'atras', label: 'Atrás', icon: 'ArrowLeft', category: 'connector', position: 4, actionType: 'navigate', targetFolder: 'root' },
    ],
  },
};

export function getFolder(id: string): Folder | undefined {
  return INITIAL_FOLDERS[id];
}
