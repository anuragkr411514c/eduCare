import {SafeStyle} from '@angular/platform-browser';

export class Question {
  question: string;
  answer: string;
  image: string;
  time: string;
  options: string[];
  imageUrl: HTMLImageElement;
  // tslint:disable-next-line:variable-name
  audio_urls: string[];
  audioElement: HTMLAudioElement[];
}
