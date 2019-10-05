import {SafeStyle} from '@angular/platform-browser';

export class Question {
  question: string;
  answer: string;
  image: string;
  time: string;
  options: string[];
  imageUrl: HTMLImageElement;
  audio: string[];
  audioElement: HTMLAudioElement[];
}
