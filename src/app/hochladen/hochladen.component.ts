import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, DocumentReference, Firestore } from '@angular/fire/firestore';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
//import { HomeComponent } from './home/home.component';
//import { HochladenComponent } from './hochladen/hochladen.component';

interface Item {
  name: string;
}

@Component({
  selector: 'app-hochladen',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, NgForOf, CommonModule, ReactiveFormsModule, FormsModule, AppComponent ],
  templateUrl: './hochladen.component.html',
  styleUrl: './hochladen.component.scss'
})

export class HochladenComponent {
    title = 'schabrary';
    item$: Observable<Item[]>;
    firestore: Firestore = inject(Firestore);
    itemCollection: CollectionReference;
    tempName: string = '';
  
    buttonClick() {
      this.addItem(this.tempName);
      this.tempName = '';
    }
    pressEnter($event: KeyboardEvent) {
      console.log($event);
      if ($event.key == 'Enter') {
        this.addItem(this.tempName);
        this.tempName = '';
      }
    }
    constructor() {
      this.itemCollection = collection(this.firestore, 'items');
      this.item$ = collectionData<Item>(this.itemCollection);
      setTimeout(() => {
        this.tempName = 'Fiji';
      }, 5000);
    }
    addItem(name: string) {
      if (!name) return;

      console.log(name)
  
      addDoc(this.itemCollection, <Item>{ name }).then(
        (DocumentReference: DocumentReference) => {}
      );
    }
}
