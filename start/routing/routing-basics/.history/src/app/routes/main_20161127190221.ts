import  { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

export const MainRoutes:Routes=[
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contact',component:ContactComponent},
   {path:'contactUs',redirectTo:'contact'}

]


