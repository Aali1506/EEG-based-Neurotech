export interface Patient {
  name: string;
  age: string;
}

export interface Admin {
  username: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  image?: string;
  audioUrl?: string;
  options: string[] | { text: string; image: string }[];
  correctAnswer: number;
  isAudioQuestion: boolean;
}

export interface QuizResult {
  patientName: string;
  patientAge: string;
  genre: string;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  correctAnswers: boolean[];
  prediction: string;
  timestamp: Date;
}

export type Genre = 'CARTOONS' | 'COLOR' | 'ANIMALS' | 'FRUITS';
