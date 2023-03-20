import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/sercives/http.service';

@Component({
  selector: 'app-catalog-button',
  templateUrl: './catalog-button.component.html',
  styleUrls: ['./catalog-button.component.scss']
})
export class CatalogButtonComponent implements OnInit{
  constructor(private router: Router, private http: HttpService) { }

  charactersList: any
  public href: string = ''
  charactersListData: any
  characterData: any = []

  ngOnInit(): void {
    this.href = this.router.url.slice(9)
    this.http.getData().subscribe(res => {
      this.charactersList = res
      this.charactersListData = this.charactersList.results
      this.characterData.push(this.charactersListData.find((elem: any) => elem.id === Number(this.href)))
    })
  }
}
