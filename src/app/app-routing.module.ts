import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailComponent} from './components/detail/detail.component';
import {NavbarComponent} from './components/navbar/navbar.component';


const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:name',component:DetailComponent},
  {path:'navbar',component:NavbarComponent},
  ];

@NgModule({
  exports:[RouterModule],
  imports: [
   RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
