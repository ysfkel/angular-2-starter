import  { RouterModule, Routes } from '@angular/router';

export const routes:Routes=[
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'Home',component:'HomeComponent'},
   {path:'About',component:'AboutComponent'},
   {path:'contact',component:'ContactComponent'},
   {path:'contactUs',redirectTo:'contact'}
]
