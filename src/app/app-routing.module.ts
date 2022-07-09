import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/messages/messages.component';
import { FormSkillComponent } from './components/skills/form-skill.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillGalleryComponent } from './components/skills/skill-gallery.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: FooterComponent},
  {path: "skills/form", component: FormSkillComponent},
  {path: "skills/form/:id", component: FormSkillComponent},
  {path: "skills", component: SkillsComponent},
  {path: "skills/gallery", component: SkillGalleryComponent},
  {path: "messages", component: MessageComponent},
  {path: "login", component: LoginComponent},
  {path: '', redirectTo:"/home", pathMatch: 'full'},
  {path: '**', redirectTo:"/home", pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
