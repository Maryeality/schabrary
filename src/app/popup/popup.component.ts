import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, FormsModule, LoginComponent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { email: string; password: string },
    private dialogRef: MatDialogRef<PopupComponent>
  ) {}
  closeDialog(): void {
    this.dialogRef.close(this.data);
  }
}
