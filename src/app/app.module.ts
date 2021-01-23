import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MountainHeadComponent } from './mountain-head/mountain-head.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PreloadComponent } from './components/preload/preload.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainHeadComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    FooterComponent,
    ProjectsComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
