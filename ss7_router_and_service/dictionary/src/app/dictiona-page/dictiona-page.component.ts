import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {IWord} from "../../model/i-word";

@Component({
  selector: 'app-dictiona-page',
  templateUrl: './dictiona-page.component.html',
  styleUrls: ['./dictiona-page.component.css']
})
export class DictionaPageComponent implements OnInit {
  iWordList : IWord [] = [];
  constructor(private dictionaryService:DictionaryService) {
    this.iWordList = this.dictionaryService.getAll()
  }

  ngOnInit(): void {
  }

}
