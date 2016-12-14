import  { RouterModule, Routes } from '@angular/router';

export const MainRoutes:Routes=[
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:'HomeComponent'},
   {path:'about',component:'AboutComponent'},
   {path:'contact',component:'ContactComponent'},
   {path:'contactUs',redirectTo:'contact'}

]


