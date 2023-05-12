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
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { EducationComponent } from './components/education/education.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { RegisterComponent } from './components/register/register.component';

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
    ExperienceEditComponent,
    SkillsEditComponent,
    ProjectsEditComponent,
    EducationComponent,
    EducationEditComponent,
    RegisterComponent
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
