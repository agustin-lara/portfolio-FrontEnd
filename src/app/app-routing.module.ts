import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'perfil', component:ProfileEditComponent},
  {path: 'experiencia', component:ExperienceEditComponent},
  {path: '**', component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
