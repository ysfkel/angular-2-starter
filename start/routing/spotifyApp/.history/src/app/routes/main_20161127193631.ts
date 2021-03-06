import  { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';

export const MainRoutes:Routes=[

   {path:'',redirectTo:'home',pathMatch:'full'},

   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contact',component:ContactComponent},
   {path:'product/:id',component:ProductComponent},

   {path:'contactUs',redirectTo:'contact'}

]


