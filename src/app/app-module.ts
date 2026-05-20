import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './component/navbar/navbar';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Jobs } from './component/jobs/jobs';
import { Admissions } from './component/admissions/admissions';
import { Contact } from './component/contact/contact';
import { Footer } from './component/footer/footer';
import { Hiring } from './component/hiring/hiring';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Navbar, Home, About, Jobs, Admissions, Contact, Footer, Hiring],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
