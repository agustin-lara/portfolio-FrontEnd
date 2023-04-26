import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    ExperienceComponent,
    LoginComponent,
    NotfoundComponent,
    ProfileEditComponent,
    ExperienceEditComponent,
    SkillsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
