import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  constructor(){}

  @Input() charactersList: any
}
