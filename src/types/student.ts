export type Student = {
  id: string;
  name: string;
  gender: 'male' | 'female';
  dateOfBirth: Date;
  grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  score: number;
}