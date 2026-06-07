import { useState } from 'react';
import * as Icons from 'lucide-react';
import { INITIAL_FOLDERS, CATEGORY_COLORS } from './data/pictogramsData';
import { Pictogram } from './types/saac';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export default function App() {
  const [currentFolderId, setCurrentFolderId] = useState<string>('root');
  const [sentence, setSentence] = useState<Pictogram[]>([]);
  
  const [hiddenButtons, setHiddenButtons] = useState<Record<string, boolean>>({});
  const [isTutorMode, setIsTutorMode] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const currentFolder = INITIAL_FOLDERS[currentFolderId] || INITIAL_FOLDERS['root'];

  const handlePictogramClick = (pic: Pictogram) => {
    if (isTutorMode) {
      setHiddenButtons(prev => ({ ...prev, [pic.id]: !prev[pic.id] }));
      return;
    }

    if (pic.actionType === 'speak') {
      setSentence(prev => [...prev, pic]);
    } else if (pic.actionType === 'navigate' && pic.targetFolder) {
      setCurrentFolderId(pic.targetFolder);
    }
  };

  const handleTutorVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '12') {
      setIsTutorMode(true);
      setIsDialogOpen(false);
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : <Icons.HelpCircle className={className} />;
  };

  const renderGridSlot = (pos: number) => {
    const pic = currentFolder.pictograms.find(p => p.position === pos);
    const isHidden = pic ? hiddenButtons[pic.id] : false;

    if (isHidden && !isTutorMode) {
      return <div key={`hidden-${pos}`} className="aspect-square" />;
    }

    if (!pic) {
      return <div key={`empty-${pos}`} className="aspect-square" />;
    }

    const colors = CATEGORY_COLORS[pic.category] || { border: 'border-slate-300', bg: 'bg-white' };

    return (
      <div key={pic.id} className="aspect-square">
        <button
          onClick={() => handlePictogramClick(pic)}
          className={`
            w-full h-full flex flex-col items-center justify-center gap-0.5 p-1.5
            border-[5px] rounded-2xl font-sans transition-transform active:scale-95 touch-manipulation select-none relative overflow-hidden
            ${colors.border} ${colors.bg}
            ${isHidden ? 'opacity-30 border-dashed grayscale' : 'shadow-sm'}
          `}
        >
          {pic.actionType === 'navigate' && (
            <span className="absolute top-0.5 right-1 text-[10px] opacity-60">📁</span>
          )}
          
          <div className="flex items-center justify-center text-slate-700">
            {renderIcon(pic.icon, "w-8 h-8 sm:w-10 sm:h-10 stroke-[2.3]")}
          </div>

          <span className="text-[10px] sm:text-xs font-bold leading-tight text-center text-slate-800 uppercase">
            {pic.label}
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-slate-50 flex flex-col p-4 select-none overflow-hidden">
      
      <div className="w-full bg-white border-4 border-slate-300 rounded-2xl p-3 mb-4 flex items-center gap-3 shadow-sm min-h-[96px]">
        <div className="flex-1 flex items-center gap-2 overflow-x-auto min-h-[64px]">
          {sentence.map((pic, idx) => {
            const colors = CATEGORY_COLORS[pic.category];
            return (
              <div 
                key={`${pic.id}-${idx}`} 
                className={`flex flex-col items-center justify-center h-16 px-3 border-2 rounded-xl shrink-0 ${colors.border} ${colors.bg}`}
              >
                {renderIcon(pic.icon, "w-6 h-6 text-slate-700")}
                <span className="text-xs font-bold text-slate-800 mt-0.5">{pic.label}</span>
              </div>
            );
          })}
        </div>
        
        <div className="flex gap-2 shrink-0">
          <Button 
            onClick={() => alert(`Leyendo frase: ${sentence.map(p => p.label).join(' ')}`)} 
            disabled={sentence.length === 0}
            className="h-16 w-16 bg-green-500 text-white rounded-xl font-bold text-xs border-b-4 border-green-700 active:border-b-0"
          >
            LEER
          </Button>
          <Button 
            onClick={() => setSentence([])} 
            disabled={sentence.length === 0}
            className="h-16 w-16 bg-rose-500 text-white rounded-xl font-bold text-xs border-b-4 border-rose-700 active:border-b-0"
          >
            BORRAR
          </Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3 p-1 sm:p-2 max-w-5xl mx-auto w-full min-h-0">
        {Array.from({ length: 16 }, (_, i) => renderGridSlot(i + 1))}
      </div>

      <div className="w-full flex justify-between items-center mt-3 pt-2 border-t border-slate-200 text-xs">
        <span className="font-semibold text-slate-500">
          Carpeta: <strong className="text-slate-800 uppercase">{currentFolder.name}</strong>
        </span>

        {isTutorMode ? (
          <div className="bg-amber-100 border border-amber-400 rounded-xl px-3 py-1 flex items-center gap-2">
            <span className="font-bold text-amber-800">🛠️ MODO TUTOR: Pulsa un botón para ocultarlo/mostrarlo</span>
            <Button size="sm" className="h-6 bg-amber-700 text-white font-bold" onClick={() => setIsTutorMode(false)}>
              Salir y Bloquear
            </Button>
          </div>
        ) : (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-slate-400 text-xs hover:text-slate-600 flex gap-1">
                ⚙️ Ajustes de Tutor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[320px]">
              <DialogHeader>
                <DialogTitle className="text-center">Acceso Adulto</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleTutorVerification} className="space-y-4 pt-2">
                <p className="text-sm text-center text-slate-600">
                  Resuelve la multiplicación para continuar: <br />
                  <strong className="text-base text-slate-900">¿Cuánto es 3 x 4?</strong>
                </p>
                <Input
                  type="number"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="text-center text-lg font-bold"
                />
                {pinError && <p className="text-xs text-rose-500 text-center font-bold">Incorrecto, intenta de nuevo.</p>}
                <Button type="submit" className="w-full bg-slate-950 text-white font-bold">Validar</Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
