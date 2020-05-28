import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeeeeeeeLabComponentComponent } from './weeeeeee-lab-component/weeeeeee-lab-component.component';
import { MehComponent } from './meh/meh.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'weeeeeee', component: WeeeeeeeLabComponentComponent},
  {path: 'Meh', component: MehComponent},
  {path: 'Main', component: MainComponent},
  { path: '',   redirectTo: '/Main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
