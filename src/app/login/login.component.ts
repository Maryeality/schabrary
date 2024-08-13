import { Component, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  user,
  User,
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HomeComponent, PopupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth = inject(Auth);
  user$ = user(this.auth);
  email: string = '';
  password: string = '';
  private isPopupOpened = false;

  constructor(private dialog: MatDialog) {
    this.user$.subscribe((aUser: User | null) => {
      if (!aUser) console.log('Nutzer ist nicht angemeldet');
      else console.log('User', aUser.email);
    });
  }

  openDialog() {
    if (!this.isPopupOpened) {
      const dialogRef = this.dialog.open(PopupComponent, {
        data: {
          email: this.email,
          password: this.password,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.email = result.email;
          this.password = result.password;
        }
        this.isPopupOpened = false;
      });
      this.isPopupOpened = true;
    }
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
