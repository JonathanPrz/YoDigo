export type FitzgeraldCategory = 'pronoun' | 'action' | 'noun' | 'adjective' | 'social' | 'connector';

export interface Pictogram {
  id: string;
  label: string;
  icon: string;
  category: FitzgeraldCategory;
  position: number;
  actionType: 'speak' | 'navigate' | 'sequence';
  targetFolder?: string;
  customImage?: string;
}

export interface Folder {
  id: string;
  name: string;
  pictograms: Pictogram[];
}
