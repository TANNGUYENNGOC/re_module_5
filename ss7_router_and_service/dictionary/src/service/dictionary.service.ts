import { Injectable } from '@angular/core';
import {IWord} from "../model/i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  listDictionay : IWord [] = [
    {word:"Hello", mean:"Xin chào",describe:"đó là 1 lời chào nhưng đổi syntax"},
    {word:"Apple", mean:"Quả táo", describe:"Là 1 loại trái cây ăn đc"},
  ]
  constructor() { }

  getAll(){
    return this.listDictionay;
  }

  findByWord(word:string){
    return this.listDictionay.filter(it => it.word === word)[0];
  }
}
