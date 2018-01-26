import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpComponent } from './exp/exp.component';
import { ContactComponent } from './contact/contact.component';
import { ListeComponent } from './liste/liste.component';
import { LegalComponent } from './legal/legal.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot( routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
