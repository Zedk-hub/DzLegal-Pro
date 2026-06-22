export interface Message {
  id: string;
  sender: 'user' | 'lawyer';
  text: string;
  timestamp: string;
}

export interface PenalCodeArticle {
  id: string;
  number: string;
  title: string;
  textAr: string;
  sourceChapter: string;
  penaltyType: 'جنحة' | 'جناية' | 'مخالفة';
  penaltyDetails: string;
  loopholeHint?: string;
}

export interface ProceduralStep {
  id: string;
  title: string;
  description: string;
  timeLimit?: string;
  legalBasis: string;
  type: 'complaint' | 'investigation' | 'prosecution' | 'trial' | 'appeal';
}

export interface LegalLoophole {
  id: string;
  title: string;
  description: string;
  citation: string;
  relevanceToMules: string;
  defenseTactic: string;
  camscannerPrecedent: string; // Detail Oulmi Aymen acquittal
}

export interface LegalDocumentTemplate {
  id: string;
  title: string;
  description: string;
  recipient: string;
  fields: {
    key: string;
    label: string;
    placeholder: string;
    defaultValue?: string;
  }[];
  bodyPattern: (inputs: Record<string, string>) => string;
}
