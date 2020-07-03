import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './helpers/auth.guard';
import { PubblicaPubblicitaComponent } from './pubblica-pubblicita/pubblica-pubblicita.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'pubblica-pubblicita', component: PubblicaPubblicitaComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
