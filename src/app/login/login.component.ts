import { Component, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  user,
  User,
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth = inject(Auth);
  user$ = user(this.auth);
  email: string = '';
  password: string = '';

  constructor() {
    this.user$.subscribe((aUser: User | null) => {
      if (!aUser) console.log('Nutzer ist nicht angemeldet');
      else console.log('User', aUser.email);
    });
  }

  loginWithGoogle() {
    signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  loginWithEmail() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        console.log('Email Login erfolgreich');
      })
      .catch((error) => {
        console.error('Fehler beim Email Login', error);
      });
  }

  registerWithEmail() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        console.log('Email Regestierung erfolgreich');
      })
      .catch((error) => {
        console.error('Fehler bei der Email Regestierung', error);
      });
  }
}
