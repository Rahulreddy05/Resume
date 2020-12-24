import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsworkedComponent } from './components/projectsworked/projectsworked.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'projectsworked',component: ProjectsworkedComponent},
  {path:'skills',component: SkillsComponent},
  {path:'experience',component: ExperienceComponent},
  {path:'education',component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
