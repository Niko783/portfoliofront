import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CardComponent } from './components/skills/card.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/messages/messages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormSkillComponent } from './components/skills/form-skill.component';
import { SkillGalleryComponent } from './components/skills/skill-gallery.component';
import { LoginComponent } from './components/login/login.component';
import { MessageCardComponent } from './components/messages/message-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    PerfilComponent,
    CardComponent,
    HomeComponent,
    MessageComponent,
    SkillsComponent,
    FormSkillComponent,
    SkillGalleryComponent,
    LoginComponent,
    MessageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
