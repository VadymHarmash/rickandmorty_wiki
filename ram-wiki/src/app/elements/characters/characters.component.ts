import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/sercives/http.service';
import { SortService } from 'src/app/sercives/sort.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  constructor(private http: HttpService, private sort: SortService){}
  characters: any
  charactersData: any

  ngOnInit(): void {
    this.http.getData().subscribe(res => {
      this.characters = res
      this.charactersData = this.characters.results
      this.sort.cardsSort(this.charactersData)
    })
  }
}
