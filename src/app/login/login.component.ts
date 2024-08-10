import { Component, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithRedirect,
  user,
  User,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth = inject(Auth);
  user$ = user(this.auth);

  constructor() {
    this.user$.subscribe((aUser: User | null) => {
      if (!aUser) console.log('Nutzer ist nicht angemeldet');
      //"aUser == null" ist das gleiche wie "!aUser"
      else console.log('User', aUser.email);
    });
  }

  loginWithGoogle() {
    signInWithRedirect(this.auth, new GoogleAuthProvider());
  }
}
