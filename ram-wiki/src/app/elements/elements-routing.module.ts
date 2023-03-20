import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { ElementsComponent } from './elements.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CharactersComponent
      },
      {
        path: 'details/:id',
        pathMatch: 'full',
        component: CharacterComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
