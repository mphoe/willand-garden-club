import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { WordOfTheDayService } from '../services/word-of-the-day.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isFun: boolean = true;
  public expanded: boolean = false;
  public wotd: any = {
    word: undefined,
    definitions: []
  };

  constructor(private dataService: DataService, private wordOfTheDayService: WordOfTheDayService) { }

  ngOnInit() {
    this.dataService.fetchConfig().subscribe((data) => {
      this.isFun = data.isFun;
      if (this.isFun) {
        this.wordOfTheDayService.fetchWordOfTheDay(data, (resp) => {
          this.wotd = resp;
        });
      }
    });
  }

}
