import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from 'src/app/sercives/http.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  constructor(private router: Router, private http: HttpService) { }

  @Input() charactersList: any
  public href: string = ''
  charactersListData: any
  characterData: any = []
  characterType: string

  ngOnInit(): void {
    this.href = this.router.url.slice(9)
    this.http.getData().subscribe(res => {
      this.charactersList = res
      this.charactersListData = this.charactersList.results
      this.characterData.push(this.charactersListData.find((elem: any) => elem.id === Number(this.href)))
      this.characterType = this.characterData[0].type
      if(this.characterType.length == 0){
        this.characterType = 'Unknown'
      }
    })
  }
}
