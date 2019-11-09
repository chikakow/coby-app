import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonClickComponent } from './button-click/button-click.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [{
  path: 'buttonclick',
  component: ButtonClickComponent
}, {
  path: 'position',
  component: PositionComponent
}, {
  path: '**',
  redirectTo: 'position'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
