import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HochladenComponent } from './hochladen/hochladen.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hochladen', component: HochladenComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent },
];
