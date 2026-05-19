import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Jobs } from './component/jobs/jobs';
import { Admissions } from './component/admissions/admissions';
import { Contact } from './component/contact/contact';
import { Hiring } from './component/hiring/hiring';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'jobs',
    component: Jobs
  },

  {
    path: 'admissions',
    component: Admissions
  },

  {
    path: 'contact',
    component: Contact
  },
  {
     path: 'hiring',
     component: Hiring
   }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
