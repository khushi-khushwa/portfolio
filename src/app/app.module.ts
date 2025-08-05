import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import {MatIconModule} from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RecentPagesComponent } from './recent-pages/recent-pages.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
HomeComponent,
    ResumeComponent,
    ContactComponent,
    EducationComponent,
    AboutComponent,
    RecentPagesComponent,
    SkillsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
