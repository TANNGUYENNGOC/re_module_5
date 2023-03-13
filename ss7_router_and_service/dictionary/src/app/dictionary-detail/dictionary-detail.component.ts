import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";
import {IWord} from "../../model/i-word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  iWord:IWord;
  constructor(private dictionaryService:DictionaryService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next=>{
      let word = next.get('word');
      this.iWord = this.dictionaryService.findByWord(word)
    })
  }

  ngOnInit(): void {
  }

}
