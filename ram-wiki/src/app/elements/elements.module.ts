import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { CharactersComponent } from './characters/characters.component';
import { ElementsComponent } from './elements.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { CatalogButtonComponent } from './catalog-button/catalog-button.component';


@NgModule({
  declarations: [
    ElementsComponent,
    LogoComponent,
    SearchComponent,
    CharactersComponent,
    CharacterListComponent,
    CharacterComponent,
    CatalogButtonComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
