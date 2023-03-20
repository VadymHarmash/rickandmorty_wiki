import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/sercives/http.service';
import { SortService } from 'src/app/sercives/sort.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpService, private sort: SortService) { }
  characters: any
  charactersData: any
  listToggle: boolean = false

  ngOnInit(): void {
    this.http.getData().subscribe(res => {
      this.characters = res
      this.charactersData = this.characters.results
      this.sort.cardsSort(this.charactersData)
    })
  }

  searchCharacter(str: string) {
    const seacredCharacters = document.querySelectorAll('.charactersInSearch')
    
    if (str.length != 0) {
      this.listToggle = true
      seacredCharacters.forEach((character) => {
        const name = character.innerHTML.trim() 
        if (name.search(RegExp(str.trim(), "gi")) !== -1) {
          character.classList.remove('hide')
        } else {
          character.classList.add('hide')
        }
      })
    } else {
      this.listToggle = false
      seacredCharacters.forEach((character) => {
        character.classList.remove('hide')
      })
    }
  }
}
