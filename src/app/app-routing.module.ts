import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'experiencia', component:ExperienceEditComponent},
  {path: 'formacion', component:EducationEditComponent},
  {path: 'habilidades', component:SkillsEditComponent},
  {path: 'proyectos', component:ProjectsEditComponent},
  {path: '**', component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
